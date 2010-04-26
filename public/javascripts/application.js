var flash = {
	
	injectFlashBox: function () {
		$('#flash').addClass("flash_wrap");
		$("#flash").hide();
	},
	
	activateNotice: function (flash_message) {
		flash_div = $("#flash");
	 	flash_div.html(flash_message);
	 	flash_div.fadeIn(400);
		// Set the fadeout
		setTimeout(function() {
	  flash_div.fadeOut(2000,
		  function() {
		   flash_div.html("");
		   flash_div.hide()})},
		 	1400);
		}
};
//**********Initialize Document**********//

$(document).ready(function() {
	
	// Pull in Chart Scripts
	$.getScript('javascripts/hciCharts.js');
	
	// Pull in Layouts
  // $.getScript('javascripts/pageLayouts.js');
	
	// injects flash div into dom
	flash.injectFlashBox();
	
	// sets up flash notice
	flash_message = $("#flash").html();
	msg = $.trim(flash_message);
 	if(msg != "") {
		flash.activateNotice(flash_message);
	}
});