$(document).ready(function(){
    
     var imgMaksym = $('<img>');
     var nameMaksym = $('<p>');
     var imgUrlMaks = "https://media.giphy.com/media/OK27wINdQS5YQ/giphy.gif";
     //var imgUrlMaks = "https://media.giphy.com/media/5aLrlDiJPMPFS/giphy.gif";
     imgMaksym.attr("src",imgUrlMaks);
     nameMaksym.html('Maksym Filippov');
     
     $('#Maksym_Filippov').append(imgMaksym);
     $('#Maksym_Filippov').append(nameMaksym);
    //  $('#open').append(imgMaksym);
    //  $('#open').append(nameMaksym);
     
});