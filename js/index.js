$(document).ready(function(){
  $("#vert-menu-click").click(function() {
    if($('.nav-bar-vert').css('display') == 'none') {
        $(".nav-bar-vert").css("display", "block");
      } else {
          $(".nav-bar-vert").css("display", "none");
      }


  });
  $(".fifth2").hover(function() {
    $(".fadeimg2").fadeTo(400, 0.5);
    $(".fifth2-overlay").css("display", "flex");
}, function() {
    $(".fadeimg2").fadeTo(400,1);
    $(".fifth2-overlay").css("display", "none");
  });


  $(".fifth3").hover(function() {
    $(".fadeimg3").fadeTo(400, 0.5);
    $(".fifth3-overlay").css("display", "flex");
}, function() {
    $(".fadeimg3").fadeTo(400,1);
    $(".fifth3-overlay").css("display", "none");
  });


  $(".fifth4").hover(function() {
    $(".fadeimg4").fadeTo(400, 0.5);
    $(".fifth4-overlay").css("display", "flex");
}, function() {
    $(".fadeimg4").fadeTo(400,1);
    $(".fifth4-overlay").css("display", "none");
  });


  $(".fifth5").hover(function() {
    $(".fadeimg5").fadeTo(400, 0.5);
    $(".fifth5-overlay").css("display", "flex");
}, function() {
    $(".fadeimg5").fadeTo(400,1);
    $(".fifth5-overlay").css("display", "none");
  });


  $(".fifth6").hover(function() {
    $(".fadeimg6").fadeTo(400, 0.5);
    $(".fifth6-overlay").css("display", "flex");
}, function() {
    $(".fadeimg6").fadeTo(400,1);
    $(".fifth6-overlay").css("display", "none");
  });


  $(".fifth7").hover(function() {
    $(".fadeimg7").fadeTo(400, 0.5);
    $(".fifth7-overlay").css("display", "flex");
}, function() {
    $(".fadeimg7").fadeTo(400,1);
    $(".fifth7-overlay").css("display", "none");
  });

});
