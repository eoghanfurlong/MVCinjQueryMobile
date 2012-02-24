function bindEvent(){
	//homepage menu click event
	$("#menu li").bind("click",function(){
		var id=$(this).attr("id");
		if (id!=undefined){
			nav[id]();
		}
	});
	
	//save setting click event
	$("#settings #saveSetting").bind("click",function(){
		settingsController.saveSettings();
	});
}


