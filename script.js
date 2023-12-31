
$("#ageform").on("submit", function(event) {
    
    var age = $("#age").val(); 
    console.log(age);

    if (age > 18) {
        $("#okmessage").show(); 
        $("#nomessage").hide(); 
    } else {
        $("#nomessage").show();
        $("#okmessage").hide();
    }

    event.preventDefault();
});
