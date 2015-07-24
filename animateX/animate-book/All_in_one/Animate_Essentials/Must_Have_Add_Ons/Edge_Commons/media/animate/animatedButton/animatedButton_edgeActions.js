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
         	// Implement Button logic into target symbols
         	// e.g.
         	// EC.makeAnimatedButton(sym.getSymbol("MySym"), "Some Label", "images/icon.svg", function() { console.log("CLICKED"); });
         	//========================================================================================================================
         	// First Button (without hotspot)
         	EC.makeAnimatedButton(sym.getSymbol("MyAnimatedButtonB"), "Button B", "images/icon-01.svg", function() {
         		//add code for click action here
         		alert("Button B was CLICKED");
         	});
         
         	// Second Button (with hotspot)
         	EC.makeAnimatedButton(sym.getSymbol("MyAnimatedButtonA"), "Button A", "images/icon-01.svg", function() {
         		//add code for click action here	
         		alert("Button A was CLICKED");
         	});
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'MyAnimatedButtonA'
   (function(symbolName) {   
   
   })("MyAnimatedButtonA");
   //Edge symbol end:'MyAnimatedButtonA'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'MyAnimatedButtonB'
   (function(symbolName) {   
   
   })("MyAnimatedButtonB");
   //Edge symbol end:'MyAnimatedButtonB'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-145692202");