<template>
    <div id="layout">
        <el-table
            :data="tableData"
            style="width: 100%"
            :row-class-name="tableRowClassName">
            <el-table-column
            prop="date"
            label="日期"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="180">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址">
            </el-table-column>
            <el-table-column
            prop="task"
            label="任务">
            </el-table-column>
        </el-table>
    </div>
</template>
 
<style>

</style>

<script>
  
  export default {
    name:'Layout',
    data() {
      return {
        tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        task:'js runall'
        }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        task:'	js runall'
        }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        task:'	js runall'
        }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        task:'	js runall'
        }]
      };
    },
    methods: {
        tableRowClassName({row, rowIndex}) {
            console.log(row)
            if (rowIndex === 1) {
            return 'warning-row';
            } else if (rowIndex === 3) {
            return 'success-row';
            }
            return '';
        }
    }
  }
</script>
<style scoped>
    #layout{
        height: calc(100vh - 60px);
    }
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
</style>