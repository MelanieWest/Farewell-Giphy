$(document).ready(function(){
           
            var imgMelanie = $('<img>');
            var nameMelanie = $('<p>');
           // https://media.giphy.com/media/Hl1PqpoxTVGdG/giphy.gif
            var imgUrlMel = "https://media.giphy.com/media/Hl1PqpoxTVGdG/giphy.gif"           
            //var imgUrlMel = "https://media.giphy.com/media/g9582DNuQppxC/giphy.gif"
            imgMelanie.attr("src",imgUrlMel);
            nameMelanie.html('Melanie West');
            
            $('#Melanie_West').append(imgMelanie);
            $('#Melanie_West').append(nameMelanie);
            
});