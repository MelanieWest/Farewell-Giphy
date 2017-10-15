$(document).ready(function(){
    
     var imgMaksym = $('<img>');
     var nameMaksym = $('<p>');
     var imgUrlMax = "https://media.giphy.com/media/5aLrlDiJPMPFS/giphy.gif";           
     imgMaksym.attr("src",imgUrlMax);
     nameMaksym.html('Maksym Filippov');
     
     $('#Maksym_Filippov').append(imgMaksym);
     $('#Maksym_Filippov').append(nameMaksym);
     
});