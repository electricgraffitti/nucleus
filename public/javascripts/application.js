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
  
  noteModal: function(el) {
    
    console.log(el);
    // if the function argument is given to overlay, 
    // it is assumed to be the onBeforeLoad event listener 
    el.overlay({ 

        expose: 'darkred', 
        effect: 'apple', 

        onBeforeLoad: function() { 

            // grab wrapper element inside content 
            var wrap = this.getContent().find(".contentWrap"); 

            // load the page specified in the trigger 
            wrap.load(this.getTrigger().attr("href")); 
        } 

    });
  }
  
};
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
  
  // $('.note_trigger').click( function() {
  //   tableActions.noteModal($(this));
  //   return false;
  // });
	

      // if the function argument is given to overlay, 
      // it is assumed to be the onBeforeLoad event listener 
      $("a[rel]").overlay({ 

          expose: {
       	    color: '#000',
       	    opacity: 0.15,
       	    closeSpeed: 700
       	  }, 
          // effect: 'apple', 

          onBeforeLoad: function() { 

              // grab wrapper element inside content 
              var wrap = this.getContent().find(".contentWrap"); 

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