$(document).ready(function(){
    
     var imgFran = $('<img>');
     var nameFran = $('<p>');
     var imgUrlFC = "https://media.giphy.com/media/4Q0sAvf7RRT8I/giphy.gif"           
     imgFran.attr("src",imgUrlFC);
     nameFran.html('Francisco Carrera');
     
     $('#Francisco_Carrera').append(imgFran);
     $('#Francisco_Carrera').append(nameFran);
     
});
