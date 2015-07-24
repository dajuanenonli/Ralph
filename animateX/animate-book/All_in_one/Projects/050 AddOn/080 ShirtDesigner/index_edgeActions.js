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
         // Access SVG
         EC.SVG.accessSVG(sym.$("Preview")).done(
         	
         	function(svgDocument){
         
         		console.log("svg access enabled");
         		// add event listener
         		svgDocument.addEventListener("select", function(event) {
         
         			// Remember selected part
         			sym.setVariable("selectedPart", event.target);
         
         			// Show ID of the selected part in the textfield
         			sym.$("selectedPartTxt").html( event.target.id );
         		});
         });
         
         // Define global function on stage level to change color
         sym.setVariable("changeColor", function(color) {
         
         	// Get selected part of the svg
         	var selectedPart = sym.getVariable("selectedPart");
         
         	// Set the color of the selected part
         	$(selectedPart).css("fill", color);
         });
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy7}", "click", function(sym, e) {
         // Call global "changeColor()" function to set new color
         var stage = sym.getComposition().getStage();
         var changeColor = stage.getVariable("changeColor");
         
         changeColor( $(e.currentTarget).css("background-color") );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse}", "click", function(sym, e) {
         // Call global "changeColor()" function to set new color
         var stage = sym.getComposition().getStage();
         var changeColor = stage.getVariable("changeColor");
         
         changeColor( $(e.currentTarget).css("background-color") );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy}", "click", function(sym, e) {
         // Call global "changeColor()" function to set new color
         var stage = sym.getComposition().getStage();
         var changeColor = stage.getVariable("changeColor");
         
         changeColor( $(e.currentTarget).css("background-color") );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy2}", "click", function(sym, e) {
         // Call global "changeColor()" function to set new color
         var stage = sym.getComposition().getStage();
         var changeColor = stage.getVariable("changeColor");
         
         changeColor( $(e.currentTarget).css("background-color") );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy3}", "click", function(sym, e) {
         // Call global "changeColor()" function to set new color
         var stage = sym.getComposition().getStage();
         var changeColor = stage.getVariable("changeColor");
         
         changeColor( $(e.currentTarget).css("background-color") );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy4}", "click", function(sym, e) {
         // Call global "changeColor()" function to set new color
         var stage = sym.getComposition().getStage();
         var changeColor = stage.getVariable("changeColor");
         
         changeColor( $(e.currentTarget).css("background-color") );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy5}", "click", function(sym, e) {
         // Call global "changeColor()" function to set new color
         var stage = sym.getComposition().getStage();
         var changeColor = stage.getVariable("changeColor");
         
         changeColor( $(e.currentTarget).css("background-color") );// insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy6}", "click", function(sym, e) {
         // Call global "changeColor()" function to set new color
         var stage = sym.getComposition().getStage();
         var changeColor = stage.getVariable("changeColor");
         
         changeColor( $(e.currentTarget).css("background-color") );

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-193409812");