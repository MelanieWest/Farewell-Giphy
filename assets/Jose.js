$(document).ready(function(){
           
            var imgMelanie = $('<img>');
            var nameMelanie = $('<p>');
            var imgUrlMel = "https://tenor.com/view/method-man-soul-plane-sliding-in-sliding-in-the-dms-gif-5595353"           
            imgMelanie.attr("src",imgUrlMel);
            nameMelanie.html('Melanie West');
            
            $('#Melanie_West').append(imgMelanie);
            $('#Melanie_West').append(nameMelanie);
            
});
