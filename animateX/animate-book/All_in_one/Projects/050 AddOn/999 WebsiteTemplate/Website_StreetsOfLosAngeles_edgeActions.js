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
         
         
         //--------------------------------------------------
         // Buttons
         //--------------------------------------------------
         
         // Center Button Group
         EC.centerElement(sym.$("buttonGroup"));
         // Click on buttons
         function headerBtn_onClick(btnSym, data) {
         	console.log("headerBtn_onClick: ", data.section);
         	UBR.scrollTo({
         		//scroller: "html, body",
         		target: sym.getSymbol(data.section),
         		realScrolling: true
         	}); 
         }
         // Make buttons
         EC.makeAnimatedButton(sym.getSymbol("btnArt"), "ART", null, headerBtn_onClick, {section: "SectionArt"});
         EC.makeAnimatedButton(sym.getSymbol("btnPeople"), "PEOPLE", null, headerBtn_onClick, {section: "SectionPeople"});
         EC.makeAnimatedButton(sym.getSymbol("btnDoors"), "DOORS", null, headerBtn_onClick, {section: "SectionDoors"});
         
         //--------------------------------------------------
         // Content
         //--------------------------------------------------
         // Center Content Group
         EC.centerElement(sym.$("contentGroup"));

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'headerButton'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("headerButton");
   //Edge symbol end:'headerButton'

   //=========================================================
   
   //Edge symbol: 'SectionPeople'
   (function(symbolName) {   
   
   })("SectionPeople");
   //Edge symbol end:'SectionPeople'

   //=========================================================
   
   //Edge symbol: 'RotatorPeople'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         //--------------------------------------------------
         // Rotator logic
         //--------------------------------------------------
         sym.$("btn1").bind("click", function() {
         	UBR.scrollTo({
         		scroller: sym.$("scroller"),
         		target: sym.$("item1")
         	});
         });
         sym.$("btn2").bind("click", function() {
         	UBR.scrollTo({
         		scroller: sym.$("scroller"),
         		target: sym.$("item2")
         	});
         });
         sym.$("btn3").bind("click", function() {
         	UBR.scrollTo({
         		scroller: sym.$("scroller"),
         		target: sym.$("item3")
         	});
         });
         sym.$("btn4").bind("click", function() {
         	UBR.scrollTo({
         		scroller: sym.$("scroller"),
         		target: sym.$("item4")
         	});
         });
         sym.$("btn5").bind("click", function() {
         	UBR.scrollTo({
         		scroller: sym.$("scroller"),
         		target: sym.$("item5")
         	});
         });
         

      });
      //Edge binding end

   })("RotatorPeople");
   //Edge symbol end:'RotatorPeople'

   //=========================================================
   
   //Edge symbol: 'SectionDoors'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         //--------------------------------------------------
         // Rotator logic
         //--------------------------------------------------
         var targets = ["target2", "target3", "target4", "target5", "target1"],
         	 index = 0;
         
         sym.$("btnMore").bind("click", function() {
         console.log("btn")
         	// Scroll to target
         	UBR.scrollTo({
         		scroller: sym.$("scroller"),
         		target: sym.$( targets[index] )
         	});
         	// Next target
         	index = (index >= targets.length-1) ? 0 : index + 1;
         });

      });
      //Edge binding end

   })("SectionDoors");
   //Edge symbol end:'SectionDoors'

   //=========================================================
   
   //Edge symbol: 'SectionArt'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         //--------------------------------------------------
         // Rotator logic
         //--------------------------------------------------
         var index = sym.getVariable("index");
         if (index === undefined) {
         	sym.setVariable("index", 1);
         	index = 1;
         }
         
         var targets = ["Art01", "Art02", "Art03", "Art04"];
         
         // Scroll to target
         UBR.scrollTo({
         	scroller: sym.$("scroller"),
         	target: sym.$( targets[index] )
         });
         
         // Next target
         index = (index >= targets.length-1) ? 0 : index + 1;
         sym.setVariable("index", index);
         
         //Loop
         sym.play(0);

      });
      //Edge binding end

   })("SectionArt");
   //Edge symbol end:'SectionArt'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-287338103");