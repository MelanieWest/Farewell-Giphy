$(document).ready(function(){
           
            var imgJason = $('<img>');
            var nameJason = $('<p>');
            var imgUrlJas = "http://media0.giphy.com/media/lvTTqbsEwlb8c/giphy.gif"           
            imgJason.attr("src",imgUrlJas);
            nameJason.html('Jason Navarro');
            
            $('#Jason_Navarro').append(imgJason);
            $('#Jason_Navarro').append(nameJason);
            
});
