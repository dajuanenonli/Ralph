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
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // Enable SVG access
         EC.SVG.accessSVG(sym.$("Map")).done(
         		function(svgDocument){
         
         			// Add mouse pointer to states
         			$("path", svgDocument).css({"cursor": "pointer"});
         
         			// Add event listener
         			svgDocument.addEventListener("select", function(event) {
         
         				// Show the id of the selected part in the textfield
         				sym.$("label").html( event.target.id );
         
         				// Reset the color of all parts
         				$("path", svgDocument).css("fill", "#969696");
         
         				// Set the color of the selected part
         				$(event.target).css("fill", "red");
         
         			});
         		}
         );
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-808185290");