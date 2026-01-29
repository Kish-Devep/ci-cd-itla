
function saludar(nombre = "Mundo") {
    return `Hola, ${nombre}!`;
}

function mostrarMensaje() {
    const mensaje = saludar();
    console.log("=".repeat(40));
    console.log(mensaje);
    console.log("=".repeat(40));
    console.log("Sistema: GitHub Actions CI/CD");
    console.log("Notificaciones: ntfy.sh/devops-itla");
    console.log("Estado: Ejecutando correctamente");
    console.log("=".repeat(40));
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = { saludar, mostrarMensaje };
}


if (require.main === module) {
    mostrarMensaje();
}
