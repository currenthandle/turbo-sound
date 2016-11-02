var d = document;

var thumnailWrapper = d.querySelector('.thumbnail-wrapper');
var thumbnails = d.querySelectorAll('.thumbnail'); 
var tWidth = thumbnails[0].width; 

var mainImg = d.querySelector('.main-img');
for(var i = 0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener('click', function(e) {
        mainImg.src = e.target.src;
    });
}


var left = d.querySelector('.left-arw');
var right = d.querySelector('.right-arw');

left.addEventListener('click', function(e) {
    var iterations = 0;
    var interval = setInterval(function() {
        if(iterations > 50) clearInterval(interval);
        thumnailWrapper.scrollLeft -= tWidth/50;
        iterations++
    }, 2);
});

right.addEventListener('click', function(e) {
    var iterations = 0;
    var interval = setInterval(function() {
        if(iterations > 50) clearInterval(interval);
        thumnailWrapper.scrollLeft += tWidth/50;
        iterations++
    }, 2);
});


