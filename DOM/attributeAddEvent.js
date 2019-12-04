window.addEventListener("DOMContentLoaded",function(){
	
	let messageArea = document.getElementById("messageArea");
	
	messageArea.addEventListener("input",function(){
		
		let message = messageArea.value;
		
		let msgLength = message.length;
		
		let showMessagelength = document.getElementById("showMessageLength");
		
		showMessageLength.textContent = msgLength + "/70";
		
		if(msgLength > 70){
			messageArea.classList.add("alerTBg");
		}else{
			messageArea.classList.remove("alerTBg");
		}

	});
	
});