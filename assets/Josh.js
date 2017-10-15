$(document).ready(function(){
    
     var imgJoshB = $('<img>');
     var nameJoshB = $('<p>');
     var imgUrlJB = "https://media.giphy.com/media/26FPJPwJgDVbvLeRq/giphy.gif"           
     imgJoshB.attr("src",imgUrlJB);
     nameJoshB.html('Melanie West');
     
     $('#Josh_Bedilio').append(imgJoshB);
     $('#Josh_Bedilio').append(nameJoshB);
     
});