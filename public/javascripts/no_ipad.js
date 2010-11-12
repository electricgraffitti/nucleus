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
    // ss.dialog().addTouch();
  },
  
  setupDashboardPanels: function(a,b,c) {
    // set the Selector
    var ss = a;
    // console.log(a);
    // set cookie name
    var scn = b;
    // set cookie expiry time (days):
    var sce = c;
    
    ss.sortable({
      handle : '.widget_header',
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
  
  loadDashboardLaunchOrder: function(ss,scn) {
    var list = ss;
    
    if (list == null) return

    // fetch the cookie value (saved order)
    var cookie = $.cookie(scn);
    
    if (!cookie) {
      widget.checkForDBToggleCookies(ss);
      return
    };

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
        var child = ss.children("#" + item);

        // select the item according to the saved order
        if (widget.checkViewCookie(item)) {
          var savedOrd = ss.children("#" + itemID).addClass('hidden');
        } else {
          var savedOrd = ss.children("#" + itemID);
        }
        

        // remove all the items
        child.remove();

        // add the items in turn according to saved order
        // we need to filter here since the "ui-sortable"
        // class is applied to all ul elements and we
        // only want the very first! You can modify this
        // to support multiple lists - not tested!
        
        ss.filter(":first").append(savedOrd);
      }
    }
  },
  
  loadQuickLaunchOrder: function(ss,scn) {
    var list = ss;
    
    if (list == null) return

    // fetch the cookie value (saved order)
    var cookie = $.cookie(scn);
    if (!cookie) {
      widget.checkForQLToggleCookies(ss);
      return
    };

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
        var child = ss.children("#" + item);

        // select the item according to the saved order
        if (widget.checkQLCookie(item)) {
          var savedOrd = ss.children("#" + itemID).addClass('hidden');
        } else {
          var savedOrd = ss.children("#" + itemID);
        }
        

        // remove all the items
        child.remove();

        // add the items in turn according to saved order
        // we need to filter here since the "ui-sortable"
        // class is applied to all ul elements and we
        // only want the very first! You can modify this
        // to support multiple lists - not tested!
        
        ss.filter(":first").append(savedOrd);
      }
    }
  },
  
  tutorialDrag: function() {
    var t = $("#tutorial_modal");
    t.draggable({ handle: 'thead' });
  }
};


$(document).ready(function() {
	drag.tutorialDrag();
});
