<template>
  <el-button style="margin-bottom:10px" color="#626aef" @click="reloadTable">重新加载</el-button>
  <el-table ref="mainTable" :data="dataList" border tooltip-effect="dark" style="width: 100%" height="440"
    highlight-current-row v-loading="loading">
    <el-table-column type="index" align="center"></el-table-column>
    <el-table-column prop="name" label="姓名" align="center"></el-table-column>
    <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>
    <el-table-column prop="age" label="年纪" show-overflow-tooltip></el-table-column>
    <el-table-column prop="num" label="年薪" show-overflow-tooltip></el-table-column>
    <el-table-column prop="city" label="城市" show-overflow-tooltip></el-table-column>
  </el-table>

</template>

<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";
interface DataList {
  name: string,
  date: string,
  city: string,
  age: number,
  num: number
}
const loading = ref(true)
let dataList = ref<DataList[]>([])

let getTable = () => {
  axios.get("/api/ele/city").then(res => {
    return res.data;
  }).then(res => {
    if (res.code == 0) {
      dataList.value = res.data.list;
    }
  }).finally(() => {
    loading.value = false
  })
}
getTable();
const reloadTable = () => {
  if (!loading.value) {
    loading.value = true;
    getTable();
  }

}

</script>
