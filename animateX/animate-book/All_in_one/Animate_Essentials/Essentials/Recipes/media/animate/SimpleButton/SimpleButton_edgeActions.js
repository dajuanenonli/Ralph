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
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'customButton'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // Get reference to the symbol's element
         var el = sym.getSymbolElement();
         // Make content of button (e.g. text) non-selectable
         el.css({"user-select": "none", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none"});
         // Listen for mouse events
         el.bind("mouseenter", (function() {
         	sym.play("out");
         }));
         el.bind("mouseleave", (function() {
         	sym.playReverse();
         }));
         el.bind("mousedown", (function() {
         	sym.stop("down");
         }));
         el.bind("mouseup", (function() {
         	sym.stop("out");
         }));

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("customButton");
   //Edge symbol end:'customButton'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-543925427");