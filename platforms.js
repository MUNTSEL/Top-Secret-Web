// Functie om de kleur van de menubalk aan te passen
function applyNavbarColor() {
    const color = document.getElementById('navbar-color').value;
    document.querySelector('header').style.backgroundColor = color;
    localStorage.setItem('navbarColor', color);  // Kleur opslaan in localStorage
}

// Functie om het lettertype aan te passen
function applyFontFamily() {
    const fontFamily = document.getElementById('font-family').value;
    document.body.style.fontFamily = fontFamily;
    localStorage.setItem('fontFamily', fontFamily);  // Lettertype opslaan in localStorage
}

// Functie om het thema (licht/donker) aan te passen
function applyTheme() {
    const theme = document.querySelector('input[name="theme"]:checked').value;
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = '#f0f4f8';
        document.body.style.color = '#333';
    }
    localStorage.setItem('theme', theme);  // Thema opslaan in localStorage
}

// Functie om de instellingen te resetten naar standaard
function resetSettings() {
    localStorage.removeItem('navbarColor');
    localStorage.removeItem('fontFamily');
    localStorage.removeItem('theme');
    location.reload();  // Pagina herladen om de reset door te voeren
}

// Functie om opgeslagen instellingen toe te passen bij het laden van de pagina
window.onload = function() {
    const savedNavbarColor = localStorage.getItem('navbarColor');
    const savedFontFamily = localStorage.getItem('fontFamily');
    const savedTheme = localStorage.getItem('theme');

    // Kleur van de menubalk toepassen
    if (savedNavbarColor) {
        document.querySelector('header').style.backgroundColor = savedNavbarColor;
        document.getElementById('navbar-color').value = savedNavbarColor;  // Toon opgeslagen kleur in de kleurkiezer
    }

    // Lettertype toepassen
    if (savedFontFamily) {
        document.body.style.fontFamily = savedFontFamily;
        document.getElementById('font-family').value = savedFontFamily;  // Toon opgeslagen lettertype in de dropdown
    }

    // Thema toepassen
    if (savedTheme) {
        if (savedTheme === 'dark') {
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#fff';
            document.querySelector('input[value="dark"]').checked = true;
        } else {
            document.body.style.backgroundColor = '#f0f4f8';
            document.body.style.color = '#333';
            document.querySelector('input[value="light"]').checked = true;
        }
    }
}
