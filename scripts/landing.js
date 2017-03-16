var animatePoints = function() {

     var points = document.getElementsByClassName('point');

     var revealPoints = function(all) {
         points[all].style.opacity = 1;
         points[all].style.transform = "scaleX(1) translateY(0)";
         points[all].style.msTransform = "scaleX(1) translateY(0)";
         points[all].style.WebkitTransform = "scaleX(1) translateY(0)";
     };
    
     for(var i =0; i<points.length;i++)
     revealPoints(i);
 };