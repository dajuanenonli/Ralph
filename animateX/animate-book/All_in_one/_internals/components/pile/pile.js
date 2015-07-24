//==============================
// Notes/Bugs
//==============================
/*
  + 2 Behaviors
*/

//==============================
// External Helpers
//==============================
/*
 * debouncedresize: special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work? 
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 */

console.log("pile::init");

(function($) {
  var $event = $.event,
      $special,
      resizeTimeout;
  $special = $event.special.debouncedresize = {
      setup: function() {
          $( this ).on( "resize", $special.handler );
      },
      teardown: function() {
          $( this ).off( "resize", $special.handler );
      },
      handler: function( event, execAsap ) {
          // Save the context
          var context = this,
              args = arguments,
              dispatch = function() {
                  // set correct event type
                  event.type = "debouncedresize";
                  $event.dispatch.apply( context, args );
              };
          if ( resizeTimeout ) {
              clearTimeout( resizeTimeout );
          }
          execAsap ?
              dispatch() :
              resizeTimeout = setTimeout( dispatch, $special.threshold );
      },
      threshold: 150
  };
})(jQuery);


//============================================================
//============================================================
// Pile
//============================================================
//============================================================


//==============================
// Constructor
//==============================
var Pile = function(pileId, options) {
  this.pileId = pileId;
  this.el = $("#"+pileId);
  this.options = options;
  
  // Properties
  this.piles = {};
  this.level = 0;
  this.currentPile = null;
  this.closedTotalHeight = 0;
  this.config = {
    cardWidth: 260, 
    cardHeight: 260, 
    hGap: 20, 
    vGap: 20,
    //rotation: 3,
    rotation: 3,
    duration: 0.3
  };
  
  this._init();
  this._calculate();
}

