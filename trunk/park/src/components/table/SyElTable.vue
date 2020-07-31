<template>
  <div>
    <!-- <el-table :data="tableData">
      <div v-for="(item,index) in sycolum"
           :key="index">
        <el-table-column :label="item">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row[index] }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row[item] }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
      </div>
    </el-table> -->
  </div>
</template>
<script>
export default {
  name: 'sy-el-table',
  props: ['tableData', 'sycolum'],
  mounted () {
    console.log(this.sycolum, this.tableData)
  }
}
</script>
