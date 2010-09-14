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
  
  findChartType: function(el) {
    elChartType = el.attr("chartType");
		return elChartType;
  },
	
	swapProvider: function(el) {
		data = tableActions.findId(el);
		$('#provider_content').load("/nucleus-provider-search #provider_content", {id:data});
	},
	
	actionChartData: function(el) {
	 cid = tableActions.findId(el);
	 ctype = tableActions.findChartType(el);
	 // tableActions.setConditionChart(el);
   $.getJSON("/nucleus-provider-action", {condition_id:cid, chart_code:ctype}, function(data) {
     // actionChart.series[0].setData(eval(data), false);
     actionChart.redraw();
	 });
	},
	
	setConditionChart: function(el) {
	  chartType = el.attr('chartType');
	  $.getScript('/javascripts/data/' + chartType + 'Chart.js');
	},
	
	setTableToggles: function() {
	  $toggle = $('.table_toggle_icon');
    $toggle.click(function() {
      tableActions.showSubContent($(this));
    });
	},
	
	setTableCheckboxes: function() {
    $('#provider_select').click(function() {
      tableActions.selectAllCheckboxes($(this));
    });
  },
  
  setStatChart: function(e) {
    if (e.attr("charttype") === "SFRO") {
      $('#provider_stats').load("/sfro-stats");
    } else if (e.attr("charttype") === "SDES") {
      $('#provider_stats').load("/sdes-stats");
    } else if (e.attr("charttype") === "SBRD") {
      $('#provider_stats').load("/sbrd-stats");
    } else {
      $('#provider_stats').load("/nucleus-provider-action #provider_stats");
    }
  },
  
  setProviderByTableRowClick: function(attribute){
    $('#provider_search tbody tr').click(function() {
  	  tableActions.setActive($(this));
  		tableActions.swapProvider($(this));
  	});
  },
  
  setChartByTableRowClick: function(attribute){
    $('#provider_action_table tbody tr').click(function() {
  	  tableActions.setActive($(this));
  	  tableActions.actionChartData($(this));
  	  tableActions.setConditionChart($(this));
  	  tableActions.setStatChart($(this));
  	});
  },
  
  setDefaultTableActions: function(attribute){
    // Hide the table sub content(toggle)
    tableActions.setTableToggles();
    tableActions.setTableCheckboxes();
    tableActions.setInitHighlight();
    tableActions.setProviderByTableRowClick();
    tableActions.setChartByTableRowClick();
  }
  // end Table
};

var profileActions = {
	
	setBase: function() {
		baseActions.setAccordionDefault();
    baseActions.accordionTrigger();
	}
	// end Profile
};

var chartActions = {
	
	setupChartBaseColors: function() {
		Highcharts.setOptions({
	     colors: [
	        '#00853f', // PCI
	        '#009fc2', // DCI
	        '#98002e', // FCI
	        '#e5b53a', // OCI
	        '#00467f', // RxI
	        '#78496a' // VCI
	     ]
	  });
	}
	// End Charts
};
var tabs = {
  
  setupFeedbackTabs: function() {
    $("#feedback_panels").tabs({ selected: 0 });
  }
  // end Tabs
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
			buttonImage: '../images/inner_pages/date_picker_cal.jpg',
			buttonImageOnly: true
		});
		$('#schedule_end_date').datepicker({
		  showOn: 'button',
			buttonImage: '../images/inner_pages/date_picker_cal.jpg',
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
  // end Admin
};

var baseActions = {
    
  accordionClick: function(el) {
   $panel_selector = el.attr("panel");
   $panel = $("#" + $panel_selector);
   $panel.click();
  },
  
  accordionTrigger: function() {
    $("a.flag_panel").click(function() {
      baseActions.accordionClick($(this));
    });
  },
  
  setAccordionDefault: function(attribute){
    $('#accordion').accordion({
	    active: 2, // Set the default accordion pane
	    icons: { 'header': 'ui-icon-triangle-1-s', 'headerSelected': 'ui-icon-triangle-1-n' },
	    autoHeight: false
	  });
  },
  
  setInputFilter: function(el) {
   initVal = el.val();
   el.val(" ");
  },
  
  setActiveMessageGroup: function(el) {
    el.siblings().removeClass('active');
    el.addClass('active');
  },
  
  dropDownNav: function() {
    $("ul.subnav").parent().append("<span class='tip', title='Claims Summary'></span>"); //Only shows drop down trigger when js is enabled (Adds empty span tag after ul.subnav*)
    
    $("ul.topnav li span").hover(function() { //When trigger is clicked...  
    
    //Following events are applied to the subnav itself (moving subnav up and down)  
    $(this).parent().find("ul.subnav").slideDown('fast').show(); //Drop down the subnav on click  
    
    $(this).parent().hover(function() {  
    }, function(){  
      $(this).parent().find("ul.subnav").slideUp('slow'); //When the mouse hovers out of the subnav, move it back up  
    });  
    
    //Following events are applied to the trigger (Hover events for the trigger)  
    }).hover(function() {  
      $(this).addClass("subhover"); //On hover over, add class "subhover"  
    }, function() {  //On Hover Out  
      $(this).removeClass("subhover"); //On hover out, remove class "subhover"  
    }); 
  },
  
  setTips: function() {
    if((navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/iPhone/i))) {
    	 return false;
    } else {
      $('.tip').tipTip({
        defaultPosition: "top"
      }); 
    }
  },
  
  modalTrigger: function() {
    $('.provider_container_trigger').bind("click", function() {
      var data = $(this).attr('provider_id');
      var linkurl = "/provider_profile/" + data;
      profilePopout = window.open(linkurl,'Provider Profile', 'width=900, height=650, statusbar=0, location=0, menubar=0, toolbar=0');
      if (window.focus) {profilePopout.focus()}
      return false;
    });
  },
  
  // containerTrigger: function() {
  //   $('.provider_container_trigger').bind("click", function() {
  //     var linkurl = $(this).attr('href');
  //     var data = $(this).attr('provider_id');
  //     baseActions.containerBuilder(linkurl, data);
  //     return false;
  //   });
  // },
  // 
  // containerBuilder: function(lu, d) {
  //   $(".containerPlus").buildContainers({
  //     containment:"document",
  //     elementsPath:"../elements/",
  //     onResize:function(o){},
  //     onClose:function(o){},
  //     onCollapse:function(o){},
  //     onIconize:function(o){},
  //     onDrag:function(o){},
  //     onLoad:function(o){}
  //   });
  //   $("#popupContainer").mb_changeContainerContent(lu,{id:d}, "GET");
  // },
  
  
  setOverlay: function() {
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
            // var theurl = this.getTrigger().attr("href");
            // load the page specified in the trigger 
            wrap.load(this.getTrigger().attr("href")); 
        }
    });
  },
  
  setDefaults: function() {
    // Set Base Colors for Charts
  	chartActions.setupChartBaseColors();
  	// Sets the Drop Down Nav
    baseActions.dropDownNav();
    // Sets the tool tip hovers
    baseActions.setTips();
    // Sets the note overlay
    baseActions.setOverlay();
  }
  // end base
}
//**********Initialize Document**********//

$(document).ready(function() {
  
  baseActions.setDefaults();
  tableActions.setDefaultTableActions();
  baseActions.modalTrigger();
  
  $('#provider_search tbody tr:first').click();
  $('#provider_action_table tbody tr:first').click();
  
  // test for js success
  // console.log("js success");
});