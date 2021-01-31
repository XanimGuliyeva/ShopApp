
$(function() {
    "use strict";
    // ============================================================== 
    // list
    // ============================================================== 
 $(function() {
        $('.notification-list').slimScroll({
            height: '250px'
        });

    });
    // ============================================================== 
    // Menu List
    // ============================================================== 
    
  $(function() {
        $('.menu-list').slimScroll({

        });

    });
    // ============================================================== 
    // search
    // ============================================================== 
      
    $(function() {
        $("#custom-search").click(function() {
            $(".search-query").focus();
        });
    });
 
    // ============================================================== 
    // sidenav
    // ============================================================== 

  $(function() {
  $('.sidebar-nav-fixed a')
        // Remove links that don't actually link to anything

        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 90
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            };
            $('.sidebar-nav-fixed a').each(function() {
                $(this).removeClass('active');
            })
            $(this).addClass('active');



        });

   });

    // ============================================================== 
    // tooltip
    // ============================================================== 
   $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

 // ============================================================== 
    // popover
    // ============================================================== 
   $(function() {
        $('[data-toggle="popover"]').popover()
    })

// ============================================================== 
    // chat list
    // ============================================================== 

$(function() {
        $('.chat-list').slimScroll({
            color: 'false',
            width: '100%'


        });

    });
// ============================================================== 
    // test list
    // ============================================================== 

    var monkeyList = new List('test-list', {
        valueNames: ['name']

    });
    var monkeyList = new List('test-list-2', {
        valueNames: ['name']

    });



// ============================================================== 
    // Dropzone
    // ============================================================== 

 $(".dz-clickable").dropzone({ url: "/file/post" });



    

});