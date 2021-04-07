//Polyfill
import "core-js";

//async awaitを使う場合
//import  regeneratorRuntime  from  "regenerator-runtime" ;

//外部ライブラリインポート確認
import axios from "axios";



//外部TSファイルからのインポート確認
import { bbb } from "./sub";

const message = "aaa";


console.log("Hello!" + message);
console.log("Good-byb" + bbb);
console.log("typescript_deee compiled");


//外部ライブラリ動作確認
axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
  console.log(res);
})
