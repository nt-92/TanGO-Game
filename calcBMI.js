function testCase1(){
        let flg=true
        document.getElementById("heightInput").value=""
        document.getElementById("weightInput").value=""
        document.getElementById("heightInput").dispatchEvent(new Event("input")) // もしくはblur
        if(document.getElementById("heightInputMsg").textContent!=="身長を入力してください") flg=false
        if(document.getElementById("weightInputMsg").textContent!=="体重を入力してください") flg=false
        if(document.getElementById("calcBMIButton").disabled===false) flg=false
        console.log("テストケース1:",flg)
    }
	
	
	//つっちさん
	function testCase2(){
		let flg=true
		if (typeof (document.getElementById("heightInput").value) === "string" || obj instanceof String) flg=false;
		if (typeof (document.getElementById("weightInput").value) === "string" || obj instanceof String) flg=false;
		if(document.getElementById("heightInputMsg").textContent!=="身長には数値を入力してください。") flg=false
		if(document.getElementById("heightInputMsg").textContent!=="体重には数値を入力してください。") flg=false
		console.log("テストケース2:",flg)
	｝


	//加藤さん
	　window.addEventListener("load", function () {
    testCase2();
	});
	function testCase2() {
		let testResult = true;
		document.getElementById("heightInput").value = "百七十五";
		document.getElementById("weightInput").value = "六十七";
		document.getElementById("heightInput").dispatchEvent(new Event("input"));
		if (document.getElementById("heightInputMsg").textContent !== "身長には数値を入力してください。") {
			testResult = false;
		}
		if (document.getElementById("weightInputMsg").textContent !== "体重には数値を入力してください。") {
			testResult = false;
		}
		if (document.getElementById("calcBMIButton").disabled === false) {
			testResult = false;
		}
		console.log("テストケース2:", testResult);
	}
	
	
