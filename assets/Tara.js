$(document).ready(function(){
           
            var imgTara = $('<img>');
            var nameTara = $('<p>');
           // https://media.giphy.com/media/Hl1PqpoxTVGdG/giphy.gif
            var imgUrlMel = "https://media.giphy.com/media/VelWewgR6CpNK/giphy.gif"           
            //var imgUrlMel = "https://media.giphy.com/media/g9582DNuQppxC/giphy.gif"
            imgTara.attr("src",imgUrlMel);
            nameTara.html('Tara Nelson');
            
            $('#Tara_Nelson').append(imgTara);
            $('#Tara_Nelson').append(nameTara);
            
});
