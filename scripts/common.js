$(document).ready(function(){
  for (var x = 0; x < 16; x++){
    for (var y = 0; y < 16; y++){
      $("<div>").addClass("cell").appendTo("#container");
    }
  }
  // =========================CHANGE BG WHEN HOVERED======================
  $(".cell").hover(function(){
    var currentOpacity = $(this).css("opacity")
    $(this).css("opacity", +currentOpacity + 0.2);
  });
  // =========================BUTTON OF TITANS============================
  $( "#reset" ).click(function(){
    $(".cell").css("opacity","0.1");
  });

});
