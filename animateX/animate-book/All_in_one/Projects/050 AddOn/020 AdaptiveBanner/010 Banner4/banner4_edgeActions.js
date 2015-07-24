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
         EC.setAdaptiveLayouts( [400, 600, 728], sym, "adaptiveContainer" );

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'layout_728'
   (function(symbolName) {   
   
   })("layout728");
   //Edge symbol end:'layout728'

   //=========================================================
   
   //Edge symbol: 'layout_600'
   (function(symbolName) {   
   
   })("layout600");
   //Edge symbol end:'layout600'

   //=========================================================
   
   //Edge symbol: 'layout400'
   (function(symbolName) {   
   
   })("layout400");
   //Edge symbol end:'layout400'

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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-BANNER4");