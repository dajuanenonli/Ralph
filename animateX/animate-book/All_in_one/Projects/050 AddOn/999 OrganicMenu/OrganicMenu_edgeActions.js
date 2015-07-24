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
         // Button 1
         var btn1 = sym.createChildSymbol("button", "menu");
         btn1.getVariable("setLabel")("Button 1");
         btn1.getSymbolElement().click(function() {
         	console.log("button 1 was clicked");
         });
         // Button 2
         var btn2 = sym.createChildSymbol("button", "menu");
         btn2.getVariable("setLabel")("Button 2");
         btn2.getSymbolElement().click(function() {
         	console.log("button 2 was clicked");
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'button_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // Modify CSS for button to float
         sym.getSymbolElement().css({ "position": "relative", float: "left", "margin-top": 5, "margin-right": 5 });
         
         // Provide function to set the label
         sym.setVariable("setLabel", function(label) {
         	sym.$("label").html( label );
         });
         
         // Register event handler
         sym.$("hotspot").mouseenter(function(){
         	sym.play("enter");
         });
         sym.$("hotspot").mouseleave(function(){
         	sym.play("leave");
         });

      });
         //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         sym.getSymbolElement().css({width: sym.$("hotspot").width()});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      })("button");
   //Edge symbol end:'button'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-349170812");