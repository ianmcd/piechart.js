$(function(){
	if($(".pie")) {
		$('.pie').each(function(i, obj) {
			var pcent = $(this).attr("title");
			pcent = pcent.replace(/%/g, "");
			var h = $(this).height();
			var h2 = (h/2);
			if (pcent > 50) {
				h = h + "px";
				h2 = h2 + "px";
				var halfpcent = (pcent - 50);
				var degrees = (360 * (halfpcent/100));
				var newhtml = "<div style='clip: rect(0px " + h + " " + h + " 0px);'><div class='fill' style='clip: rect(0px " + h2 + " " + h + " 0px); -webkit-transform: rotate(180deg); -ms-transform: rotate(180deg); transform: rotate(180deg);'></div></div><div style='clip: rect(0px " + h + " " + h + " " + h2 + "); -webkit-transform: rotate(180deg); -ms-transform: rotate(180deg); transform: rotate(180deg);'><div class='fill' style='clip: rect(0px " + h2 + " " + h + " 0px); -webkit-transform: rotate(" + degrees + "deg); -ms-transform: rotate(" + degrees + "deg); transform: rotate(" + degrees + "deg);'></div></div>";
				$(this).html(newhtml);
			} else {
				var degrees = (360 * (pcent/100));
				var newhtml = "<div style='clip: rect(0px " + h + " " + h + " " + h2 +");'><div class='fill' style='clip: rect(0px " + h2 + " " + h + " 0px); -webkit-transform: rotate(" + degrees + "deg); -ms-transform: rotate(" + degrees + "deg); transform: rotate(" + degrees + "deg);'></div></div>";
				$(this).html(newhtml);
			}
		});
	}
});