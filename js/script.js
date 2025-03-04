function toggleDisplay(unitId, infoId) {
    var info = document.getElementById(infoId);
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
    return false; // Evita que el enlace realice la acción predeterminada de navegación.
}

//Unidad 1-----
document.getElementById("Unidad-u1t").onclick = function() {
    return toggleDisplay("Unidad-u1t", "info-u1t");
};

document.getElementById("Unidad-u1p").onclick = function() {
    return toggleDisplay("Unidad-u1p", "info-u1p");
};

document.getElementById("Unidad-u1pr").onclick = function() {
    return toggleDisplay("Unidad-u1pr", "info-u1pr");
};

//Unidad 2-----
document.getElementById("Unidad-u2t").onclick = function() {
    return toggleDisplay("Unidad-u2t", "info-u2t");
};

document.getElementById("Unidad-u2p").onclick = function() {
    return toggleDisplay("Unidad-u2p", "info-u2p");
};

document.getElementById("Unidad-u2pr").onclick = function() {
    return toggleDisplay("Unidad-u2pr", "info-u2pr");
};

//Unidad 3-----
document.getElementById("Unidad-u3t").onclick = function() {
    return toggleDisplay("Unidad-u3t", "info-u3t");
};

document.getElementById("Unidad-u3p").onclick = function() {
    return toggleDisplay("Unidad-u3p", "info-u3p");
};

document.getElementById("Unidad-u3pr").onclick = function() {
    return toggleDisplay("Unidad-u3pr", "info-u3pr");
};