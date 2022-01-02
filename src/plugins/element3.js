// 使用插件形式按需引入ui

// 插件写法，导出一个函数，接收应用程序实例；

// 全局引入element3
import element3 from 'element3';
import 'element3/lib/theme-chalk/index.css';

export default function(app) {
  app.use(element3);
}


// 按需引入element
// import {ElButton, ElInput } from 'element3';
// import 'element3/lib/theme-chalk/button.css';
// import 'element3/lib/theme-chalk/input.css';


// export default function(app) {
//   app.use(ElButton);
//   app.use(ElInput);

// }