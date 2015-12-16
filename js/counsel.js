/* =================================
   BACKGROUND IMAGES
=================================== */
$.vegas('slideshow', {
      delay:3000,
      backgrounds:[
        { src:'images/backgrounds/bg1.jpg', fade:1000 },
        { src:'images/backgrounds/bg2.jpg', fade:1000 },
        { src:'images/backgrounds/bg3.jpg', fade:1000 },
        { src:'images/backgrounds/bg4.jpg', fade:1000 }
      ]
});

/* =================================
   LOADER                     
=================================== */
function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// makes sure the whole site is loaded
jQuery(window).load(function() {
  preload([
    'images/backgrounds/bg1.jpg',
    'images/backgrounds/bg2.jpg',
    'images/backgrounds/bg3.jpg',
    'images/backgrounds/bg4.jpg'
  ]);
  // will first fade out the loading animation
	jQuery(".status").fadeOut();
  // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(500).fadeOut("slow");
})

/* =================================
===  Bootstrap Fix              ====
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}
