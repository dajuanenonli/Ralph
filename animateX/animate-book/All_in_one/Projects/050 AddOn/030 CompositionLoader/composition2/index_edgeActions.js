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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5200, function(sym, e) {
         // Hier Code einfügen// Zeitleiste von der angegebenen Position abspielen (ms oder Beschriftung)
         sym.play('loop');

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'text'
   (function(symbolName) {   
   
   })("text");
   //Edge symbol end:'text'

})(jQuery, AdobeEdge, "EDGE-839280334");