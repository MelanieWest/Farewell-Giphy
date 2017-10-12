$(document).ready(function(){
           
            var imgMelanie = $('<img>');
            var nameMelanie = $('<p>');
            var imgUrlMel = "https://media.giphy.com/media/26FPJPwJgDVbvLeRq/giphy.gif"           
            imgMelanie.attr("src",imgUrlMel);
            nameMelanie.html('Melanie West');
            
            $('#Melanie_West').append(imgMelanie);
            $('#Melanie_West').append(nameMelanie);
            
});