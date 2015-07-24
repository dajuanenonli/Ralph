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
         //============================================================
         // Edge Commons - Dirty little helpers for Adobe Edge Animate
         //------------------------------------------------------------
         // Demo: Centering elements
         //------------------------------------------------------------
         // By Simon Widjaja (mail@simonwidjaja.com)
         //============================================================
         
         /*
         Description:
         Centering elements is super easy with Edge Commons
         */
         
         sym.$("btnAction").bind("click", function(evt) {
         	// Center element named "myElement"
         	EC.centerElement( sym.$("myElement") );
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-145692202");