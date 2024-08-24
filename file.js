document.addEventListener('DOMContentLoaded', function() {
    // Add a delay to allow the text fade out effect to run
    setTimeout(function() {
        // Add the drop class after the text animations are done
        document.getElementById('curtain-overlay').classList.add('drop');
    }, 3000); // Adjust timing to match the text animation duration
});


// Function to scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/hide the scroll-to-top button
window.addEventListener('scroll', function() {
    const button = document.getElementById('scroll-to-top');
    if (window.scrollY > 200) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

// Toggle the menu when the menu button is clicked
document.querySelector('.menu-button').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close the menu when clicking outside of it
document.addEventListener('click', function(event) {
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('.nav-links');

    // Check if the click was outside the menu button and menu
    if (!menuButton.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

 

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Clone the first slide and append it to the end
const firstSlideClone = slides[0].cloneNode(true);
document.querySelector('.slider').appendChild(firstSlideClone);

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});



const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transition = 'transform 0.5s ease-in-out';
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    // Reset to first slide without transition after reaching the clone
    if (currentIndex === totalSlides) {
        setTimeout(() => {
            slides.forEach((slide) => {
                slide.style.transition = 'none';
                slide.style.transform = `translateX(0%)`;
            });
            currentIndex = 0;
        }, 500); // Match this timing with your CSS transition duration
    }
};

const updateSliderHeight = () => {
    const currentSlide = slides[currentIndex];
    const slideHeight = currentSlide.clientHeight;
    document.querySelector('.slider-container').style.height = `${slideHeight}px`;
};

const nextSlide = () => {
    if (currentIndex < totalSlides) {
        currentIndex++;
    }
    slideImage();
    updateSliderHeight(); // Adjust height after sliding
};

const prevSlide = () => {
    if (currentIndex > 0) {
        currentIndex--;
    }
    slideImage();
    updateSliderHeight(); // Adjust height after sliding
};

    // Reset to first slide without transition after reaching the clone
    if (currentIndex === totalSlides) {
        setTimeout(() => {
            slides.forEach((slide) => {
                slide.style.transition = 'none';
                slide.style.transform = `translateX(0%)`;
            });
            currentIndex = 0;
            updateSliderHeight(); // Adjust height after reset
        }, 500); // Match this timing with your CSS transition duration
    }


// Initialize height on page load
updateSliderHeight();

// Automatically move to the next slide every 8 seconds
setInterval(nextSlide, 8000); // Slide every 8 seconds

