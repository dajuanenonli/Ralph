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
      
      
      Symbol.bindElementAction(compId, symbolName, "${Hotspot}", "click", function(sym, e) {
         window.open("http://www.edgedocks.com", "_self");
         console.log(123);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'fishbowl'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1944, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("fishbowl");
   //Edge symbol end:'fishbowl'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-272609037");