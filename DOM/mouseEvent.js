outerBox.addEventListener("mousemove",function(event){
	let innerBox = document.getElementById("innerBox");
	innerBox.textContent = "x=" + event.offsetX + ":y=" + event.offsetY;
	});
}
window.   ("DOMContentLoaded",init);