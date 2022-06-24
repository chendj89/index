<template>
  <el-table
    ref="mainTable"
    :data="newArr"
    border
    tooltip-effect="dark"
    style="width: 100%"
    show-summary
    :summary-method="myFunc1()"
    :span-method="myFunc2()"
  >
    <el-table-column
      type="index"
      width="80"
      align="center"
      fixed
    ></el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
      fixed
    ></el-table-column>
    <el-table-column
      prop="num"
      label="数量"
      width="80"
      show-overflow-tooltip
      fixed
    ></el-table-column>
    <el-table-column
      prop="num2"
      width="80"
      label="数量2"
      show-overflow-tooltip
    ></el-table-column>
    <el-table-column
      prop="num3"
      width="80"
      label="数量3"
      show-overflow-tooltip
    ></el-table-column>
    <el-table-column
      prop="address"
      width="200"
      label="地址"
      show-overflow-tooltip
    ></el-table-column>
    <el-table-column
      prop="address"
      width="200"
      label="地址"
      show-overflow-tooltip
    ></el-table-column>
    <el-table-column
      prop="address"
      width="200"
      label="地址"
      show-overflow-tooltip
    ></el-table-column>
    <el-table-column
      prop="address"
      width="200"
      label="地址"
      show-overflow-tooltip
    ></el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import {
  tableSummary,
  tableSpanMethod,
  getGroupArrByName,
} from "@docs/.vuepress/utils/table";
interface DataList {
  date: string;
  name: string;
  address: string;
  num: number;
  num2: number;
  num3: number;
}
const dataList: DataList[] = [
  {
    date: "2016-05-03",
    name: "王小虎01",
    address: "上海市普陀区金沙江路 1518 弄",
    num: 1,
    num2: 3,
    num3: 4,
  },
  {
    date: "2016-05-02",
    name: "王小虎01",
    address: "上海市普陀区金沙江路 1518 弄",
    num: 1,
    num2: 3,
    num3: 4,
  },
  {
    date: "2016-05-04",
    name: "王小虎02",
    address: "上海市普陀区金沙江路 1518 弄",
    num: 1,
    num2: 3,
    num3: 4,
  },
  {
    date: "2016-05-01",
    name: "王小虎02",
    address: "上海市普陀区金沙江路 1518 弄",
    num: 1,
    num2: 3,
    num3: 4,
  },
  {
    date: "2016-05-08",
    name: "王小虎03",
    address: "上海市普陀区金沙江路 1518 弄",
    num: 1,
    num2: 3,
    num3: 4,
  },
  {
    date: "2016-05-06",
    name: "王小虎03",
    address: "上海市普陀区金沙江路 1518 弄",
    num: 1,
    num2: 3,
    num3: 4,
  },
  {
    date: "2016-05-07",
    name: "王小虎03",
    address: "上海市普陀区金沙江路 1518 弄",
    num: 1,
    num2: 3,
    num3: 4,
  },
];
let { newArr, rowArr } = getGroupArrByName(dataList, "name");

const myFunc1 = () => {
  return tableSummary({
    rowArr,
    rowName: ["num"],
  });
};
const myFunc2 = () => {
  return tableSpanMethod([1, 2, 4], rowArr);
};
</script>
