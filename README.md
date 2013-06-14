piechart.js
===========

piechart.js is an extremely lightweight & simplistic JQuery script for building css3 pie charts on the fly. This script originally spawned from a script that I created when attempting returning search result relevancy in a creative way.

It's very easy to use:

Step 1: link jquery to relevant pages: &lt;script src="http://code.jquery.com/jquery-latest.min.js"&gt;&lt;/script&gt;

Step 2: upload and link piechart.css & piechart.js to relevant pages:
<script src="js/piechart.js"></script>
<link rel="stylesheet" type="text/css" href="css/piechart.css" />

Step 3: add the following bit of code to the page to create your first pie chart(seen above):
<div class="pie" title="8% 11% 6% 35% 25% 15%"></div>

Step 4: add the following to the bottom of your html file, right before the closing body tag:
<script>
$(".pie").piechart();
</script>

Step 5: edit piechart.css to style as you see fit.

It's that easy.

NOTE: index.html contains a list of passable arguments, as well as more indepth customization information

Ian McDowell · ianmcd@gmail.com · http://ianmcd.com


changelog
---------

2.1 (06.14.13) - functional as a jquery plugin, new syntax, allows for arguments(attrib)

2.0 (06.10.13) - handles multiple variables, added further details to sample index.html, updated readme

1.1 (06.07.13) - fixed readme, further commenting to .css file

1.0 (06.06.13) - initial release
