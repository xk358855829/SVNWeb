<!-- 分享 -->
<template>
  <div class="share" v-if="showInfo">
    <div class="ew">
      <p id="code">
        <!-- <img src="../../static/image/zhiwen1.png" alt=""> -->
        <img class="code" src="../../static/image/chekoudai.png" alt="">
      </p>
      <p>长按识别二维码关注公众号</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
import { MessageBox, Indicator, Popup } from "mint-ui";
import { Encrypt,getid,Decrypt } from "./api/api.js";
import QRCode from 'qrcode'
export default {
  name: "sharepeople",
  data () {
    return {    
      showInfo:true,
    };
  },

  components: {
    
  },

  created() {
    
    
  },
  mounted(){
            
  },
  methods: {
    
  }
}

</script>
<style scoped>
.share{
  width: 100%;
  min-height: 100%;
  background: #fff;
}
.ew{
  padding: 1.3rem 0;
}
#code{
  margin: 0 auto;
}
.ew>p:first-of-type>img{
  width: 4.78rem;
  height: 4.78rem;
  margin: 0 auto;
}
.ew>p:last-of-type{
  text-align: center;
  margin-top: 0.4rem;
  font-size: 0.32rem;
  color: rgb(48, 48, 48);
}
#code{
  text-align: center;
}
</style>