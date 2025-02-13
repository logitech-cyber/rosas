function mostrarRosas() {
    let mensaje = document.getElementById("mensaje").value;
    document.getElementById("mensajeMostrado").innerText = mensaje;

    // Ocultar la página de inicio y mostrar el jardín
    document.getElementById("inicio").style.display = "none";
    document.getElementById("rosas-container").style.display = "block";

    generarRosas(10); // Genera 10 rosas
}

function generarRosas(cantidad) {
    const jardin = document.querySelector(".jardin");
    jardin.innerHTML = ""; // Limpiar cualquier rosa anterior

    for (let i = 0; i < cantidad; i++) {
        let rosa = document.createElement("div");
        rosa.classList.add("rosa");

        // Agregar pétalos
        for (let j = 1; j <= 4; j++) {
            let petalo = document.createElement("div");
            petalo.classList.add("petalo", `petalo${j}`);
            rosa.appendChild(petalo);
        }

        // Agregar tallo
        let tallo = document.createElement("div");
        tallo.classList.add("tallo");
        rosa.appendChild(tallo);

        // Agregar hojas
        for (let k = 1; k <= 2; k++) {
            let hoja = document.createElement("div");
            hoja.classList.add("hoja", `hoja${k}`);
            rosa.appendChild(hoja);
        }

        jardin.appendChild(rosa);
    }
}