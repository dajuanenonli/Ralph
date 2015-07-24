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
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         sym.getSymbolElement().css({
         	"z-index": 999999
         });

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mouseenter", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mouseleave", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'hotspot'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("hotspot");
   //Edge symbol end:'hotspot'

   //=========================================================
   
   //Edge symbol: 'button'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${base}", "mouseenter", function(sym, e) {
         sym.stop("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${base}", "mouseleave", function(sym, e) {
         sym.stop("normal");
         
         

      });
      //Edge binding end

   })("button");
   //Edge symbol end:'button'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-BANNER2");