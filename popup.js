
chrome.tabs.query({active:false}, function(tabs){
	var div = document.getElementById('status');
	var content = document.createElement("ul");
	console.log(tabs);
	for(i in tabs){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(tabs[i].id +"\t"+ tabs[i].url));
		content.appendChild(li);
	}
	div.appendChild(content);
});


