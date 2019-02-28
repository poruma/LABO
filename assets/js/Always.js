var scrollSpeed = 0;
var scrollVelocity = 0;
var scrollPosition = 0;
var prevScrollPosition = 0;
var targetOpacity = 0;
var opacity = 0;



function easingFormula(logarithm) {

  scrollPosition = $(document).scrollTop();
  scrollVelocity = scrollPosition - prevScrollPosition;
  scrollSpeed = Math.abs(scrollVelocity);

  var speed1 = 1;
  var speed2 = 50;
  var opacity1 = 1;
  var opacity2 = 0.1;

  var a = (opacity2 - opacity1) / (speed2 - speed1);
  var b = opacity1 - a * speed1;

  targetOpacity = a * scrollSpeed + b;

  if (targetOpacity > opacity1) {
    targetOpacity = opacity1;
  }

  if (targetOpacity < opacity2) {
    targetOpacity = opacity2;
  }

  opacity += (targetOpacity - opacity) * logarithm;



  prevScrollPosition = scrollPosition;

  return opacity;


}
