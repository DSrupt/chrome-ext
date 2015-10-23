chrome.tabs.query({active:false}, function(tabs){
	var div = document.getElementById('status');
	var content="<ul>";
	for(i in tabs){
		console.log(i +" "+i.url);
		content+=("<li>"+i.url+"</li>");
	}
	content += ("</ul>");
//	content = document.createTextNode(content);
	div.appendChild(content);
});


