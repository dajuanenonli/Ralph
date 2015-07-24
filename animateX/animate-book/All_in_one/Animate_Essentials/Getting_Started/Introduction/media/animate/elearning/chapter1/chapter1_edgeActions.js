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
         //==================
         // Challenge Screen
         //==================
         
         // Next Button (start quiz)
         sym.$("arrowButton").click(function() {
         	sym.play();
         });
         
         //=================================
         // Drag & Drop Quiz with jQuery UI
         //=================================
         
         // Requirements
         var matches = 0,
             total = 6;
         
         // Making elements with "drag" in css class draggable
         $(".drag", sym.getSymbolElement())
         	.draggable({ opacity: 0.3, revert: 'invalid'});
         
         // Types of matching items
         var types = ["html", "css", "js"];
         
         // Drop logic with jQuery UI
         for (type in types) {
         
         	// Defining target area
         	sym.$(types[type]+'Container').droppable({
         
         		// Accept matching items only
         		accept: $('.drag-'+types[type], sym.getSymbolElement()),	
         
         		// Drop item into target container
         		drop: function(evt, ui) {
         			var target$ = $(this),
         				 item$ = $(ui.draggable);
         
         			// Attach to target container
         			item$.appendTo(target$);
         
         			// Position item automatically in container
         			item$.css({
         				position: 'relative', top: 0, left: 0, margin: 10
         			});
         
         			// Add score for successfull placement
         			sym.getVariable("shell").addScore(10);
         
         			// Update and check requirements 
         			if (++matches >= total) {
         				// Set chapter to completed on shell
         				sym.getVariable("shell").setCompleted(1);
         				// Play done screen
         				sym.play();
         			}
         		}
         	});
         }
         
         //=============
         // Done Screen
         //=============
         
         // Next chapter
         sym.$("nextButton").click(function() {
         	sym.getVariable("shell").setChapter(2);
         });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1935, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 929, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-277060419");