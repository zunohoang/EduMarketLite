document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.course-item-container');
    const prevBtn = document.querySelector('.prev-button');
    const nextBtn = document.querySelector('.next-button');
    const items = document.querySelectorAll('.course-item');
    
    let currentPosition = 0;
    const itemWidth = items[0].offsetWidth + 45; 
    const maxPosition = -(items.length - Math.floor(slider.offsetWidth / itemWidth)) * itemWidth;

    function updateSliderPosition() {
        slider.style.transform = `translateX(${currentPosition}px)`;
        
        prevBtn.style.opacity = currentPosition === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentPosition <= maxPosition ? '0.5' : '1';
    }

    prevBtn.addEventListener('click', () => {
        if (currentPosition < 0) {
            currentPosition += itemWidth;
            if (currentPosition > 0) currentPosition = 0;
            updateSliderPosition();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPosition > maxPosition) {
            currentPosition -= itemWidth;
            if (currentPosition < maxPosition) currentPosition = maxPosition;
            updateSliderPosition();
        }
    });

    updateSliderPosition();

    window.addEventListener('resize', () => {
        const newMaxPosition = -(items.length - Math.floor(slider.offsetWidth / itemWidth)) * itemWidth;
        if (currentPosition < newMaxPosition) {
            currentPosition = newMaxPosition;
            updateSliderPosition();
        }
        maxPosition = newMaxPosition;
    });
});