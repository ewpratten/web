<html lang="en"><head>
    <meta charset="utf-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, minimumscale=1.0, maximum-scale=1.0">

	
    <title>RetryLife Community</title>
  
<style>
	body {
		font-family: Roboto;
		margin: 0;
		padding: 0;
		background-image: url("../img/Background.png");
		background-size: 100% 100%;
		background-attachment: fixed;
		
	}
	.rant-top-bar {
		background-color:white;
	}
</style>
    

    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet" type="text/css">

    <link href="./style.css" rel="stylesheet" type="text/css">
    <link href="https://devrant.io/static/devrant/css/font-style.css?v=5" rel="stylesheet" type="text/css">



  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>


    <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
    
</head>
<body >


  

	





<div class="container">

    <div class="interior-centered">
        <div class="interior-content" style="min-height: 804px;background-color:white;">

            <div class="body-col1">
            	<div class="body-col1-content">
            		
            		<div style="background-color:#243447;padding:15px;border-radius:10px;color:white;">
            			<img src="https://pbs.twimg.com/profile_images/884167837891342336/F8JOfFAf_400x400.jpg">
                <h1>RetryLife</h1>
                <p>Canada</p>
                <br>
                <br>
                
                <div style="padding:6px; background-color:#1ca2f2; border-radius:8px;">
                <a href="https://twitter.com/retrylife_music" class="twitter-follow-button" data-show-count="false">Follow @retrylife_music</a>
                </div>
                <br>
                <div style="padding:6px; background-color:#1ca2f2; border-radius:8px;">
                <a href="https://twitter.com/ewpratten" class="twitter-follow-button" data-show-count="false">Follow @ewpratten</a>
                </div>
                <br>
                <div style="padding:6px; background-color:#1ca2f2; border-radius:8px;">
                <a href="https://twitter.com/nsdesjardins345" class="twitter-follow-button" data-show-count="false">Follow @nsdesjardins345</a>
                </div>
                <br>
                <div style="padding:6px; background-color:#ff0000; border-radius:8px;">
                <a href="https://www.youtube.com/channel/UCrHT3Lt0Mg90bspbMHJfTcA?sub_confirmation=1">Subscribe to RetryLife Official</a>
                </div>
                <br>
                <div style="padding:6px; background-color:#ff0000; border-radius:8px;">
                <a href="https://www.youtube.com/channel/UCxzARKt0_U0sLHbF4pDN1Pw?sub_confirmation=1">Subscribe to Nathan Desjardins</a>
                </div>
                <br>
                
                </div>
                
                
                
                
                </div>
            </div>

<div class="body-col2 page-feed">
    
    

		<div class="rantlist-bg">
	    <ul class="rantlist">
	    	<?php


  $xml=("http://www.rssmix.com/u/8252161/rss.xml");

$xmlDoc = new DOMDocument();
$xmlDoc->load($xml);

//get elements from "<channel>"
$channel=$xmlDoc->getElementsByTagName('channel')->item(0);
$channel_title = $channel->getElementsByTagName('title')
->item(0)->childNodes->item(0)->nodeValue;
$channel_link = $channel->getElementsByTagName('link')
->item(0)->childNodes->item(0)->nodeValue;
$channel_desc = $channel->getElementsByTagName('description')
->item(0)->childNodes->item(0)->nodeValue;

//output elements from "<channel>"
echo("<p><a href='" . $channel_link
  . "'>" . $channel_title . "</a>");
echo("<br>");
echo($channel_desc . "</p>");


//get and output "<item>" elements
$x=$xmlDoc->getElementsByTagName('item');
for ($i=0; $i<=2; $i++) {
  $item_title=$x->item($i)->getElementsByTagName('title')
  ->item(0)->childNodes->item(0)->nodeValue;
  $item_link=$x->item($i)->getElementsByTagName('link')
  ->item(0)->childNodes->item(0)->nodeValue;
  $item_desc=$x->item($i)->getElementsByTagName('description')
  ->item(0)->childNodes->item(0)->nodeValue;
  echo ("<p><a href='" . $item_link
  . "'>" . $item_title . "</a>");
  echo ("<br>");
  echo ($item_desc . "</p>");
}
?>

	    
</div>
<div class="clearfix"></div>
</div>
</div>





</div>  <!-- end container -->



</body></html>
