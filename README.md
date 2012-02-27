# FeedHenry jQuery Mobile Tutorial - v2

## Overview
In this tutorial we will: 

* Add a number of UI components to the home page
* Use CSS to style the new components

![](https://github.com/feedhenry/FH-Training-App-Sencha/raw/v2/docs/HomeView.png)


## Step 1
In the home.css file in the css directory, add the following code:

		#menu #map div{
			background:url(../images/icons/maps_icon.png) no-repeat;
			background-size:100% 100%;
		}

		#menu #twitter div{
			background:url(../images/icons/twitter_icon.png) no-repeat;
			background-size:100% 100%;
		}

This file will override the jQuery Mobile styles that are applied and style our icons as necessary.


## Step 2
In the home.html file in the views directory, add the following code to the content div:

		<div>
			<ul id="menu">
				<li id="map">
					<div></div>
				</li>
				<li class="spacer"><div></div></li>
				<li id="twitter">
					<div></div>
				</li>
				
			</ul>
		</div>

This will add the Google Maps and Twitter icons to the home screen.

Next, create a file called googleMap.html in client the views folder (client/default/app/views) and add the following code to create the Maps page:

		<link rel="stylesheet"  type="text/css" href="./css/map.css"/>
		<!-- Google Maps API -->
		<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=true"></script>


		<div  class="header" data-role="header">
			<img src="./images/logo.png"/>
		</div>
		<div class="relative">
		<div id="mapCanvas">
			
		</div>
		</div>


## Step 3
Update the index.html page to add reference to the javascript file that we created.


		<script type="text/javascript" src="./app/models/map.js"></script>


