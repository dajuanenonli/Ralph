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
         // Demo: Add CSS rules globally
         //------------------------------------------------------------
         // By Simon Widjaja (mail@simonwidjaja.com)
         //============================================================
         
         /*
         Description:
         Add CSS rules globally
         Define global CSS rules instead of applying inline CSS locally.
         */
         
         
         sym.$("btnAction").bind("click", function(evt) {
         
         	// Add CSS rule for class 'custom-box'
         	// Oberserve the !important statement which is necessary to prevent Animate to override the property
         	EC.addCSS(".custom-box", {
         		"background-color": "rgba(217,68,148,1.00) !important",
         		"border-radius": "16px"
         	});
         
         	// Add CSS rule for class 'custom-image'
         	// Oberserve the !important statement which is necessary to prevent Animate to override the property
         	EC.addCSS(".custom-image", {
         		"background-image": "url(http://www.blodpudding.com/Bilder/Dave_Ad/Dave_005.jpg)",
         		"background-size": "contain !important"
         	});
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-145692202");