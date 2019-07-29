
 $('.slider').bxSlider({
    autoControls: true,
    auto: true,
    pager: true,
    mode: 'fade',
    captions: true,
    speed: 1000,
    
});
  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if(!isChrome){
    $('#iframeAudio').remove()
  }
else{
   $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background 
}