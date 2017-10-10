$(document).ready(function(){
    
     var imgJodi = $('<img>');
     var nameJodi = $('<p>');
     var imgUrlJodi = "https://media.giphy.com/media/10AoZDUmPrhguQ/giphy.gif"
     imgJodi.attr("src",imgUrlJodi);
     nameJodi.html('Jodi Diehl');
     
     $('#Jodi_Diehl').append(imgJodi);
     $('#Jodi_Diehl').append(nameJodi);
     
});