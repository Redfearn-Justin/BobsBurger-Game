$(function() {

        $(".devour-burger").on("click", function(event) {

            event.preventDefault();

            var id = $(this).attr("data-id");

            var newState = $(this).attr("data-newstate");


            var data = { devoured: (newState == 'false') ? 'true' : 'false' };

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

            console.log(newBurger);

            // Send the POST request.
            $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
            }).then(
            function(response_data) {
                console.log(response_data);

                console.log("freshly pressed a new burger, yum!");

                location.reload();
            });
        });
    });