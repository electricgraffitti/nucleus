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
    el.parents('tbody').children('tr').removeClass('active');
    el.addClass('active');
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
  },
	
	setInitHighlight: function() {
	  $('#provider_search tbody').children().first().click();
	  $('#provider_action_table tbody').children().first().click();
	},
	
	findId: function(el) {
    elId = el.attr("id");
		return elId;
  },
	
	swapProvider: function(el) {
		data = tableActions.findId(el);
		$('#provider_content').load("/nucleus-provider-search #provider_content", {id:data});
	},
	actionChartData: function(el) {
	 cid = tableActions.findId(el);
   $.getJSON("/nucleus-provider-action", {condition_id:cid}, function(data) {
     actionChart.series[0].setData(eval(data), false);
     actionChart.redraw();
	 });
	}
  
};

var profileActions = {
	
	setupAccordion: function() {
		// Sets the default accordion window
	  $('#accordion').accordion({
	    active: 2,
	    icons: { 'header': 'ui-icon-triangle-1-s', 'headerSelected': 'ui-icon-triangle-1-n' },
	    autoHeight: false
	  });
	}
	
};

var chartActions = {
	
	setupChartBaseColors: function() {
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
	}
	
};

var adminAction = {
  
  setupCalendars: function() {
		$('#condition_date').datepicker({
			showButtonPanel: true
		});
		$('#billing_date').datepicker({
		  showButtonPanel: true
		});
		$('#trigger_start_date').datepicker({
		  showOn: 'button',
      			buttonImage: '../images/inner_pages/date_picker_cal.jpg',
      			buttonImageOnly: true
		});
		$('#trigger_end_date').datepicker({
		  showOn: 'button',
      			buttonImage: '../images/inner_pages/date_picker_cal.jpg',
      			buttonImageOnly: true
		});
		$('#schedule_start_date').datepicker({
		  showOn: 'button',
      			buttonImage: '../images/inner_pages/date_picker_cal_white.jpg',
      			buttonImageOnly: true
		});
		$('#schedule_end_date').datepicker({
		  showOn: 'button',
      			buttonImage: '../images/inner_pages/date_picker_cal_white.jpg',
      			buttonImageOnly: true
		});
		$('#report_trigger_start_date').datepicker({
		  showOn: 'button',
      			buttonImage: '../images/inner_pages/date_picker_cal_white.jpg',
      			buttonImageOnly: true
		});
		$('#report_trigger_end_date').datepicker({
		  showOn: 'button',
      			buttonImage: '../images/inner_pages/date_picker_cal_white.jpg',
      			buttonImageOnly: true
		});
	}
  
};

var baseActions = {
    
  accordionClick: function(el) {
   $panel_selector = el.attr("panel");
   $panel = $("#" + $panel_selector);
   $panel.click();
  }
  
}
//**********Initialize Document**********//

$(document).ready(function() {
	
  // Set Base Colors for Charts
	chartActions.setupChartBaseColors();
  
  // Hide the table sub content(toggle)
  $toggle = $('.table_toggle_icon');
  $toggle.click(function() {
    tableActions.showSubContent($(this));
    return false;
  });
  
  profileActions.setupAccordion();
  // Table checkboxes
  $('#provider_select').click(function() {
    tableActions.selectAllCheckboxes($(this));
  });
	
	// Sets up the row highlights
	
	$('#provider_search tbody tr').click(function() {
	  tableActions.setActive($(this));
		tableActions.swapProvider($(this));
	});
	
	$('#provider_action_table tbody tr').click(function() {
	  tableActions.setActive($(this));
	  tableActions.actionChartData($(this));
	});
	
	tableActions.setInitHighlight();
	
  // This is the tooltips, but jqtools 1.2 breaks the code
  $('#speciality_code[title]').tooltip({ effect: 'slide'});
  $('#speciality_code_main[title]').tooltip({
    effect:'slide',
    offset:[0,-65]
  });
  
  
  $("a.flag_panel").click(function() {
    baseActions.accordionClick($(this));
  });

 	// Sets the note overlay
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
  
});