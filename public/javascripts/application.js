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
	  flash_div.fadeOut(2000, function() {
		   flash_div.html("");
		   flash_div.hide()
		  })
		},1400);
	}
};

var tableActions = {
  
  setActive: function(el) {
    allRows = el.parents('tbody').children('tr').removeClass('active');
    el.addClass('active');
  },
  
  findProvider: function(el) {
    providerId = el;
  },
  
  showSubContent: function(el) {
    $row = el.parents('tr').next('tr.table_sub_content').find('div.table_toggle_content');
    $row.slideToggle('slow');
  },
  
  selectAllCheckboxes: function(el) {
		cb = $('table > tbody > tr > td > :checkbox').get();
		
		if (el.is(':checked')) {
			$.each(cb, function() {
				$(this).attr('checked', 'checked');
			});
		} else {
			$.each(cb, function() {
				$(this).attr('checked', '');
			});
		}
  }
  
};

var baseActions = {
    
  accordionClick: function(el) {
   $panel_selector = el.attr("panel");
   $panel = $("#" + $panel_selector);
   $panel.click();
  },
  
  getJsonObject: function(el, object_url) {
    $objs = $.getJSON(object_url);
    console.log($objs);
    
    return false;
  }
  
}
//**********Initialize Document**********//

$(document).ready(function() {
  // Set Base Colors for Charts
  Highcharts.setOptions({
     colors: [
        '#00853f',
        '#009fc2',
        '#98002e',
        '#e5b53a',
        '#00467f',
        '#78496a'
     ]
  });
  
  // Hide the table sub content(toggle)
  $toggle = $('.table_toggle_icon');
  $toggle.click(function() {
    tableActions.showSubContent($(this));
    return false;
  });
  
  $('#provider_select').click(function() {
    tableActions.selectAllCheckboxes($(this));
  });
  
  $('#provider_search tbody tr').click(function() {
    tableActions.setActive($(this));
  });
  
  $('#provider_search tbody').children().first().click();
  
  $('#speciality_code[title]').tooltip({ effect: 'slide'});
  $('#speciality_code_main[title]').tooltip({
    effect:'slide',
    offset:[0,-65]
  });
  
  $('#accordion').accordion({
    active: 3,
    icons: { 'header': 'ui-icon-triangle-1-s', 'headerSelected': 'ui-icon-triangle-1-n' }
  });
  
  $('#get_object').click(function() {
    baseActions.getJsonObject($(this), $(this).attr('href'));
    return false;
  });
  
  
  $("a.flag_panel").click(function() {
    baseActions.accordionClick($(this));
  });
 
  $("a[rel]").overlay({ 

      expose: {
    		color: '#000000',
    		loadSpeed: 200,
    		opacity: 0.15
      },

      effect: 'apple', 

      onBeforeLoad: function() { 

          // grab wrapper element inside content 
          var wrap = this.getOverlay().find(".contentWrap"); 

          // load the page specified in the trigger 
          wrap.load(this.getTrigger().attr("href")); 
      }
  }); 
	
	// injects flash div into dom
	// flash.injectFlashBox();
	
	// sets up flash notice
  // flash_message = $("#flash").html();
  // msg = $.trim(flash_message);
  //    if(msg != "") {
  //  flash.activateNotice(flash_message);
  // }
  
});