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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_Next}", "click", function(sym, e) {
         var imgCount = sym.getVariable("imgCount");
         
         if (imgCount == 4) {
         	imgCount = 1;
         } else {
         	imgCount = imgCount + 1;
         };
         
         sym.$("container").html("<img src='images/img00"+imgCount+".jpg'>"+"</img>");
         
         sym.setVariable("imgCount", imgCount);
         
         
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_Prev}", "click", function(sym, e) {
         var imgCount = sym.getVariable("imgCount");
         
         if (imgCount <= 1) {
         	imgCount = 4;
         } else {
         	imgCount = imgCount - 1;
         };
         
         sym.$("container").html("<img src='images/img00"+imgCount+".jpg'>"+"</img>");
         
         sym.setVariable("imgCount", imgCount);
         
         
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var imgCount = 0;
         sym.setVariable("imgCount", imgCount);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${container}", "click", function(sym, e) {
         /*
         var imgCount = sym.getVariable("imgCount");
         
         sym.$("container").html("<img src='images/img00"+imgCount+".jpg'>"+"</img>");
         
         if (imgCount > 3) {
         	imgCount = 1;
         } else {
         imgCount = imgCount + 1;
         };
         
         sym.setVariable("imgCount", imgCount);
         
         console.log(imgCount);
         */

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-205935031");