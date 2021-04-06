//外部ライブラリインポート確認
import axios from "axios";

import "core-js";


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
