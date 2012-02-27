# FeedHenry jQuery Mobile Tutorial - v7

## Overview
This short part of the tutorial will show you how to create a webview within your app. Doing this requires the use of the $fh.webview() API call. At the end of this tutorial you will know how to:

* Initialize a webview using the FeedHenry API

![](https://github.com/feedhenry/FH-Training-App-Sencha/raw/v7/docs/webView.png)


## Step 1
To initialize a webview we will make a call to the necessary FeedHenry API, $fh.webview(). For more information on this API call see [this](http://docs.feedhenry.com/api-reference/web-view/). As the webview is a separate component to jQuery Mobile we will not need to create a view for it - all we need to do is initialize it with a call when we click the icon.

The code below is used to initialize the webview by clicking on the web icon and should be included in the nav.js file in the controllers folder.

		webview : function() {
			$fh.webview({
				title : 'FeedHenry',
				url : 'http://www.feedhenry.com/'
			});
		},


