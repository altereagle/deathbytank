$(function(){
    var body = $('body');
    
    function showBoat(){
        var logo = $('<img />') ; // create a new image tag
        
        logo.attr("src", "images/aztlogo_animation.gif"); // set the source to the gif
        
        logo.ready(function(){ // Run when the logo is loaded
            body.append(logo); // Append the logo to the body
            setTimeout(function() { // Run after 8870 miliseconds
                logo.fadeOut(); // Hide the logo
            }, 8870);
        });
    }
    
    showBoat(); // Show boating animation then fades out
    
});