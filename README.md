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


# Step 3
To add a handler for button clicks on the home page, create a bind.js file in the events folder (client/default/apps/events) and paste in the following code.

		function bindEvent(){
			//homepage menu click event
			$("#menu li").bind("click",function(){
				var id=$(this).attr("id");
				if (id!=undefined){
					nav[id]();
				}
			});
			
		}



