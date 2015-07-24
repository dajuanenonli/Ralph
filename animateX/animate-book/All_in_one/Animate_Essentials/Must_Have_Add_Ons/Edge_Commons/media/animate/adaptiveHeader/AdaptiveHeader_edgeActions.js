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
         // Demo: Adaptive Header Layout
         //------------------------------------------------------------
         // By Simon Widjaja (mail@simonwidjaja.com)
         //============================================================
         
         /*
         Description:
         This sample shows how to create an adaptive header layout with
         alternative sizes for different devices. That can be easily done
         with Edge Commons.
         */
         
         // Center content
         EC.centerElement(sym.$("content"));
         
         // Set Viewport to fix (no zooming)
         EC.setMetaViewport("init");
         
         // Adaptive Layouts
         EC.setAdaptiveLayouts([0, 320, 768, 1200], sym, "content", function(evt) {
         	// This code will always be executed whenever the layout changes
         	//console.log("layoutChange");
         }, true);
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'layout1200'
   (function(symbolName) {   
   
   })("layout1200");
   //Edge symbol end:'layout1200'

   //=========================================================
   
   //Edge symbol: 'Header_BubbleRight'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Header_BubbleRight");
   //Edge symbol end:'Header_BubbleRight'

   //=========================================================
   
   //Edge symbol: 'Header_BubbleRight_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Header_BubbleCenter");
   //Edge symbol end:'Header_BubbleCenter'

   //=========================================================
   
   //Edge symbol: 'Header_BubbleCenter_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Header_BubbleLeft");
   //Edge symbol end:'Header_BubbleLeft'

   //=========================================================
   
   //Edge symbol: 'layout1200_1'
   (function(symbolName) {   
   
      })("layout320");
   //Edge symbol end:'layout320'

   //=========================================================
   
   //Edge symbol: 'layout981_1'
   (function(symbolName) {   
   
   })("layout0");
   //Edge symbol end:'layout0'

   //=========================================================
   
   //Edge symbol: 'layout1200_1'
   (function(symbolName) {   
   
      })("layout768");
   //Edge symbol end:'layout768'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-258767876");