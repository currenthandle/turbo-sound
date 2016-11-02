var d = document;

var thumnailWrapper = d.querySelector('.thumbnail-wrapper');
var thumbnails = d.querySelectorAll('.thumbnail'); 
var tWidth = thumbnails[0].width; 

var left = d.querySelector('.left-arw');
var right = d.querySelector('.right-arw');

left.addEventListener('click', function(e) {
    console.log('left')
    thumnailWrapper.scrollLeft -= tWidth;
});

right.addEventListener('click', function(e) {
    console.log('right')
    thumnailWrapper.scrollLeft += tWidth;
});


