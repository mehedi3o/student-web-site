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


// side menu


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function colsemenu(){
    sidemenu.style.right = "-200px";
}

