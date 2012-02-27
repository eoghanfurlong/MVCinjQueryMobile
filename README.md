# FeedHenry jQuery Mobile Tutorial - v3

## Overview
In this tutorial we will add a new page for the Google Maps page. You will learn the following:

* Integrate an app with the Google Maps API
* Learn to use FeedHenry APIs

![](https://github.com/feedhenry/FH-Training-App-Sencha/raw/v3/docs/MapView.png)


## Step 1
Create a file called googleMap.html in the views folder (client/default/app/views) and add the following code to create the Maps page:

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


## Step 2
Update the index.html page to add a reference to the Google Maps page that we created:
		
		<div data-add-back-btn="true" data-role="page" class="page" id="googleMap"></div>


## Step 3



