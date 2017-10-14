
$(document).ready(function(){
    
     var imgDion = $('<img>');
     var nameDion = $('<p>');
     var imgUrlDion = "https://media.giphy.com/media/kaBmqpJtdvFqo/giphy.gif"           
     imgDion.attr("src",imgUrlDion);
     nameDion.html('Dion Cavanaugh');
     $('#Dion_Cavanaugh').append(imgDion);
     $('#Dion_Cavanaugh').append(nameDion);
     
});