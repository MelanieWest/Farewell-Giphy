$(document).ready(function(){
    
     var imgFran = $('<img>');
     var nameFran = $('<p>');
    // https://media.giphy.com/media/Hl1PqpoxTVGdG/giphy.gif
     var imgUrlMel = "https://media.giphy.com/media/4Q0sAvf7RRT8I/giphy.gif"           
     //var imgUrlMel = "https://media.giphy.com/media/g9582DNuQppxC/giphy.gif"
     imgFran.attr("src",imgUrlMel);
     nameFran.html('Francisco Carrera');
     
     $('Francisco_Carrera').append(imgFran);
     $('Francisco_Carrera').append(nameFran);
     
});
