// Sliding menu

/*
* Uses jQuery!!!!111one
*/


/*====================================
=            ON DOM READY            =
====================================*/
$(function() {
  
    // Toggle Nav on Click
    $('.toggle-nav').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });


    $(".toggle-nav").click(function() {
        $('.site-menu').toggleClass('site-menu-width');
      });
  
});


/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function toggleNav() {
    if ($('.site-wrapper').hasClass('show-nav')) {
        // Do things on Nav Close
        $('.site-wrapper').removeClass('show-nav');
    } else {
        // Do things on Nav Open
        $('.site-wrapper').addClass('show-nav');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}









/*
 * Replace all SVG images with inline SVG
 */
/*
     * Replace all SVG images with inline SVG
     */
    

    $(document).ready(function() {
        $('img.dark-svg').each(function() {
            var $img = jQuery(this);
            var imgURL = $img.attr('src');
            var attributes = $img.prop("attributes");
    
            $.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');
    
                // Remove any invalid XML tags
                $svg = $svg.removeAttr('xmlns:a');
    
                // Loop through IMG attributes and apply on SVG
                $.each(attributes, function() {
                    $svg.attr(this.name, this.value);
                });
    
                // Replace IMG with SVG
                $img.replaceWith($svg);
            }, 'xml');
        });
    });