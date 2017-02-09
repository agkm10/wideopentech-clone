$(document).ready(function(){
  $("#vert-menu-click").click(function() {
    if($('.nav-bar-vert').css('display') == 'none') {
        $(".nav-bar-vert").css("display", "block");
      } else {
          $(".nav-bar-vert").css("display", "none");
      }


  });

});
