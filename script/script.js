// function switchLanguage(lang) {
//     document.querySelectorAll("[data-" + lang + "]").forEach(el => {
//         el.textContent = el.getAttribute("data-" + lang);
//     });
// }

// // Set initial language to English
// switchLanguage('en');


let currentLanguage = 'en';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    switchLanguage(currentLanguage);
    document.querySelector(".language-switcher button").textContent = currentLanguage === 'en' ? 'English' : 'العربية';
}

function switchLanguage(lang) {
    document.querySelectorAll("[data-" + lang + "]").forEach(el => {
        el.textContent = el.getAttribute("data-" + lang);
    });
}

// Initialize with English as the default
switchLanguage('en');




// faq-answer
 // JavaScript for Accordion Toggle
 document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const isActive = header.classList.contains('active');
        document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));
        document.querySelectorAll('.accordion-body').forEach(body => body.style.display = 'none');
        if (!isActive) {
            header.classList.add('active');
            header.nextElementSibling.style.display = 'block';
        }
    });
});




// content function
// Function to animate the progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar .progress');
    const progressSpans = document.querySelectorAll('.progress-bar span');

    progressBars.forEach((bar, index) => {
        const targetWidth = bar.style.width;
        const targetPercentage = parseInt(targetWidth); // Get the percentage value from the inline style
        let currentWidth = 0;

        // Animate the progress bar
        const interval = setInterval(() => {
            if (currentWidth < targetPercentage) {
                currentWidth++;
                bar.style.width = currentWidth + '%'; // Update the width of the progress bar
                progressSpans[index].textContent = currentWidth + '%'; // Update the span text to reflect the progress
            } else {
                clearInterval(interval);
            }
        }, 20); // Adjust the interval for the animation speed
    });
}

// Add an event listener to trigger the progress animation on click
document.querySelector('.cont-about').addEventListener('click', animateProgressBars);
















// side menu


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function colsemenu(){
    sidemenu.style.right = "-200px";
}

