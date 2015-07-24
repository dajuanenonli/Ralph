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
         // Demo: Make Static Button
         //------------------------------------------------------------
         // By Simon Widjaja (mail@simonwidjaja.com)
         //============================================================
         
         /*
         Description:
         Create static button on click.
         Using EC.makeStaticButton() to set label, icon and function dynamically.
         */
         
         
         sym.$("btnAction").bind("click", function(evt) {
         	// Get reference to button symbol, then define label, icon and click-function
         	EC.makeStaticButton(sym.getSymbol("MyStaticButtonA"), "Button A", "images/icon-01.svg", function() {
         			// open alert on button click
         			alert("'Button A' was CLICKED");
         		});
         	EC.makeStaticButton(sym.getSymbol("MyStaticButtonB"), "Button B", "images/icon-01.svg", function() {
         			// open alert on button click
         			alert("'Button B' was CLICKED");
         		});
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'MyStaticButtonA'
   (function(symbolName) {   
   
   })("MyStaticButtonA");
   //Edge symbol end:'MyStaticButtonA'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'MyStaticButtonB'
   (function(symbolName) {   
   
   })("MyStaticButtonB");
   //Edge symbol end:'MyStaticButtonB'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-145692202");