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















// side menu


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function colsemenu(){
    sidemenu.style.right = "-200px";
}

