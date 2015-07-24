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
         yepnope("libs/spotlight.css");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S3_ani}", "click", function(sym, e) {
         var config = {
         	type: "image",
         	source: "images/screenshot_an.jpg",
         	width: 900,
         	height: 500
         };
         EC.Spotlight.open(config);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S3_flow}", "click", function(sym, e) {
         var config = {
         	type: "image",
         	source: "images/screenshot_rf.jpg",
         	width: 900,
         	height: 500
         };
         EC.Spotlight.open(config);

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'character'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 900, function(sym, e) {
         // Springe zum Label "walk" und spiele ab
         sym.play("walk");
         
         // SUBJEKT . VERB ( DETAILS ) ;
         // sym.play("walk");
         // Symbol spiele ab von "walk"
         // sym.stop("");
         // sym.hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1200, function(sym, e) {
         sym.play("speak");

      });
      //Edge binding end

   })("character");
   //Edge symbol end:'character'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-512559364");