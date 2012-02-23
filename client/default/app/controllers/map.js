var mapController = {
	markers : [], // Keep track of any map markers
	map : null,
	renderMap : function() {
		var that=this;
		if($("#mapCanvas").children().length == 0) {
			$("#mapCanvas").height($(window).height() - $(".header").height());
			var myOptions = {
				center : new google.maps.LatLng(-34.397, 150.644),
				zoom : 11,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			};
			this.map = new google.maps.Map(document.getElementById("mapCanvas"), myOptions);
			var map=this.map;
			this.getLocation();
			mapModel.loadPoints(function(res) {
				for(var i = 0; i < res.data.locations.length; i++) {
					var point = res.data.locations[i];
					var pos = new google.maps.LatLng(point.lat, point.lon);
					that.markers.push(new google.maps.Marker({
						position : pos,
						map : map,
						icon : 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + (i + 1) + '|FF0000|000000'
					}));
				}

			});
			
		}
	},
	/*
	 * Get the users location and draw a marker at their location
	 */
	getLocation : function() {
		// Instance of the google map
		var map = this.map;
		var pos = {};
		var that=this;
		$fh.geo({
			interval : 0
		}, function(res) {
			pos = new google.maps.LatLng(res.lat, res.lon);
			map.setCenter(pos);

			// Create a marker at the current location
			that.markers.push(new google.maps.Marker({
				position : pos,
				map : map,
				icon : 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=0|00FF00|000000'
			}));

		}, function() {
			// We failed to get the users geolocation, fallback to geo ip
			alert("$fh.geo failed");
			alert(JSON.stringify(res.geoip));
		});
	}
};
