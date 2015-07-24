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
         // Demo: Inject data
         //------------------------------------------------------------
         // By Simon Widjaja (mail@simonwidjaja.com)
         //============================================================
         
         /*
         Description:
         From HTML into Animate composition. Great for dynamic content and CMS integration.
         
         The HTML of the composition with data injection looks like this:
         
         <div id="Stage" class="EDGE-145692202">
         	<script class="data" type="text/text">
         	  { "title": "I'm injected", "message": "This text was injected from HTML"}
         	</script>
         </div>
         */
         
         
         
         
         sym.$("btnAction").bind("click", function(evt) {
         
         	// Load injected data
         	var data = EC.getInjectedData(sym);
         
         	// Render injected data
         	sym.$("txtTitle").html( data.title );
         	sym.$("txtMessage").html( data.message );
         
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-145692202");