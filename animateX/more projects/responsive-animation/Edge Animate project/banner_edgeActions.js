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
   
   //Edge symbol: 'sugarcube'
   (function(symbolName) {   
   
   })("sugarcube");
   //Edge symbol end:'sugarcube'

   //=========================================================
   
   //Edge symbol: 'sugardish'
   (function(symbolName) {   
   
   })("sugardish");
   //Edge symbol end:'sugardish'

   //=========================================================
   
   //Edge symbol: 'spritesheet_steam_symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2900, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("steam_anim");
   //Edge symbol end:'steam_anim'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-15840723");