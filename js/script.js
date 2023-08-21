document.addEventListener("DOMContentLoaded", function() {
    const suscribirBtn = document.getElementById("suscribir-btn");
    const ventanaEmergente = document.getElementById("ventanaEmergente");

    suscribirBtn.addEventListener("click", function() {
        
        ventanaEmergente.style.display = "block";
      setTimeout(function() {
            ventanaEmergente.style.display = "none";
        }, 3000);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el contador de visitas del almacenamiento local (si existe)
    let visitas = localStorage.getItem("contador-visitas");

    // Si no hay contador de visitas en el almacenamiento local, inicializarlo a 0
    if (visitas === null) {
        visitas = 0;
    } else {
        // Convertir el valor almacenado en un número
        visitas = parseInt(visitas);
    }

    // Incrementar el contador de visitas
    visitas++;

    // Actualizar el contador de visitas en la página
    const contadorVisitas = document.getElementById("contador-visitas");
    contadorVisitas.textContent = visitas === 1 ? "1 visita" : visitas + " visitas";

    // Almacenar el nuevo valor del contador de visitas en el almacenamiento local
    localStorage.setItem("contador-visitas", visitas.toString());
});