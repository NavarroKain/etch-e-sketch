// ================********FUNCTIONS*******===========================
// ================CREATING GRID===========================
function gridPrint() {
  for (var x = 0; x < gridSize*gridSize; x++){
    $('<div class="wrap border"><div class="cell"></div></div>').appendTo("#container");
  }
  $(".border").css({
    'width':$('#container').width() / gridSize,
    'height':$('#container').height() / gridSize
  })
};

// ================PAINTING===========================
function paint() {
  $(".cell").mouseenter(function(){
    var currentOpacity = $(this).css("opacity");
    $(this).css("opacity", +currentOpacity + 0.2)
  })
}
// ================ERASING===========================
function eraser() {
	$(".cell").mouseenter(function(){
		$(this).css("opacity", 0.01)
	})
}

// ***************FULL***************
$(document).ready(function(){
  gridSize = 16;

  gridPrint();

  paint();

  // ================ACTIVATE MARKER start===========================
  $("#paint").click(function(){
    paint();
  })
  // ================ACTIVATE MARKER end===========================

  // ================GRID SIZE start===========================
  $("#grid_size").click(function(){
    gridSize = prompt("Lord Inquisitor enter a number from 2-64 to change grid size in a name of Golden Throne", 16);
    $("#container").empty();
    gridPrint();
    paint();
  });
  // ================GRID SIZE end===========================

  // ================RESET start===========================
  $("#reset").click(function(){
    $(".cell").css("opacity", 0.01);
    paint();
  });
  // ================RESET end===========================

  // ================ERASE start===========================
  $("#erase").click(function(){
    eraser();
  });
  // ================ERASE end===========================

  // ================TOGGLE GRID start===========================
  $("#toggle_grid").click(function(){
    $(".wrap").toggleClass("border");
  });
  // ================TOGGLE GRID end===========================

  // ================COLOR CHANGE start===========================
  $(".color").click(function(){
    $(".cell").css("background-color",$(this).css("background-color"));
  });
  // ================COLOR CHANGE end===========================

  // ================MENU START===========================
  var menuTrigger = false;
  $(".sidebar_button").click(function() {
    if(!menuTrigger){
      $(".sidebar").animate({left: "0px"});
      menuTrigger = true;
    }else{
      $(".sidebar").animate({left: "-210px"});
      menuTrigger = false;
    };
  })
  // ================MENU end===========================
});
