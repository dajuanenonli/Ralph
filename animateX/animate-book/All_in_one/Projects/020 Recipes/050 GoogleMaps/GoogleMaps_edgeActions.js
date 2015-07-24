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
         // The map code provided by Google's Maps Engine (https://mapsengine.google.com)
         // The provided code looks like this:
         // <iframe src="http://mapsengine.google.com/map/embed?mid=zsKqVOZ51FEQ.kupWm_JOuHgo" width="640" height="480"></iframe>
         
         // (1) Get the target element for the map
         var map = sym.$("map");
         // (2) Use '' to not get a conflict with the provided code that includes ""
         // (3) Modify the width and height to be more flexible and add style to get rid of the ugly border
         var mapCode = '<iframe src="http://mapsengine.google.com/map/embed?mid=zsKqVOZ51FEQ.kupWm_JOuHgo" '
         	 +'width="'+map.width()+'" height="'+map.height()+'" style="border: none;"></iframe>';
         // (4) Add generated map code to the map container
         map.html(mapCode);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-616982773");