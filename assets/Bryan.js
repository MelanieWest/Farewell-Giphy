
$(document).ready(function(){
    
     var imgBryan = $('<img>');
     var nameBryan = $('<h3>');
     var imgUrlBryan = "https://media.giphy.com/media/26FPImXfDlv4AFbBC/giphy.gif"           
     imgBryan.attr("src",imgUrlBryan);
     nameBryan.html('Bryan Porras');
     
     $('#Bryan_Porras').append(imgBryan);
     $('#Bryan_Porras').append(nameBryan);
     
});
