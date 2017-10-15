$(document).ready(function(){
    
    var wybo = $('<img>');
     var nameWybo = $('<h3>');
     var imgUrlWybo = "https://media.giphy.com/media/QhvVvleEIGHEQ/giphy.gif"          
     wybo.attr("src",imgUrlWybo);
     nameWybo.html('Andrew Wybo');
    
     $('#Andrew_Wybo').append(wybo);
     $('#Andrew_Wybo').append(nameWybo);
     
});
