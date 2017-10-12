$(document).ready(function(){
    
     var imgFW = $('<img>');
     var nameFW = $('<p>');
     var imgUrlFW = "https://media.giphy.com/media/m3w6FWpmjvwZ2/giphy.gif"           
     imgFW.attr("src",imgUrlFW);
     nameFW.html('Enjoy Boston!');
     
     $('#Farewell').append(imgFW);
     $('#Farewell').append(nameFW);
     
});