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
      
      
      Symbol.bindElementAction(compId, symbolName, "${fragments}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         sym.getSymbol("fragments").playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fragments}", "mouseenter", function(sym, e) {
         // insert code to be run when the mouse enters an element
         sym.getSymbol("fragments").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'fragments'
   (function(symbolName) {   
   
   })("fragments");
   //Edge symbol end:'fragments'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-BANNER1");