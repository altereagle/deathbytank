$(function(){
    var BODY = $('body');
    // We are using this funtion to find the center point of the page for are logo
    function centerElement(ele){
        var X = $(document).width();
        var Y = $(document).height();
        var XC = X * 0.25;
        var YC = Y * 0.25;
        var eleXC = ele.width()  * 0.5;
        var eleYC = ele.height() * 0.5;
        
        var leftPos = XC - eleXC;
        var topPos = YC - eleYC;
        
        ele.css({
            position: "absolute",
            left: leftPos,
            top: topPos
        });
        
    }
    
    function createImage(options){
        var image = $('<img />');           // create a new image tag
        
        image.attr("src", options.src);     // set the source to the gif
        
        image.ready(function(){             // Run when the logo is loaded
            options.parent.append(image);   // Put the logo in the body
            centerElement(image);
            setTimeout(function() {         // Run after 8870 miliseconds
                image.fadeOut(3000, function(){
                    console.log('test');
                });            // Hide the logo via Fading Out
            }, 8870);
        });
    }

    (function(){
        var logo = {                                // This is the Logo
            src: "images/aztlogo_animation.gif",    // This is the source of image 
            parent: $('body')                       // This is the element that the logo will be appended to
            
        };
    createImage(logo);  // Show boating animation then fades out
    })();
});