/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         /**
          * Nested Menu
          * by Simon Widjaja 
          * Twitter: #simonwidjaja
          * Web: edgedocks.com, edgecommons.org
          */
          
         // Load stylesheet for menu
         yepnope({load: "style/menu.css"});
         
         // Create config object for menu
         // The property "dataProvider" defines the multi level structure of the menu
         var config = {
         	dataProvider: [
         		{label: "Clear", onClick: function() { console.log("Clear was clicked"); } },
         		{label: "About", onClick: function() { console.log("About was clicked"); }, items: [
         			{label: "Play", onClick: function() { console.log("Play was clicked"); } },	
         		]},
         		{label: "Features", onClick: function() { console.log("Features was clicked"); }, items: [
         			{label: "Parallax", onClick: function() { console.log("Parallax was clicked"); } },	
         			{label: "Spotlight", onClick: function() { console.log("Spotlight was clicked"); } },
         		]}
         	]
         };
         
         // Setup menu
         sym.getSymbol("menu").getVariable("setup")(config);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Infinity_Menu'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         /**
          * Nested Menu
          * by Simon Widjaja 
          * Twitter: #simonwidjaja
          * Web: edgedocks.com, edgecommons.org
          */
         
         try{
         	// Initially hide component
         	sym.getSymbolElement().css("opacity", "0.5");
         
         	// Provide setup function
         	sym.setVariable("setup", function(config) {
         
         		var menuContainer = sym.$("menuContainer");
         
         		var tplOuterMenu = ''
         			+'<div id="nestedmenu">'
         			+'  <ul></ul>'
         			+'</div>';
         
         		var tplLevel1_withoutSubItems = '<li><a><div style="padding: 0 20px;">#LABEL#</div></a></li>';
         		var tplLevel1_withSubItems = ''
         			+'<li class="has-sub ">'
         			+'   <a><div style="padding: 0 20px;">#LABEL#</div></a>'
         			+'   <ul></ul>'
         			+'</ll>';
         		var tplLevel2 = '<li class="has-sub "><a><div style="padding: 0 20px;">#LABEL#</div></a></ll>';
         
         
         		var outerMenu = menuContainer.html( tplOuterMenu );
         		var ul = $( outerMenu ).find( "ul" );
         
         		var level1 = "";
         		$.each( config.dataProvider, function(index1, item1) {
         			if ($.isArray(item1.items)) {
         				// Add Menu Items with children to first level
         				ul.append( tplLevel1_withSubItems.replace("#LABEL#", item1.label).replace("#URL#", item1.url) );
         				var ul2 = ul.find("li").last().find("ul").first();
         				$.each(item1.items, function(index2, item2) {
         					ul2.append( tplLevel2.replace("#LABEL#", item2.label).replace("#URL#", item2.url) );	
         					if (item2.onClick) {
         						var li2 = ul2.find("li").last();
         						li2.click(item2.onClick);
         						li2.css("cursor", "pointer");
         					}						
         				});
         				if (item1.onClick) {
         					var li = ul.find("> li").last().find("> a");
         					li.click(item1.onClick);
         					li.css("cursor", "pointer");
         				}
         			}
         			else {
         				// Add Menu Items without children to first level
         				ul.append( tplLevel1_withoutSubItems.replace("#LABEL#", item1.label).replace("#URL#", item1.url) );
         				if (item1.onClick) {
         					var li = ul.find("li").last();
         					li.click(item1.onClick);
         					li.css("cursor", "pointer");
         				}
         			}
         		});
         
         		// Show component
         		sym.getSymbolElement().css("z-index", "999");
         		sym.getSymbolElement().css("opacity", "1");
         		sym.$("infinityInfo").remove();		
         	});
         }
         catch ( err ) {
         	console.error(err.toString());
         }

      });
      //Edge binding end

   })("NestedMenu");
   //Edge symbol end:'NestedMenu'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-196697091");