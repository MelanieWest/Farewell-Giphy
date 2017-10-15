$(document).ready(function(){
    
     var imgJoshB = $('<img>');
     var nameJoshB = $('<p>');
     var imgUrlJB = "https://media.giphy.com/media/3o7TKNkzG2YLWPpYBO/giphy.gif"           
     imgJoshB.attr("src",imgUrlJB);
     nameJoshB.html('Josh Bedilio');
     
     $('#Josh_Bedilio').append(imgJoshB);
     $('#Josh_Bedilio').append(nameJoshB);
     
});