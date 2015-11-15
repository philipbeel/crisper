/**
 * Main JS file for Moustachey behaviours
 */

/*globals jQuery, document */
(function ($) {



    $(window).load(function() {
      "use strict";
        //
        // Full Width Insert
        //
        var makeInsert =function () {
            $("article img").each(function () {

            	var insertAlt = $(this).attr('alt');

            	if ( insertAlt === 'Insert' ) {

            		var parentClass = $(this).parent().attr('class');

            		if ( parentClass !== "mt-insert" ) {

            			$(this).wrap('<figure class="mt-insert" />');

            		}

            		var insertImage = $(this).height();

            		$(this).parent().css( "min-height" , insertImage );


            	}


            });
        };
        makeInsert();

				jQuery(window).resize(function () {
					makeInsert();
				});

    });


    $(document).ready(function(){
      "use strict";

      //
    	// Add a class so we know JavaScript is supported
    	//
    	$('html').addClass("js").removeClass("no-js");

		// Fit Vids
        $(".post").fitVids();

        // MeanMenu
        $("header nav").meanmenu();

    });

}(jQuery));
