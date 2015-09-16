jQuery(function ($) {
    // Get a reference to the container.
    var Ordercontainer = $("#Orderdetailcontainer");
    var storecontainer = $("#storedetailcontainer");
    var batchcontainer = $("#batchdetailcontainer");
    // Bind the link to toggle the slide.
    $("#LinkOrder").bind('click',
        function (event) {
            // Prevent the default event.
            event.preventDefault();
            // Toggle the slide based on its current
            // visibility.
            if (Ordercontainer.is(":visible")) {
                // Hide - slide up.
                Ordercontainer.slideUp(1000);

            } else {
                // Show - slide down.
                Ordercontainer.slideDown(1000);
            }
        }
    );
});
jQuery(function ($) {
    // Get a reference to the container.
    var container = $("#storedetailcontainer");
    // Bind the link to toggle the slide.
    $("#LinkStore").bind('click',
        function (event) {
            // Prevent the default event.
            event.preventDefault();
            // Toggle the slide based on its current
            // visibility.
            if (container.is(":visible")) {
                // Hide - slide up.
                container.slideUp(1000);
            } else {
                // Show - slide down.
                container.slideDown(1000);
            }
        }
    );
});
jQuery(function ($) {
    // Get a reference to the container.
    var container = $("#batchdetailcontainer");
    // Bind the link to toggle the slide.
    $("#LinkBatch").bind('click',
        function (event) {
            // Prevent the default event.
            event.preventDefault();
            // Toggle the slide based on its current
            // visibility.
            if (container.is(":visible")) {
                // Hide - slide up.
                container.slideUp(1000);
            } else {
                // Show - slide down.
                container.slideDown(1000);
            }
        }
    );
});

jQuery(function ($) {
    // Get a reference to the container.
    var container = $("#storedetailcontainer");
    var ordercontainer = $("#Orderdetailcontainer");
    var storecontainer = $("#storedetailcontainer");
    var batchcontainer = $("#batchdetailcontainer");
    // Bind the link to toggle the slide.
    $("#closestoreslide").bind('click',
        function (event) {
            // Prevent the default event.
            event.preventDefault();
            // Toggle the slide based on its current
            // visibility.
            if (storecontainer.is(":visible")) {
                // Hide - slide up.
                storecontainer.slideUp(1000);
            } else {
                // Show - slide down.
                storecontainer.slideDown(1000);
            }
        }
    );
    $("#closebatchslide").bind('click',
       function (event) {
           // Prevent the default event.
           event.preventDefault();
           // Toggle the slide based on its current
           // visibility.
           if (batchcontainer.is(":visible")) {
               // Hide - slide up.
               batchcontainer.slideUp(1000);
           } else {
               // Show - slide down.
               batchcontainer.slideDown(1000);
           }
       }
   );

    $("#closeorderslide").bind('click',
       function (event) {
           // Prevent the default event.
           event.preventDefault();
           // Toggle the slide based on its current
           // visibility.
           if (ordercontainer.is(":visible")) {
               // Hide - slide up.
               ordercontainer.slideUp(1000);
           } else {
               // Show - slide down.
               ordercontainer.slideDown(1000);
           }
       }
   );
});

