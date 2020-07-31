<template>
  <div class="keyboard-content">
    <div v-if="showClickContent" class="keyboard-pop">
      <label>{{content}}</label>
    </div>
    <section class="keyboard-body">
      <ul v-if="ifShowProvince && showProvince">
        <li class="province" v-for="(item,index) in province" :key="index">
          <label 
            v-if="item === '切换'" 
            class="provinceButton autoWidth left" 
            @click="switchClick"
          >{{item}}</label>
          <label v-else class="provinceButton" @click="click">{{item}}</label>
        </li>
      </ul>
      <ul v-else>
        <li>
          <label class="buttonOne" v-for="(item,index) in number" :key="index" @click="click">{{item}}</label>
        </li>
        <li v-for="(items,index) in en" :key="index">
          <div v-for="(item,index) in items" :key="index">
            <label
              v-if="item === '省份'"
              class="buttonOne autoWidth left"
              @click="switchClick"
            >{{item}}</label>
            <label
              v-else-if="item === '删除'"
              class="buttonOne autoWidth right"
              @click="deleteClick"
            >{{item}}</label>
            <label v-else class="buttonOne" @click="click">{{item}}</label>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  name: "keyborad",
  props:{
    showProvince:Boolean
  },
  data() {
    return {
      showClickContent: false,
      ifShowProvince: this.showProvince || false,
      content: "",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
      en: [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["省份", "Z", "X", "C", "V", "B", "N", "M", "删除"]
      ],
      province: [
        "京","沪","浙","苏","粤","鲁","晋",
        "冀","豫","川","渝","辽","吉","黑",
        "皖","鄂","津","贵","云","桂","琼",
        "青","新","藏",'切换',"蒙","宁","甘","陕",
        "闽","赣","湘"
      ]
    };
  },
  computed:{
    ifShowProvince(){
      return this.showProvince
    }
  },
  methods: {
    click(e) {
      let content = e.target.innerText;
      this.content = content;
      this.$emit('getKey',content)
      this.showClickContent = true;
      setTimeout(() => {
        this.showClickContent = false;
      }, 2000);
    },
    switchClick() {
      this.ifShowProvince = !this.ifShowProvince 
    },
    deleteClick(){
      this.$emit('delete')
    },
  }
};
</script>
<style scoped>
.left{
  float: left;
}
.right{
  float: right;
}
.keyboard-content{
  width: 100%;
}
.province{
  display: inline;
}
.keyboard-pop {
  height: 40px;
  left: 45%;
  line-height: 40px;
  position: absolute;
  bottom: 225px;
  padding: 0px 6px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
}
ul{
  text-align: center;
}
li {
  text-align: center;
  display: inline-block;
}
li div {
  display: inline;
}
label {
  padding: 0 7px;
}
.keyboard-body {
  overflow: hidden;
  background-color: #ced5dd;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  width: 100%;
  position: absolute;
  margin: 0 auto;
  /* height: 6rem; */
  bottom: 0.5rem; /*left: 50%;margin-left: -3rem;*/
}
.buttonOne {
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  border: 0;
  font-size: 0.32rem;
  display: inline-block;
  border-radius: 5px;
  /* border: 1px solid #f68b1b; */
  margin: 0.12rem;
  width: auto;
  height: 35px;
  text-align: center;
  line-height: 35px;
  background-color: #ffffff;
}
.provinceButton {
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  border: 0;
  font-size: 0.32rem;
  display: inline-block;
  border-radius: 5px;
  /* border: 1px solid #f68b1b; */
  margin: 0.12rem;
  width: 0.36rem;
  height: 35px;
  text-align: center;
  line-height: 35px;
  background-color: #ffffff;
}
.autoWidth {
  width: auto;
}
</style>
