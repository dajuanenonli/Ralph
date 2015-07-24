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

   //=========================================================
   
   //Edge symbol: 'dummyTpl_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         if (!sym.isPlayDirectionReverse()) {
         	sym.getSymbolElement().css({"z-index": 99});
         }
         else {
         	sym.getSymbolElement().css({"z-index": 1});
         }
         

      });
         //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("hotspot").mouseenter( function() {
         	sym.play("open");
         });
         sym.$("hotspot").mouseleave( function() {
         	sym.playReverse();
         });

      });
      //Edge binding end

      })("edgeDocksTeaser");
   //Edge symbol end:'edgeDocksTeaser'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-349170812");