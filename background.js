var element;

// onclicked callback function
function openEditor(info, tab){
	var toAdd;
	if (info.srcUrl) toAdd = info.srcUrl;
	
	chrome.tabs.create({url: "editorPage.html#"+toAdd})
}

chrome.contextMenus.create({
	"title": "Grab Image",
	"contexts": ["all"],
	"onclick": openEditor
});