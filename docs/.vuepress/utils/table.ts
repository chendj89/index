import type { TableColumnCtx } from "element-plus/es/components/table/src/table-column/defaults";
interface User {
  id: string;
  name: string;
  amount1: string;
  amount2: string;
  amount3: number;
}

interface SpanMethodProps {
  row: User;
  column: TableColumnCtx<User>;
  rowIndex: number;
  columnIndex: number;
}

interface SummaryMethodProps<T = User> {
  columns: TableColumnCtx<T>[];
  data: T[];
}
export interface Summary {}

export function tableSummary({
  rowArr,
  rowName,
}: {
  rowArr: number[];
  rowName: string[];
}) {
  return function (param: SummaryMethodProps<Summary>) {
    const { columns, data } = param;
    const sums: string[] = [];

    columns.forEach((column, index) => {
      if (index === 0) {
        sums[index] = "合计";
        return;
      }
      let columnName = column.property;
      const values = data.map((item) => Number(item[column.property]));

      if (!values.every((value) => Number.isNaN(value))) {
        sums[index] = `${values.reduce((prev, curr, index2) => {
          const value = Number(curr);
          if (!Number.isNaN(value)) {
            if (rowName.includes(columnName)) {
              if (rowArr[index2]) {
                return prev + curr;
              } else {
                return prev;
              }
            } else {
              return prev + curr;
            }
          } else {
            return prev;
          }
        }, 0)}`;
      } else {
        sums[index] = "";
      }
    });
    return sums;
  };
}

/**
 * 数组分组
 * @param arr 数据数组
 * @param key 数据数组中的某个字段名
 * @returns 新的数据数组
 */
export function getGroupArrByName(arr: any[], key: string) {
  let newArr: any[] = [];
  let types: any = {};
  let i: number;
  let j: number;
  let cur: any;
  for (i = 0, j = arr.length; i < j; i++) {
    cur = arr[i];
    if (!(cur[key] in types)) {
      types[cur[key]] = { type: cur[key], data: [] };
    }
    types[cur[key]].data.push(cur);
  }
  for (let jsonKey in types) {
    newArr = newArr.concat(types[jsonKey].data);
  }
  let rowArr: number[] = [];
  let rowPos: number = 0;
  newArr.forEach((item, index) => {
    if (index == 0) {
      rowArr.push(1);
      rowPos = 0;
    } else {
      if (item[key] === newArr[index - 1][key]) {
        rowArr[rowPos] += 1;
        rowArr.push(0);
      } else {
        rowArr.push(1);
        rowPos = index;
      }
    }
  });
  return {
    newArr,
    rowArr,
  };
}

export function tableSpanMethod(arr: number[], rowPos: number[]) {
  return ({ row, column, rowIndex, columnIndex }: SpanMethodProps) => {
    if (arr.includes(columnIndex)) {
      let _row = rowPos[rowIndex];
      let _col = _row > 0 ? 1 : 0;
      return {
        rowspan: _row,
        colspan: _col,
      };
    }
  };
}
