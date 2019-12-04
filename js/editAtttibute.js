function onAddListItemButtonClick(){
	let addListItemInput = document.getElementById("addListItemInput");
	
	let addListItemInputText = addListItemInput.value;
	
	let listItem = document.createElement("li");

	listItem.textContent = addListItemInput;
	listItem.classList.add("blueText");
	
	skillList.appendChild(ListItem);
	let skillList = document.getElementById("skillList");
}

function onRemoveListItemBUttonClick(){
	let skillList = document.getElementById("skillList");
	skillList.removeChild(skillList.lastElementChild);
	
	skillList.replaceChlid(listItem,skillList.lastElementChild);
}

function onAddLinkButtonClick(){
	let addLinkUrlText = document.getElementById("addLinkUrl").value;
	let addLinkNameText = document.getElementById("addLinkName").value;
	let addHtml = "<a href=\"" + addLinkUrlText + "\" + addLinkNameText + "</a>">";
	let addLink = document.getElementById("addLink");
	addLink.innerHTML = addHtml;
}

