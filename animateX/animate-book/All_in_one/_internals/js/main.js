$(function() {
  
  
  
  
  
  //==================================================
  // SidebarRight
  //==================================================
  var sidebarRight$ = $('#sidebarRight');
  
  if (global.currentPage) {

    //==================================================
    // Button: Pager
    //==================================================
    var prevPage = global.currentPage.prevPage,
        prevPageButton$ = sidebarRight$.find(".prevPageButton");
    if (prevPage) {
      prevPageButton$
        .addClass("active")
        .click(function(evt) {document.location = global.pathToRoot+prevPage.path;})
        .find(".info").html(prevPage.title);
    }
    var nextPage = global.currentPage.nextPage,
        nextPageButton$ = sidebarRight$.find(".nextPageButton");
    if (nextPage) {
      nextPageButton$
        .addClass("active")
        .click(function(evt) {document.location = global.pathToRoot+nextPage.path;})
        .find(".info").html(nextPage.title);
    }
    //==================================================
    // Button: SectionButton (Page Overview)
    //==================================================
    var sectionsButton$ = sidebarRight$.find(".sectionsButton");
    sectionsButton$
        .click(function(evt) {
          //console.debug("global.currentPage.sections", global.currentPage.sections);
          if ($("body").innerWidth() < 1700) {
            $("#sectionsOverlay").toggle();
          }
        });
    //==================================================
    // Button: BookButton (Book Overview)
    //==================================================
    var bookButton = sidebarRight$.find(".bookButton");
    bookButton
        .click(function(evt) {
          $("#bookOverlay").toggle();
        });
    
    
        
    
    
    //==================================================
    // Sections Overview
    //==================================================
    $(".sections-content").empty();
    function addLink(entry) {
      entry.click(function(evt) {
        // Scroll to section
        //window.location.hash = $(evt.currentTarget).data("section").id;
        $('html, body').animate({ scrollTop: $("#"+$(evt.currentTarget).data("section").id).offset().top }, 1000);
        // Hide Overlay
        if ($("body").innerWidth() < 1700) {
          $("#sectionsOverlay").toggle();
        }
        // Prevent bubbling (higher li's must NOT fire click event)
        evt.preventDefault();
        evt.stopImmediatePropagation();
      });            
    }

    $(".sections-content").append('<h6>On this page:</h6>');
    for (var index in global.currentPage.sections) {
      var s = global.currentPage.sections[index];

      var entry = $('<li class="section">'+s.title+'</li>');
      $(".sections-content").append(entry);
      entry.wrap("<ul></ul>");
      entry.data("section", s);
      addLink( entry );

      // Children H2
      if (s.children && s.children.length > 0) {
        for (var index2 in s.children) {
          var s2 = s.children[index2];
          var entry2 = $('<li class="section">'+s2.title+'</li>');
          entry.append(entry2);
          entry2.wrap("<ul></ul>");
          entry2.data("section", s2);
          addLink( entry2 );

          // Children H3
          if (s2.children && s2.children.length > 0) {
            for (var index3 in s2.children) {
              var s3 = s2.children[index3];
              var entry3 = $('<li class="section">'+s3.title+'</li>');
              entry2.append(entry3);
              entry3.wrap("<ul></ul>");
              entry3.data("section", s3);
              addLink( entry3 );
            }
          }                
        }
      }
    }
    //==================================================
    // End: Sections Overview
    //==================================================
    
    
    //==================================================
    // Book Overview
    //==================================================
    $("#book-overview-content").appendTo( $("#bookOverlay .book-content") )
                               .show();
    $(".overview-complete").scroll(function(evt) {
      console.log(123);
      evt.stopPropagation();
      evt.stopImmediatePropagation();
      evt.preventDefault();
      
    });
    
    //==================================================
    // End: Book Overview
    //==================================================
    
    
  }
  
/*  
  // Next Page
  var leftsideBox = $('<div class="leftsideBox"></div>');
  
  
  
  
  
  if (global.currentPage.prevPage) {
    leftsideBox.append(
      '<div class="btn prevPageButton" onclick="document.location=\''+global.pathToRoot+global.currentPage.prevPage.path+'\';">'
      +'&lt;'
      +'</div>'
    );
  }  
  if (global.currentPage.nextPage) {
    leftsideBox.append('<div class="btn nextPageButton" onclick="document.location=\''+global.pathToRoot+global.currentPage.nextPage.path+'\';">&gt;</div>');
  }
  
  $("body").append(leftsideBox);

<div class="leftsideBox">
  <div class="btn prevPageButton" onclick="document.location=\''+global.pathToRoot+global.currentPage.prevPage.path+'\';">
    &lt;
  </div>
  <div class="btn nextPageButton" onclick="document.location=\''+global.pathToRoot+global.currentPage.nextPage.path+'\';">
    &lt;
  </div>
</div>

*/
  
  
  
  
});