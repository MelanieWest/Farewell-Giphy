$(document).ready(function(){
           
            var imgTara = $('<img>');
            var nameTara = $('<p>');
            var imgUrlTN = "https://media.giphy.com/media/VelWewgR6CpNK/giphy.gif"           
            imgTara.attr("src",imgUrlTN);
            nameTara.html('Tara Nelson');
            
            $('#Tara_Nelson').append(imgTara);
            $('#Tara_Nelson').append(nameTara);
            
});
