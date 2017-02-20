// I understand what needs to happen with this project, I just have a blockage when it comes to translating it to code language. I know this is completely broken code, but it's all I could come up with. 


var colorArray = ["red", "yellow", "green", "blue"];
var totalRed = "";
var totalYellow = "";
var totalGreen = "";
var totalBlue = "";

$(document).ready(function(){

});


}


function clickRed(){
  $(('.color-button').data('red')).on('click', function(){
    $('#container').append('.red');
    totalRed++;

  });
}

function clickYellow(){
  $(('.color-button').data('yellow')).on('click', function(){
    $('#container').append('.yellow');
    totalYellow++;

  });
}

function clickGreen(){
  $(('.color-button').data('green')).on('click', function(){
    $('#container').append('.green');
    totalGreen++;

  });
}

function clickBlue(){
  $(('.color-button').data('blue')).on('click', function(){
    $('#container').append('.blue');
    totalBlue++;
  });
}
