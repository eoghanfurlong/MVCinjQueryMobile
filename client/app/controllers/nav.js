var nav = {
	map : function() {
		changeView("googleMap");
		if($("#mapCanvas").children().length == 0) {
			$("#mapCanvas").height($(window).height() - $(".header").height());
			var myOptions = {
				center : new google.maps.LatLng(-34.397, 150.644),
				zoom : 8,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(document.getElementById("mapCanvas"), myOptions);
		}
	},
	twitter : function() {
		$.mobile.showPageLoadingMsg()
		tweets.load(function(data){
			var tpl='<img src="{0}"/><p>{1}</p>';
			var html=""
			for (var i=0;i<data.length;i++){
				var d=data[i];//single data instance
				var profileUrl=d['profile_image_url'];
				var user=d['user'];
				var text=d['text'];
				html+="<li>";
				html+=tpl.replace("{0}",profileUrl).replace("{1}",user+text);
				html+="</li>";
				
			}
			$("#twitter #tweets").html(html);
			changeView("tweet");
			$.mobile.hidePageLoadingMsg()
		});
	},
	creditcard : function() {

	},
	camera : function() {

	},
	webview : function() {

	},
	settings : function() {

	}
}