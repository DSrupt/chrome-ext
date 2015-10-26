/*
 * tabs is an array of all fb tabs.
 * */
function killfb(tabs){
	for(i in tabs){
		var obj ={
			code: "*{display:none;}",
			allFrames: true
		}; 
		chrome.tabs.insertCSS(tabs[i].id, obj);
	}
}
chrome.tabs.query({active:false, url:'*://www.facebook.com/'},killfb);
/*chrome.tabs.query({active:false, url:'*://www.facebook.com/'}, function(tabs){
	var div = document.getElementById('status');
	var content = document.createElement("ul");
	console.log(tabs);
	for(i in tabs){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(tabs[i].id +"\t"+ tabs[i].url));
		content.appendChild(li);
	}
	div.appendChild(content);
});*/
