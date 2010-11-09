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

	setiPadMessageScroll: function() {
    $('#center_message_content_wrap').jScrollTouch();
  },
  
  setiPadHelpScroll: function() {
    $('#center_help_content_wrap').jScrollTouch();
  },
  
  setiPadIdeaScroll: function() {
   $('#center_idea_forum_content_wrap').jScrollTouch();
  },
  
  setiPadProviderSearchScroll: function() {
   $('#provider_search_table').jScrollTouch();
  },
  
  setiPadClaimSearchScroll: function() {
    $('#provider_search_table').jScrollTouch();
  },
  
  setTableScroll: function(table) {
   table.jScrollTouch(); 
  },
  
  setWidgetScroll: function() {
   $("#panel_north").jScrollTouch(); 
  },
  
  setDashScroll: function() {
    $("#dashboard").jScrollTouch();
  }
};

$(document).ready(function() {

});