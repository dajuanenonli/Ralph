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
         // Demo: Open spotlight overlay
         //------------------------------------------------------------
         // By Simon Widjaja (mail@simonwidjaja.com)
         //============================================================
         
         /*
         Description:
         Open image in Spotlight Overlay on click.
         Using a config object to define the properties of the overlay.
         */
         
         yepnope({
         	load: "libs/spotlight.css"
         });
         
         sym.$("btnAction").bind("click", function(evt) {
         
         	// Define configuration for overlay in config object
         	var config = {
         		width: 700,                                   // Width of the overlay
         		height: 400,                                  // Height of the overlay
         		borderWidth: 5,                               // Border width (px)
         		borderColor: "#FFF",                          // Border color
         		type: "image",                                // Media type (image|animate|youtube)
         		source: "images/MyImage.jpg",                 // Source to media
         	}
         
         	// Open the Spotlight Overlay with config object as parameter
         	EC.Spotlight.open( config );
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-145692202");