import { MockMethod } from "vite-plugin-mock";
import Mock from "mockjs";

function transformCode(data: Mock.MockjsMock): {
  code: number;
  data: any;
  message: string;
} {
  return {
    data,
    code: 0,
    message: "请求成功",
  };
}

const elementPlusArray: MockMethod[] = [
  {
    url: "/api/ele/city",
    method: "get",
    timeout: 1000,
    response: ({ query }) => {
      return transformCode(
        Mock.mock({
          "list|10": [
            {
              name: "@cname",
              date: "@date(yyyy-MM-dd)",
              city: "@city(true)",
              "age|18-60": 100,
              "num|1-100": 100,
            },
          ],
          "total|10-200": 200,
        })
      );
    },
  },
];

const _default: MockMethod[] = [
  {
    url: "/api/get",
    method: "get",
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: "vben",
        },
      };
    },
  },
  {
    url: "/api/post",
    method: "post",
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: "vben",
      },
    },
  },
  {
    url: "/api/text",
    method: "post",
    rawResponse: async (req, res) => {
      let reqbody = "";
      await new Promise((resolve) => {
        req.on("data", (chunk) => {
          reqbody += chunk;
        });
        req.on("end", () => resolve(undefined));
      });
      res.setHeader("Content-Type", "text/plain");
      res.statusCode = 200;
      res.end(`hello, ${reqbody}`);
    },
  },
];
export default elementPlusArray as MockMethod[];
