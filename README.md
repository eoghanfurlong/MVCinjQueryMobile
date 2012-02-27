# FeedHenry jQuery Mobile Tutorial - v1

## Overview
In this tutorial we will be creating the basic structure of the app. At the end of this tutorial you will know how to:

* Add a new page to the container page with some UI components (app/views/home.html)

<img src="docs/HomeView.png" />

## Step 1
Given the boilerplate code, we need to create a home page for the app. Create a home.html file in client/default/app/views
and add the following code to it.

		<link rel="stylesheet" type="text/css" href="./css/home.css"/>
		<div class="header" data-role="header">
			<img src="./images/logo.png"/>
		</div>

		<div class="content">
			<div>
				
			</div>
		</div>


## Step 2
We must now add a reference to the new home page in the container page (index.html). To do this, open the file and add the following
code to the body section:

		<div data-role="page" class="page" id="home"></div>

## Step 3
Open home.html (client/default/app/views/home.html) and add the following line within the div named "content":

<p>Home Page</p>

If you open your index.html page you will now see the following:

<img src="docs/TestView.png" />

