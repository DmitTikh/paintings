const slider = () => {
    const sliderBlock = document.querySelector('.main-slider'),
          sliderItems = sliderBlock.querySelectorAll('.main-slider-item'),
          timer = setInterval(sliderTimer(), 5000);
    
    const hideSliderContent = () => {
        sliderItems.forEach(item=> {
            item.style.display = 'none';
        });
    };

    const showSliderContent = (i=0) => {
        sliderItems[i].style.display ='block';
    };
    hideSliderContent();
    showSliderContent();

    function sliderTimer() {
        
        

    }
};

export default slider;