$(document).ready(function(){
  $("#vert-menu-click").click(function() {
    if($('.nav-bar-vert').css('display') == 'none') {
        $(".nav-bar-vert").css("display", "block");
      } else {
          $(".nav-bar-vert").css("display", "none");
      }


  });
  $(".fifth img").hover(function() {

    $(".fifth2 img").fadeTo(400, .5);
    $(".fifth2-overlay").css("display", "block");
}, function() {

    $(".fifth2 img").fadeTo(400,1);
    $(".fifth2-overlay").css("display", "none");
  });

});
