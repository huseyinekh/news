$(".header").on("click", ".search-toggle", function (e) {
  var selector = $(this).data("selector");

  $(selector).toggleClass("show").find(".search-input").focus();
  $(this).toggleClass("active");

  e.preventDefault();
});

let sliderItems = $(".slider_item");
let sliderRightBtn = $(".slider_right_tool");
let sliderLeftBtn = $(".slider_left_tool");

let currentSliderNum=0
let sliderCount = sliderItems.length-1;

const toRightSlide=()=>{
  if(currentSliderNum==sliderCount){
    currentSliderNum=0
  }else{
    currentSliderNum=currentSliderNum+1
  }
  sliderItems.fadeOut('slow')
  setTimeout(() => {
    $(sliderItems[currentSliderNum]).fadeIn('slow')
  }, 300);
  
}

sliderRightBtn.click(()=>toRightSlide());

setInterval(()=>toRightSlide(),5000)

sliderLeftBtn.click((e) => {
  if(currentSliderNum==0){
    currentSliderNum=3
  }else{
    currentSliderNum=currentSliderNum-1
  }
  sliderItems.fadeOut('slow')
  setTimeout(() => {
    $(sliderItems[currentSliderNum]).fadeIn('slow')
  }, 300);
});


