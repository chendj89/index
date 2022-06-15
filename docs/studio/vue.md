## 查看已注册组件
```ts
import { getCurrentInstance } from "vue";
let app = getCurrentInstance();
console.log(app?.appContext.components);
```