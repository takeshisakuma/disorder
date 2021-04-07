//Polyfill
import "core-js";

//async awaitを使う場合
//import  regeneratorRuntime  from  "regenerator-runtime" ;

//外部ライブラリインポート確認
import axios from "axios";



//外部TSファイルからのインポート確認
import { importTest } from "./sub";

const message = "TypeScriptの変換成功";

console.log(message);
console.log(importTest);



//外部ライブラリ動作確認
axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
  console.log(res);
}).then(() => {
  console.log("JSON取得成功")
}).catch(() => {
  console.log("JSON取得失敗")
});
