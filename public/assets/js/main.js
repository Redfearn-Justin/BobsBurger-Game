$(function() {

        $(".devour-burger").on("click", function(event) {

            //problem located here: request in controller is coming back empty!

            //troubleshooting
            //=====================================================================

            event.preventDefault();

            var id = $(this).attr("data-id");

            var newState = $(this).attr("data-newstate");


            console.log("hopefully this shows true: " + newState);


            //end of troubleshoot
            //====================================================================

            // console.log("this is the new id: " + id);

            // console.log("this is the new state of devour: " + newState.devoured);

            // return;  
            var data = { devoured: (newState == 'false') ? 'true' : 'false' };
            console.log(data);

            // Send the PUT request.
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: data
            }).then(
            function(response_data) {

                //console.log("changed 'eat state' to", newDevoured);
                console.log(response_data);
                // Reload the page to get the updated list

                
                //TRY TO FIX SO THE PAGE DOESN"T NEED TO RELOAD!!!
                window.location.reload();
            }
            );
        });

        $(".create-form").on("submit", function(event) {

            event.preventDefault();

            var newBurger = {
                burger_name: $("#ca").val().trim()
            }

            // Send the POST request.
            $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
            }).then(
            function() {
                console.log("freshly pressed a new burger, yum!");
                // Reload the page to get the updated list

                //TRY TO PREVENT PAGE RELOAD!
                location.reload();
            });
        });
    });