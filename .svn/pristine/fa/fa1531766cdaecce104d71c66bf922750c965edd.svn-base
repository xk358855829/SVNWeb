<template>
  <div id="userList">
    <div class="header">
      <div class="headerTitle">
        <span>用户管理</span>
      </div>
    </div>
    <div class="select">
      <span>手机号：</span>
      <el-input v-model="search.phone" clearable placeholder="请输入内容"></el-input>
    </div>
    <div class="select">
      <el-button type="success" class="oyButton" icon="el-icon-search" @click="searchUserList">查询</el-button>
    </div>
    <div class="Content">
      <el-table class="oyTable" :data="userList.list" style="width: 100%">
        <el-table-column label="用户名">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.name }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.name }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="手机号">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.phone }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.phone }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="创建账户的时间">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.starttime }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.starttime }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="标识">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.openid }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.openid }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="查看柜子和订单信息" placement="top">
              <i class="icon-See el-icon-search" @click="handleOtherInfo(scope.row.openid)"></i>
            </el-tooltip>
            <!-- <el-tooltip class="item" effect="dark" content="修改" placement="top">
              <i class="icon-change el-icon-edit" @click="handleEditequipment(scope.row.eid)"></i>
            </el-tooltip>-->
            <el-tooltip class="item" effect="dark" content="删除" placement="top">
              <i class="icon-delete el-icon-delete" @click="ClickDeleteuser(scope.row.openid)"></i>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="查看柜子和订单信息" :visible.sync="showOtherInfo">
      <el-table class="oyTable" :data="userOtherInfo" style="width: 100%">
        <el-table-column label="标识">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.openid }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.openid }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="支付方式">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.payment }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.payment }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="用户姓名">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.uname }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.uname }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="停车地址">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.address }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="车牌号">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.country }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.country }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="金额">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.money }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.money }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="手机号">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.phone }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.phone }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="柜门">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.typeId }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.typeId }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="设备id">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.deviceId }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.deviceId }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="密码">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.password }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.password }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="订单开始时间">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.starTime }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.starTime }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="订单结束时间">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.endTime }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.endTime }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
    <div class="footer">
			<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page" :page-sizes="[1,2,3,10,11,12]" :page-size="paging.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="totoluser"></el-pagination>
		</div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      showOtherInfo: false,
      search:{
        phone:''
      },
      paging: {
        page: 1,
        pageSize: 10
      },
    };
  },
  computed: {
    ...mapGetters({
      userList: "getUserList",
      userOtherInfo: "getUserOtherInfo"
    }),
    ...mapState(['totoluser'])
  },
  created() {
    this.searchUserList();
    
    // if(payload.phone){
    //   payload.phone=this.search.phone
    // }
  },
  methods: {
    ...mapActions(["initUserList", "toDeleteUser", "getUserOtherInfo"]),
    handleSizeChange(val){
      this.paging.pageSize = val;
      this.searchUserList()
    },
    handleCurrentChange(val){
      this.paging.page = val;
      this.searchUserList()
    },
    ClickDeleteuser(openid) {
      this.$confirm("确认删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.toDeleteUser({ openid: openid }).then(res => {
            console.log(res);
            if (res) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.searchUserList();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleOtherInfo(openid) {
      this.getUserOtherInfo({
        openid: openid
      }).then(res => {
        if (res) {
          this.showOtherInfo = true;
        }
      });
    },
    searchUserList(){
      let payload={
        Page: this.paging.page,
        PageSize: this.paging.pageSize,
        dealer: localStorage.getItem("dealer"),
      }
      if(this.search.phone){
        data.payload=this.search.phone
      }
      this.initUserList(payload);
    }
  }
};
</script>
<style lang="scss" scoped>
#userList {
  padding: 20px;
}
.el-input__inner,
.el-input {
  width: 200px !important;
}
</style>