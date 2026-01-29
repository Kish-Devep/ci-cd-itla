// Función principal del programa Hola Mundo
function saludar(nombre = "Mundo") {
    return `Hola, ${nombre}!`;
}

function generarSalida() {
    const separador = "=".repeat(40);
    const mensaje = saludar();
    
    const salida = `${separador}
${mensaje}
${separador}
Sistema: GitHub Actions CI/CD
Notificaciones: ntfy.sh/devops-itla
Estado: Ejecutando correctamente
${separador}`;
    
    return salida;
}

function mostrarEnConsola(texto) {
    const outputDiv = document.getElementById('output');
    const timestamp = new Date().toLocaleTimeString();
    const mensajeConTimestamp = `[${timestamp}]\n${texto}\n\n`;
    
    outputDiv.textContent += mensajeConTimestamp;
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

function limpiarConsola() {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = '';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const ejecutarBtn = document.getElementById('ejecutar-btn');
    const limpiarBtn = document.getElementById('limpiar-btn');
    
    ejecutarBtn.addEventListener('click', function() {
        const salida = generarSalida();
        mostrarEnConsola(salida);
    });
    
    limpiarBtn.addEventListener('click', function() {
        limpiarConsola();
    });
    
    // Ejecutar automáticamente al cargar la página
    const salida = generarSalida();
    mostrarEnConsola(salida);
});
