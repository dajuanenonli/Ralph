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
         //===========================
         // Shell Controller
         //===========================
         var Shell = function() {
         	// Variables
         	this.chapter = 0;
         	this.completed = 0;
         	this.score = 0;
         
         	// Methods
         	this.addScore = function(score) {
         		this.score += score;
         		sym.$("scoreText").html(this.score);
         		//sym.stop(0);
         	};
         	this.setCompleted = function(index) {
         		sym.$("chapterIcon"+index).css("background-image", "url(images/chapter_done.png)");
         	};
         	this.setChapter = function(index) {
         		this.chapter = index;
         		sym.$("stack").animate({top: index*-670});
         	};
         };
         // Make shell availble
         sym.setVariable("shell", new Shell());
         
         //===========================
         // Buttons
         //===========================
         function chapterButton_click(btnSym, data) {
         	sym.getVariable("shell").setChapter(data.chapter);
         }
         EC.makeStaticButton(sym.getSymbol("chapterButton1"), "Web standards", "images/chapterIcon1.png", chapterButton_click, {chapter: 1, description: "Learn the essentials of web standards to unleash your creativity."});
         EC.makeStaticButton(sym.getSymbol("chapterButton2"), "Coming soon", "images/chapterIcon2.png",  chapterButton_click, {chapter: 2, description: "Learn how minimal coding skills can change your creative life."});
         EC.makeStaticButton(sym.getSymbol("chapterButton3"), "Coming soon", "images/chapterIcon3.png", null, {chapter: 3, description: "Stay tuned and follow us."});
         
         sym.$("sidebar_icon").click(function() {
         	sym.getVariable("shell").setChapter(0);
         });
         
         //===========================
         // Load chapters
         //===========================
         var promise1 = EC.loadComposition("chapter1/chapter1.html", sym.$("chapter1"));
         promise1.done(function(comp) {
         	comp.getStage().setVariable("shell", sym.getVariable("shell"));
         });
         var promise2 = EC.loadComposition("chapter2/chapter2.html", sym.$("chapter2"));
         promise2.done(function(comp) {
         	comp.getStage().setVariable("shell", sym.getVariable("shell"));
         });

      });
      //Edge binding end

      

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'chapterButton1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.setVariable("ready", function(data) {
         	sym.$("description").html( sym.getVariable("data").description );
         });

      });
      //Edge binding end

   })("chapterButton1");
   //Edge symbol end:'chapterButton1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-274110266");