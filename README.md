jquery-stepLinks
================

When building simple html sites for clients, we found ourselves doing similar tasks with links on nearly every site. This simple jQuery plugin makes it easy on us by doing the following:

1. Opens external links and PDFs in a new window by programmatically adding *target="_blank"*
2. Sets up Google Analytics event tracking for external links.
3. Sets up Google Analytics page view tracking for PDFs.

### Version
1.2

### Getting started

**Dependencies** - jQuery and [trackThis.js](https://github.com/stepframe/trackThis.js)

1. **Link to the files** - Begin by adding jquery.stepLinks.js to your project and linking to it with a script tag.
		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
		<script src="js/trackThis.js"></script>
		<script src="js/jquery.stepLinks.js"></script>

2. **Add Google Analytics** - StepVideo integrates with Google Analytics to provide tracking of start, 25%, 50%, 75%, and video end events. Be sure your site has google analytics setup:

		<script>
	        (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
	        function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
	        e=o.createElement(i);r=o.getElementsByTagName(i)[0];
	        e.src='//www.google-analytics.com/analytics.js';
	        r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
	        ga('create','UA-XXXXX-X','auto');ga('send','pageview');
	    </script>

3. **Run anchor tags through stepLinks** - Now it's time to use the standard jQuery method of selecting the anchor tags and applying stepLinks to the element. Something like this:

		$('a').stepLinks();

License
----

MIT
