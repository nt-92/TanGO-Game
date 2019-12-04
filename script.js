let nameList = ["A","B","C","D"];
let nameListStr = nameList.toString();
console.log(nameListStr);

//indexOf() を使って、配列中のある値の位置を探しています
let nameIdx = nameList.indexOf("A");
console.log("Aさんのインデックス :" + nameIdx);
nameIdx = nameList.indexOf("AB");

console.log("AB:"+nameIdx);
let includeResult = nameList.includes("AB");
console.log("ABさんはふくまれているか:"+　includeResult);