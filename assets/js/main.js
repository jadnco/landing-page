// Randomize
if (Math.round(Math.random())) {
  $("body").addClass("light");
}

$("body").on("mousemove", function() {
  var x = event.clientX,
      y = event.clientY;

  // Subtract the circle's radius
  $('.blur').css({
    "top": (y-75)+"px",
    "left": (x-75)+"px"
  });
});
