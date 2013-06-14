(function($) {
	$.fn.piechart = function(args){
		
		var chart = $.extend({
			attrib: "title"
		}, args);
		
		this.each(function(i, obj) {
			var pcentTot = $(this).attr(chart.attrib);
			pcentTot = pcentTot.replace(/%/g, "");
			arrPcent = pcentTot.split(" ");
			var pct = 0;
			for (var i=0; i<arrPcent.length; i++) {
				pct += Number(arrPcent[i]);
			}
			if (pct > 100) { 
				var err="ERROR: percents totalling more than 100%"
				console.log(err);
				return err; 
			}
			var h = $(this).height();
			var h2 = (h/2);
			var degreeTot = 0;
			var newhtml = "";
			for (var i=0; i<arrPcent.length; i++) {
				pcent = arrPcent[i];
				if (pcent > 50) {
					h = h + "px";
					h2 = h2 + "px";
					var halfpcent = (pcent - 50);
					var degrees = (360 * (halfpcent/100));
					newhtml = newhtml + "<div style='clip: rect(0px " + h + " " + h + " 0px); -webkit-transform: rotate(" + degreeTot + "deg); -ms-transform: rotate(" + degreeTot + "deg); transform: rotate(" + degreeTot + "deg);'><div class='fill' style='clip: rect(0px " + h2 + " " + h + " 0px); -webkit-transform: rotate(180deg); -ms-transform: rotate(180deg); transform: rotate(180deg);'></div></div><div style='clip: rect(0px " + h + " " + h + " " + h2 + "); -webkit-transform: rotate(180deg); -ms-transform: rotate(180deg); transform: rotate(180deg);'><div class='fill" + (i + 1) + "' style='clip: rect(0px " + h2 + " " + h + " 0px); -webkit-transform: rotate(" + degrees + "deg); -ms-transform: rotate(" + degrees + "deg); transform: rotate(" + degrees + "deg);'></div></div>";
				} else {
					var degrees = (360 * (pcent/100));
					newhtml = newhtml + "<div style='clip: rect(0px " + h + " " + h + " " + h2 +"); -webkit-transform: rotate(" + degreeTot + "deg); -ms-transform: rotate(" + degreeTot + "deg); transform: rotate(" + degreeTot + "deg);'><div class='fill" + (i + 1) + "' style='clip: rect(0px " + h2 + " " + h + " 0px); -webkit-transform: rotate(" + degrees + "deg); -ms-transform: rotate(" + degrees + "deg); transform: rotate(" + degrees + "deg);'></div></div>";
				}
				degreeTot += degrees;
			}
		$(this).html(newhtml);
		});
		return this;
	};
}(jQuery));