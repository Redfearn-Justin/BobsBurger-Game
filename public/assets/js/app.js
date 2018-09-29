// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $(".devour-burger").on("click", function(event) {

        //PROBLEM: Need to convert false to true!

        event.preventDefault();

        var id = $(this).attr("data-id");

        var newDevoured = $(this).attr("data-newDevoured");

        var newDevouredState = {

            devoured: newDevoured
        };

        console.log("this is the new id: " + id);

        console.log("this is the new state of devour: " + newDevouredState.devoured);

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
        }).then(
        function() {

            console.log("changed 'eat state' to", newDevoured);
            // Reload the page to get the updated list

            
            //TRY TO FIX SO THE PAGE DOESN"T NEED TO RELOAD!!!
            location.reload();
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