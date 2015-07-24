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
         //try {
         
         	// Load video
         	var video$ = sym.$("videoContainer");
         	video$.html('<video width="'+video$.width()+'" height="'+video$.height()+'">'
         		+'<source src="media/video.mov" type="video/mp4">'
         		//+'<source src="movie.ogg" type="video/ogg">'
         		+'</video>'
         	);
         	
         	// Disable menu for video player
         	$("video")[0].addEventListener('contextmenu', function(e) {
         		 e.preventDefault();
         		 return false;
         	}); 
         	
         	// Get video position 
         	$("video")[0].addEventListener("timeupdate", function(evt) {
         		var time = evt.currentTarget.currentTime;
         		
         		// Set trigger to pause video and show quiz page
         		if (time > 10 && time < 11) {
         			evt.currentTarget.currentTime = 11.5;
         			evt.currentTarget.pause();
         			sym.getSymbol("quiz").stop("q1");
         		}
         		else if (time > 20 && time < 21) {
         			evt.currentTarget.currentTime = 21.5;
         			evt.currentTarget.pause();
         			sym.getSymbol("quiz").stop("q2");
         		}
         	});
         
         	// Play Video (touch optimized)
         	sym.$("playButton").on(EC.CLICK_OR_TOUCH, function() {
         		$("video")[0].play();
         	});
         
         /*}
         catch (err) {
         	alert(err.toString());
         }
         */

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'
   
   //Edge symbol: 'quiz'
   (function(symbolName) {   
         

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // Resume video
         sym.$("next").on(EC.CLICK_OR_TOUCH, function() {
         	sym.stop("empty");
         	$("video")[0].play();
         });

      });
      //Edge binding end

   })("quiz");
   //Edge symbol end:'quiz'

})(jQuery, AdobeEdge, "EDGE-277060419");