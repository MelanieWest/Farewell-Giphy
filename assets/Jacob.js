$(document).ready(function(){
    
     var imgJacob = $('<img>');
     var nameJacob = $('<p>');
     var imgUrlJacob = "https://media1.giphy.com/media/xTiN0rLn7VsALtsjDO/giphy.gif"
     imgJacob.attr("src",imgUrlJacob);
     nameJacob.html('Jacob Coe');
     
     $('#Jacob_Coe').append(imgJacob);
     $('#Jacob_Coe').append(nameJacob);
     
});