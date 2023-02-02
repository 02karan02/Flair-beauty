
$(window).on('resize',function(){location.reload();});  
var sliderActive = false;
var slider;
function createSlider() {
slider = jQuery('.if-slider').bxSlider({
adaptiveHeight: false,
swipeThreshold: 40,
controls: true,
auto: true,
pause: 6000,
autoHover: true,
});
return true;
}
//create slider if page is not wide
jQuery(document).ready(function(){
if (window.innerWidth < 600) {
sliderActive = createSlider();
}
});
//create/destroy slider based on width
jQuery(window).resize(function () {
//if narrow and no slider, create slider 
if (window.innerWidth < 600 && sliderActive == false ) {
sliderActive = createSlider();
}
//else if wide and active slider, destroy slider 
else if (window.innerWidth > 600 && sliderActive == true){
slider.destroySlider();
sliderActive = false;
}
//else if wide and active slider, or narrow and no slider, do nothing
});