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
         /**
         // Load Edge Commons
         yepnope({
         	load: "http://cdn.edgecommons.org/an/1.1.0/js/min/EdgeCommons.js",
         	// Wait until completely loaded
         	complete: function(){
         		// Load first external composition into container
         		EC.loadComposition("composition1/index.html", sym.$("content"));
         	}
         })
         **/
         
         EC.loadComposition("composition1/index.html", sym.$("content"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn01}", "click", function(sym, e) {
         // Load first composition into "content" element
         EC.loadComposition("composition1/index.html", sym.$("content"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn02}", "click", function(sym, e) {
         // Load second composition into "content" element
         EC.loadComposition("composition2/index.html", sym.$("content"));

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-193409812");