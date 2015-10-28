/*
 * tabs is an array of all fb tabs.
 * */
function killfb(tabs){
	for(i in tabs){
		var obj ={
			code: "*{display:none;}"
		}; 
		console.log(tabs[i].id +"\t"+ tabs[i].url);
		chrome.tabs.insertCSS(tabs[i].id, obj);
	}
}
chrome.tabs.query({active:false, url:'https://www.facebook.com/'},killfb);