//==============================
// Methods
//==============================
Pile.prototype = {
  _init: function() {
    console.log("init");
    var that = this;
    //------------------------------
    // Setup config
    //------------------------------
    this.options && this.options.cardWidth && (this.config.cardWidth = this.options.cardWidth);
    this.options && this.options.cardHeight && (this.config.cardHeight = this.options.cardHeight);

    //------------------------------
    // Find pile groups and prepare
    //------------------------------
    $("#"+this.pileId+" > div[class^='pile-group-'], #"+this.pileId+" > div[class*=' pile-group-']").each(function(index, item) {
    //this.el.children("div[class^='pile-group-'], div[class*=' pile-group-']").each(function(index, item) {
      var pileName = $.grep(item.className.split(" "), function(v, i) {
        return v.indexOf("pile-group-") === 0;
      }).join();
      // Initially create pile
      !that.piles[pileName] && (that.piles[pileName] = {cards: []});
      var newCard = { el: item };
      that.piles[pileName].cards.push(newCard);  
      // Click
      $(item).data("pileName", pileName)
        .data("card", newCard)
        .click(function(evt) {
          that.onCardClick(evt);
      });
    });
    //console.log(this.piles);
    
    //------------------------------
    // Add back card and reverse order
    //------------------------------
    var backCardTpl = 
      '<div class="pile-group-a">'
        +'<a>'
          +'<img src="Kits/_internals/images/card_back.jpg" width="200" />'
        +'</a>'
      +'</div>';
    for (var pileName in that.piles) {
      var backCard = $(backCardTpl);
      $("."+pileName).first().before(backCard);
      //this.piles[pileName].cards.unshift ({ el: backCard });
      this.piles[pileName].cards.push({ el: backCard });
      // Reverse card order
      this.piles[pileName].cards.reverse();
      
      // Click on back
      $(backCard).data("pileName", pileName)
                 .click(function(evt) {
        that.closePiles();
      });
    }
    
    
    
    //------------------------------
    // Resizing
    //------------------------------
    $(window).on("debouncedresize", function( event ) {
      console.log("debouncedresize");
      that._calculate();
    });
  },
  _calculate: function() {
    //------------------------------
    // Calculate positions
    //------------------------------
    // Reset corrdinates
    var availWidth = this.el.width(),
        itemsPerRow = Math.floor( (availWidth+this.config.hGap)/(this.config.cardWidth+this.config.hGap) ),
        rowIndex = 0,
        pileIndex = 0, // Index of pile
        offsetLeft = 0, // Origin offset of pile
        offsetTopClosed = 0,
        offsetTopOpen = 0;

    for (var pileName in this.piles) {
      var pile = this.piles[pileName];

      // Start a new pile row
      if (pileIndex>0 && (pileIndex%itemsPerRow === 0)) {
        offsetLeft = 0;
        offsetTopClosed += this.config.cardHeight + this.config.vGap;
        rowIndex++;
      }      

      // Reset corrdinates for pile
      var left = 0, top = 0, offsetTopOpen = 0;
      for (var i=0; i<pile.cards.length; i++) {
        var card = pile.cards[i];

        //------------------------------
        // Calculate open values
        //------------------------------
        // Start a new card row
        if (i>0 && (i%itemsPerRow === 0)) {
          //console.log("i new card row ", i);
          left = 0;
          offsetTopOpen += this.config.cardHeight + this.config.vGap;
          //rowIndex++;
        }
        card.openCSS = {
          left: left,
          top: offsetTopOpen,
          transform: "none"
        };
        left += this.config.cardWidth + this.config.hGap;

        //------------------------------
        // Calculate closed values
        //------------------------------
        var rot = 0;
        switch(i) {
          //case (pile.cards.length-2):
          case (2):
            rot = this.config.rotation;
            break;
          //case (pile.cards.length-3):
          case (3):
            rot = -this.config.rotation;
            break;
        }
        card.closedCSS = {
          left: offsetLeft,
          top: offsetTopClosed,
          transform: 'rotate(' + rot + 'deg)'
        };
      }

      pile.offsetLeft = offsetLeft;
      pile.offsetTop = offsetTopClosed;

      // Update total height (open and per pile)
      pile.openTotalHeight = offsetTopOpen + this.config.cardWidth;

      offsetLeft += this.config.cardWidth + this.config.hGap;
      pileIndex++;
    }
    
    // Update total height (closed)
    this.closedTotalHeight = (rowIndex+1)*(this.config.cardHeight+this.config.vGap)-this.config.vGap;
    this._layout();
  },
  _layout: function(currentPile) {
    var totalHeight = this.closedTotalHeight; // can be overridden by open pile
    for (var pileName in this.piles) {
      var pile = this.piles[pileName];
      for (var i=0; i<pile.cards.length; i++) {
        var card = pile.cards[i];
        //console.log("CARD: ", card);
        
        // is open
        if (pile.isOpen) {
          $(card.el).css(card.openCSS);
          $(card.el).css({opacity: 1, visibility: "visible", "z-index": 999});
          totalHeight = pile.openTotalHeight;
        }
        else { // is close
          $(card.el).css(card.closedCSS);
          // is home
          if (this.level===0) {
            $(card.el).css({visibility: "visible"});
            $(card.el).css({opacity: 1});
            setTimeout(function(card){
              $(card.el).css({"z-index": 1});
            }, this.config.duration*1000, card);
          }
          else { // a pile is open
            $(card.el).css({opacity: 0});
            setTimeout(function(card){
              $(card.el).css({visibility: "hidden"});
            }, this.config.duration*1000, card);
          }
        }
      }
    }
    
    this.el.height(totalHeight);
  },
  closePiles: function() {
    this.level = 0;
    this.currentPile.isOpen = false;
    this._layout();
  },
  openPile: function(pileName) {
    console.log("openPile ", pileName);
    this.currentPile = this.piles[pileName];
    this.currentPile.isOpen = true;
    this.level = 1;
    this._layout(pileName);
  },
  onCardClick: function(evt) {
    console.log("onCardClick / pileName: "+$(evt.currentTarget).data("pileName")+", card: "+$(evt.currentTarget).data("card"));
    this.openPile( $(evt.currentTarget).data("pileName") );
    
    // TEST
    // IDEA: find all sub cards in init
    var children = $($(evt.currentTarget).data("card").el).children("div[class^='pile-group-'], div[class*=' pile-group-']");
    children.each(function(index, item) {
      console.log("find 3rd level child");
      $(item).css({display: "block"});
    });
  }
};


//==============================
// Helper
//==============================
var PileHelper = {

};

window.Pile = Pile;
