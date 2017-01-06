$(document).ready(function(){
  for (var x = 0; x < 16; x++){
    for (var y = 0; y < 16; y++){
      $("<div>").addClass("cell").appendTo("#container");
    }
  }

  $(".cell").hover(function(){
    $(this).css("background","#000");
  });

});
