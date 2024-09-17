// Simpele login functie
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Dhr. Michel Van Damme" && password === "AZERTYazerty.MijnKatIsDom.14") {
        alert("Succesvol ingelogd!");
        window.location.href = "ingelogdHome.html"; // Verwijst naar de ingelogde homepagina
    } else {
        alert("Foutieve inloggegevens, probeer opnieuw.");
    }
}

// Verberg het menu tot er is ingelogd
window.onload = function() {
    var loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn !== "true") {
        document.getElementById("main-content").classList.add("hidden");
        alert("Je moet eerst inloggen!");
    } else {
        document.getElementById("main-content").classList.remove("hidden");
    }
};
