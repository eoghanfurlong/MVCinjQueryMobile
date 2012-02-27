# FeedHenry jQuery Mobile Tutorial - v4

## Overview
In this tutorial we will add a new view for a Twitter feed page. You will learn to use models and further use of FeedHenry APIs.

* Integrate an app with Twitter to pull tweets with a specified username 
* Use the $fh.web() function to make a web request for your app

![](https://github.com/feedhenry/FH-Training-App-Sencha/raw/v4/docs/twitterView.png)


## Step 1
To create the Twitter page in the app, go to the views folder (client/default/app/views) amd create a twitter.html file. Use the code below in this file.

		<div  class="header" data-role="header">
			<img src="./images/logo.png"/>
		</div>
		<div>
			<div id="scrollWrapper">
				<ul id="tweets">
			
				</ul>
			</div>
		</div>


## Step 2
Update the index.html page to add a reference to the Twitter page that we created.

`<div data-add-back-btn="true" data-role="page" class="page" id="twitter"></div>`


## Step 3