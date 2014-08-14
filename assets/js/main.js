if (Math.round(Math.random())) {
  $("body").addClass("dark");
}

if ($(window).width() > 768) {
  $(document).on("mousemove", function(e) {
    var x = e.pageX * -1 / 100
        y = e.pageY * -1 / 100;

    $(".hero-image").css("-webkit-transform", "translate3d("+x+"px, "+y+"px, 0px)");
  });
}
