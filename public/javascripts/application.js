var flash = {

	injectFlashBox: function() {
		$('#flash').addClass("flash_wrap");
		$("#flash").hide();
	},

	activateNotice: function(flash_message) {
		flash_div = $("#flash");
		flash_div.html(flash_message);
		flash_div.fadeIn(400);
		// Set the fadeout
		setTimeout(function() {
			flash_div.fadeOut(2000, function() {
				flash_div.html("");
				flash_div.hide()
			})
		},
		1400);
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
		$('#provider_content').load("/nucleus-provider-search #provider_content", {
			id: data
		});
	},

	actionChartData: function(el) {
		cid = tableActions.findId(el);
		ctype = tableActions.findChartType(el);
		// tableActions.setConditionChart(el);
		$.getJSON("/nucleus-provider-action", {
			condition_id: cid,
			chart_code: ctype
		},
		function(data) {
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
			$('#action_stats').load("/sfro-stats");
		} else if (e.attr("charttype") === "SDES") {
			$('#action_stats').load("/sdes-stats");
		} else if (e.attr("charttype") === "SBRD") {
			$('#action_stats').load("/sbrd-stats");
		} else {
			$('#action_stats').load("/nucleus-provider-action #provider_stats");
		}
	},

	setProviderByTableRowClick: function(attribute) {
		$('#provider_search tbody tr').click(function() {
			tableActions.setActive($(this));
			tableActions.swapProvider($(this));
		});
	},

	setChartByTableRowClick: function(attribute) {
		$('#provider_action_table tbody tr').click(function() {
			tableActions.setActive($(this));
			tableActions.actionChartData($(this));
			tableActions.setConditionChart($(this));
			tableActions.setStatChart($(this));
		});
	},

	setDefaultTableActions: function(attribute) {
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

var c2Accordion = {
  
  setAccordion: function() {
    var $acc = $('#accordion');
    var $accNav = $('#accordion_nav');
    var $triggers = $acc.find('h3.acc_header');
    var $navTriggers = $accNav.find('a');
    
    
    $triggers.append('<span class="ui-icon ui-icon-triangle-1-s"></span>')
    var $inner_contents = $acc.find('.inner_accordion');
    $inner_contents.hide();
    
    // Set trigger behavior
    $triggers.live('click', function() {
      c2Accordion.triggerAccordion($(this));
    });
    
    // nav triggers
    $navTriggers.live('click', function(e) {
      e.preventDefault();
      var navTag = $(this).attr('panel');
      var $accPanelHeader = $triggers.filter('#' + navTag);
      $accPanelHeader.click();
    });
    
  },
  
  triggerAccordion: function(trigger) {
    var $pane = trigger.next().children('.inner_accordion');
    
    if ($pane.is(':visible')) {
      $pane.hide('slide', {direction : 'up'});
      trigger.removeClass('ui-state-active');
      trigger.find('span').removeClass('ui-icon-triangle-1-n');
      trigger.find('span').addClass('ui-icon-triangle-1-s');
    } else {
      $pane.show('slide', {direction : 'up'});
      trigger.addClass('ui-state-active');
      trigger.find('span').removeClass('ui-icon-triangle-1-s');
      trigger.find('span').addClass('ui-icon-triangle-1-n');
    }
  }
  
};

var chartActions = {

	setupChartBaseColors: function() {
		Highcharts.setOptions({
			colors: ['#5bab46', // PCI
			'#398dcc', // DCI
			'#d93b27', // FCI
			'#f7b219', // OCI
			'#f47727' // RxI
			]
		});
	}
	// End Charts
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
		$('#action_start_date').datepicker({
			showOn: 'button',
			buttonImage: '../images/inner_pages/date_picker_cal.jpg',
			buttonImageOnly: true
		});
		$('#action_end_date').datepicker({
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

var panels = {
  
  northResizeTrigger: function() {
    var $north_panel = $('#panel_north');
    $('#south_resizer').toggle(function() {
      $north_panel.hide('slow');
    }, function() {
      $north_panel.show('slow');
    });
    
  },
  
  westResizeTrigger: function() {
    var $sidebar = $('#inner_west');
    $('#west_resizer').toggle(function() {
      $sidebar.animate({width: '8px'}, 1000, panels.clientSearchPanelResize($(this).width() + 2));
    }, function() {
      $sidebar.animate({width: '220px'}, 1000, panels.clientSearchPanelResize($(this).width() + 214));
    });
  },
  
  clientSearchPanelResize: function(w) {
    var $panelLayout = $('#panel_layout');
    var $panelcenter = $('#panel_center');
    var $tablePanel = $('#provider_search_table');
    
    console.log(w);
    
    $panelcenter.animate({width:($panelLayout.width() - w)}, 1000);
    $tablePanel.animate({width:($panelLayout.width() - w)}, 1000);
  },
  
  toggleResultsChart: function() {
    var $chart = $('.module_content');
    
    $('#provider_results_chart_footer').toggle(function() {
      $('.toggle_arrow').addClass('close');
      $chart.hide('slow');
    }, function() {
      $chart.show('slow');
      $('.toggle_arrow').removeClass('close');
    });
  },
  
  actionPanelToggle: function() {
    var $trigger = $('.pane_handle_toggle');
    
    $trigger.live('click', function() {
      var $widget = $(this).parents(".widget:first");
      var $panel = $widget.find(".inner_panel_content");
      var $toggle_arrow = $(this).children('.toggle_arrow');
      if ($panel.is(':visible')) {
        $panel.hide('slow');
        $toggle_arrow.addClass('close');
      } else {
        $panel.show('slow');
        $toggle_arrow.removeClass('close');
      }
    });
    
  },
  
  messageTabs: function() {
    var $tabs = $('#message_center_tabs ul#tab_nav li a');
    var $panels = $('#message_center_tabs .message_panel');
    
    $tabs.click(function(e) {
      e.preventDefault();
      $panels.hide();
      $(this).parent().siblings().removeClass('active');
      $(this).parent().addClass('active');
      var panelId = $(this).attr('href');
      var $panel = $(panelId);
      $panel.show();
    });
    
  },
  
  helpTabs: function() {
    var $tabs = $('#help_center_tabs ul#tab_nav li a');
    var $panels = $('#help_center_tabs .help_panel');
    
    $tabs.click(function(e) {
      e.preventDefault();
      $panels.hide();
      $(this).parent().siblings().removeClass('active');
      $(this).parent().addClass('active');
      var panelId = $(this).attr('href');
      var $panel = $(panelId);
      $panel.show();
    });
    
  },
  
  forumTabs: function() {
    var $tabs = $('#idea_forum_center_tabs ul#tab_nav li a');
    var $panels = $('#idea_forum_center_tabs .idea_forum_panel');
    
    $tabs.click(function(e) {
      e.preventDefault();
      $panels.hide();
      $(this).parent().siblings().removeClass('active');
      $(this).parent().addClass('active');
      var panelId = $(this).attr('href');
      var $panel = $(panelId);
      $panel.show();
    });
    
  },
  
  dashTabs: function() {
    var $tabs = $('#dashboard ul#tab_nav li a');
    var $panels = $('#dashboard .dash_panel');
    $tabs.click(function(e) {
      e.preventDefault();
      $panels.hide();
      $(this).parent().siblings().removeClass('active');
      $(this).parent().addClass('active');
      var panelId = $(this).attr('href');
      var page = $(panelId);
      page.show();
    });
  },
  
};

var drag = {
  
  setupQuickLaunch: function(a,b,c) {
    // set the Selector
    var ss = a;
    // set cookie name
    var scn = b;
    // set cookie expiry time (days):
    var sce = c;
    
    ss.sortable({
      opacity : 0.3,
      cursor: "move",
      update: function() { drag.setQuickLaunchOrder(ss,scn,sce); }
    });
  },
  
  setupDashboardPanels: function(a,b,c) {
    // set the Selector
    var ss = a;
    // set cookie name
    var scn = b;
    // set cookie expiry time (days):
    var sce = c;
    
    ss.sortable({
      handle : '.dashboard_module_header',
      opacity : 0.3,
      cursor: "move",
      update: function() { drag.setDashboardLaunchOrder(ss,scn,sce); }
    });
  },
  
  setQuickLaunchOrder: function(ss,scn,sce) {
    $.cookie(scn, ss.sortable("toArray"), { expires: sce, path: "/" });
  },
  
  setDashboardLaunchOrder: function(ss,scn,sce) {
    $.cookie(scn, ss.sortable("toArray"), { expires: sce, path: "/" });
  },
  
  loadQuickLaunchOrder: function(ss,scn) {
    var list = ss;
    if (list == null) return

    // fetch the cookie value (saved order)
    var cookie = $.cookie(scn);
    if (!cookie) return;

    // make array from saved order
    var IDs = cookie.split(",");

    // fetch current order
    var items = list.sortable("toArray");

    // make array from current order
    var rebuild = new Array();
    
    for ( var v=0, len=items.length; v<len; v++ ) {
      rebuild[items[v]] = items[v];
    }

    for (var i = 0, n = IDs.length; i < n; i++) {
      var itemID = IDs[i];
      
      if (itemID in rebuild) {
        var item = rebuild[itemID];

        
        // select the item according to current order
        var child = $("div.ui-sortable").children("#" + item);

        // select the item according to the saved order
        if (widget.checkViewCookie(item)) {
          var savedOrd = $("div.ui-sortable").children("#" + itemID).addClass('hidden');
        } else {
          var savedOrd = $("div.ui-sortable").children("#" + itemID);
        }
        

        // remove all the items
        child.remove();

        // add the items in turn according to saved order
        // we need to filter here since the "ui-sortable"
        // class is applied to all ul elements and we
        // only want the very first! You can modify this
        // to support multiple lists - not tested!
        
        $("div.ui-sortable").filter(":first").append(savedOrd);
      }
    }
  }
  
};

var scroll = {
  
  setScroll: function() {
    var $scrollWrap = $('#scroll_pane');
    var $scrollNav = $('#scroll_thumbs');
    var $scrollBox = $scrollWrap.find('#scrolling_segment');
    var $panels = $scrollBox.find('.scroll_panel');
    var $nav = $scrollNav.find('#scroll_nav');
    var $trigger_wrap = $nav.children('li');
    var $triggers = $nav.find('a');
    
    var twidth = (795 / $trigger_wrap.length);
    $trigger_wrap.css({width:twidth});
        
    var $innerWrap = $scrollBox.find('#scroll_wrap');
    var panelWrapWidth = (795 * $triggers.length);
    $innerWrap.css({width:panelWrapWidth});
    
    
    var scrollOptions = {
      target: $scrollBox,
      items: $panels,
      navigation: $triggers,
      axis: 'xy',
      duration: 500,
      easing: 'swing'
    };
    
    $scrollWrap.serialScroll(scrollOptions);
    $.localScroll(scrollOptions);  
  },
  
  tutorialNavScroll: function() {
    var $scrollNav = $('#scroll_thumbs');
    var $navTriggerWrap = $scrollNav.find('#scroller_wrap');
    var $nav = $scrollNav.find('#scroll_nav');
    var $trigger_wraps = $nav.find('li');
    var $trigger_left = $('#scroll_nav_trigger_l');
    var $trigger_right = $('#scroll_nav_trigger_r');
    
    var navwidth = (155 * $trigger_wraps.length);
    $nav.css({width:navwidth});
    
    var navScrollOptions = {
      target: $navTriggerWrap,
      items: $trigger_wraps,
      cycle : true,
      prev: $trigger_left,
      next: $trigger_right,
      axis: 'xy',
      duration: 500,
      easing: 'swing'
    };
    
    $navTriggerWrap.serialScroll(navScrollOptions);
    $.localScroll(navScrollOptions);
  }
  
};

var widget = {
  
  widgetOptionTrigger: function() {
    var $viewTrigger = $('#widget_view_controls :checkbox');
    $viewTrigger.live('click', function() {
      if ($(this).is(':checked')) {
        
        var $w = $('#' + $(this).attr('widget'));
        var hiddenID = $w.attr('id');
        $w.show('fade', 1000, widget.destroyWidgetViewCookie(hiddenID));
        
      } else {
        
        var $w = $('#' + $(this).attr('widget'));
        var visibleID = $w.attr('id');
        $w.hide('fade', 1000, widget.setWidgetViewCookie(visibleID));
      
      }
      
    });
  },
  
  setWidgetViewCookie: function(visibleID) {
    $.cookie(visibleID, 'hidden', { expires: 1000, path: "/" } );
  },
  
  destroyWidgetViewCookie: function(hiddenID) {
    var cookie = $.cookie(hiddenID);
    if (!cookie) return;
    $.cookie(hiddenID, null);
  },
  
  checkViewCookie: function(checkValue) {
    var cookie = $.cookie(checkValue);
    if (!cookie) {
      return false;
    } else {
      var cb = $('#widget_view_controls .' + checkValue);
      cb.attr('checked', '');
      return true;
    }
  },
  
  dashboardOptions: function(pane) {
    var $trigger = $('#options_trigger');
    var $triggerClose = $('.options_panel_close');
    var $pane = $(pane);
    
    $trigger.live('click', function(e) {
      widget.optionPaneDisplay($pane);
       e.preventDefault(); 
    });
    
    $triggerClose .live('click', function(e) {
      widget.optionPaneDisplay($pane);
       e.preventDefault(); 
    });
  },
  
  optionPaneDisplay: function(pane) {
    if (pane.is(':visible')) {
      pane.hide("slide", {direction: 'up'});
    } else {
      pane.show("slide", {direction: 'up'});
    }
  },
  
  widgetDisplayToggle: function(panel) {
    if (panel.is(':visible')) {
      panel.hide("slide", {direction: 'up'});
    } else {
      panel.show("slide", {direction: 'up'});
    }
  },
  
  printWidget: function() {
	 var $printTrigger = $('.email_option');
	 
	 $printTrigger.live('click', function(e) {
	   e.preventDefault();
	   var $printArea = $(this).closest('.graph_box');
	   // console.log($printArea);
     $printArea.printElement({
       leaveOpen:true,
       printMode:'popup',
       overrideElementCSS:[
         '/stylesheets/reset-fonts-grids.css',
         '/stylesheets/application.css',
         '/stylesheets/appcssv2.css'
       ],
       iframeElementOptions: {
         classNameToAdd : 'v2'
       }
     });
	 });
	 
	},
  
  dashboardChartPaneToggle: function() {
    var $trigger = $('.resize_horz');
    
    $trigger.live('click', function() {
      var $widget = $(this).parents(".graph_box:first");
      var $panel = $widget.find(".widget_content");
      var $toggleArrow = $(this).children('.toggle_arrow');
      if ($panel.is(':visible')) {
        $panel.hide('slow');
        $toggleArrow.addClass('close');
      } else {
        $panel.show('slow');
        $toggleArrow.removeClass('close');
      }
    });
  },
  
  closeWidgetOptions: function(attribute){
    var $trigger2 = $('.widget_options_panel_close');
    $trigger2.live('click', function(e) {
      e.preventDefault();
      var $panel = $(this).closest('.dashboard_panel_options').first();
      $panel.hide("slide", {direction: 'up'});
    });
  },
  
  closeOption: function() {
    var $trigger = $('.close_option');
    
    $trigger.live('click', function(e) {
      e.preventDefault();
      var $widget = $(this).parents(".graph_box:first");
      var $panel = $widget.attr('id');
      widget.setCheckBox($panel);
      
    });
  },
  
  setCheckBox: function(v) {
    var $cb_panel = $('#widget_view_controls');
    var cb = $cb_panel.find(('.' + v));
    cb.click();
    cb.attr('checked', '');
  },

  settingsOption: function() {
    var $trigger = $('.settings_option');
    $trigger.live('click', function(e) {
      var $widget = $(this).parents(".graph_box:first");
      var $pane = $widget.find(".dashboard_panel_options");
      widget.optionPaneDisplay($pane);
      e.preventDefault();
    });
  },
  
  exportOption: function() {
    var $trigger = $('.export_option');
    $trigger.live('click', function(e) {
      e.preventDefault();
      scatterChart.exportChart({
          type: 'application/pdf',
          filename: 'x.pdf'
      });
    });
  },
  
  optionSubmitTriggers: function() {
    var $form = $('.widget_form');
    $form.live('submit', function(e) {
      e.preventDefault();
    });
  },
  
  widgetOptions: function(ss) {
    widget.settingsOption();
    widget.widgetOptionTrigger(ss);
    widget.closeWidgetOptions();
    widget.exportOption();
    widget.dashboardChartPaneToggle();
    widget.closeOption();
    widget.printWidget();
    widget.optionSubmitTriggers();
  }
  
};

var baseActions = {
  
  setXHR: function() {
    $.ajaxSetup({ 'beforeSend': function(xhr) {xhr.setRequestHeader("Accept", "text/javascript")}});
  },

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

	setAccordionDefault: function(attribute) {
		$('#accordion').accordion({
			active: 2,
			// Set the default accordion pane
			icons: {
				'header': 'ui-icon-triangle-1-s',
				'headerSelected': 'ui-icon-triangle-1-n'
			},
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
			$(this).parent().hover(function() {},
			function() {
				$(this).parent().find("ul.subnav").slideUp('slow'); //When the mouse hovers out of the subnav, move it back up  
			});

			//Following events are applied to the trigger (Hover events for the trigger)  
		}).hover(function() {
			$(this).addClass("subhover"); //On hover over, add class "subhover"  
		},
		function() { //On Hover Out  
			$(this).removeClass("subhover"); //On hover out, remove class "subhover"  
		});
	},

	setTips: function() {
		if ((navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/iPhone/i))) {
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
			var profilewindow = window.open(linkurl, 'Provider_Profile', 'width=900, height=650, statusbar=0, location=0, menubar=0, toolbar=0');
			if (window.focus) {
				profilewindow.focus()
			}
			return false;
		});
	},
	
	tutorialTrigger: function() {
	  var $trig = $('.tutorial_trigger');
	  $trig.overlay({
	    expose: {
       color: '#000000',
       loadSpeed: 200,
       opacity: 0.15
      },
      onBeforeLoad: function() {
       // grab wrapper element inside content 
       var wrap = this.getOverlay().find(".contentWrap");
       // var theurl = this.getTrigger().attr("href");
       // load the page specified in the trigger 
       wrap.load(this.getTrigger().attr('tutorial_page'));
      },
      onLoad: function() {
        var first_trigger = $('.scroll_nav_trigger:first');
        first_trigger.click();
      },
	  });
	  
	  $('.scroll_nav_trigger').live('click', function(e) {
      scroll.setScroll($(this));
      // scroll.tutorialNavScroll();
      e.preventDefault();
    });
	},
	
	noteTrigger: function() {
	 var $nTrig = $('a.note_trigger');
		
	 	$nTrig.overlay({
     expose: {
      color: '#000000',
      loadSpeed: 200,
      opacity: 0.15
     },
     // effect: 'apple',
			onBeforeLoad: function() {

				// grab wrapper element inside content 
				var wrap = this.getOverlay().find(".contentWrap");
				// var theurl = this.getTrigger().attr("href");
				// load the page specified in the trigger 
				wrap.load(this.getTrigger().attr("href"));
			}
		});
		
	 	$nTrig.click(function(e) {
		  e.preventDefault();
		  console.log('ya');
		});
		
	},
	
	toggleUpload: function() {
	  $('#message_attach_link').click(function(e) {
	    e.preventDefault();
      $('#message_attachment').slideToggle('slow');
    });
	},
	
	triggerActionTable: function() {
	  var $tableTrigger = $('#provider_action_table table tbody tr').first();
	  $tableTrigger.click();
	},
	
	setQuickLaunchHovers: function() {
	  var $qlboxes = $('#quick_launch_top .quick_launch_box');
	  $qlboxes.removeClass('highlight');
	  var $links = $qlboxes.find('a');
	  $links.prepend('<span class="active" />').each(function() {
	        var $span = $('> span.active', this).css({opacity : 0});
	        $(this).hover(function() {
	          if ($(this).hasClass('active')) {
	            $span.stop().fadeTo(400, 0);
	          } else {
	           $span.stop().fadeTo(400, 1); 
	          }
	        }, function() {
	          $span.stop().fadeTo(400, 0);
	      });
	      $(this).click( function() {
	        $span.fadeTo(200, 0);
	        $('ul#main_nav_ul a').removeClass('active');
	        $(this).addClass('active');
	      });
	  });
	},

	setOverlay: function() {
	  
		$('a[rel]').overlay({
      expose: {
       color: '#000000',
       loadSpeed: 200,
       opacity: 0.15
      },
      // effect: 'apple',
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
};


//**********Initialize Document**********//
$(document).ready(function() {
  baseActions.setXHR();
	baseActions.setDefaults();
	tableActions.setDefaultTableActions();
	baseActions.modalTrigger();
});
