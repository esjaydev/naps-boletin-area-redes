let inputDepto = document.getElementById('input-depto');
let inputMes = document.getElementById('input-mes');
let inputUbicacion = document.getElementById('input-ubicacion');
let btnActualizar = document.getElementById('btn-forzar-act');

let displayDepto = document.getElementById('depto');
let displayMes = document.getElementById('mes');
let displayUbicacion = document.getElementById('ubicacion');
let displayDeptoFooter = document.getElementById('depto-footer');

inputDepto.addEventListener('input', function escribirDepto() {
    displayDepto.innerHTML = inputDepto.value;
    displayDeptoFooter.innerHTML = inputDepto.value;
});
inputMes.addEventListener('input', function escribirMes() {
    displayMes.innerHTML = inputMes.value;
});
inputUbicacion.addEventListener('input', function escribirUbicacion() {
    displayUbicacion.innerHTML = inputUbicacion.value;
});

const stringElemScr = ".area-boletin"

function copiarString() {
    navigator.clipboard.writeText(stringElemScr);
    alert('Pega el texto copiado en la extensión "DOM Capture" y da click en "Save as image" 👉');
}

function convertirTexto() {
    var input = document.getElementById('input-lista');
    var lista = document.getElementById('lista');

    // Se limpia la lista antes de añadir nuevos elementos
    lista.innerHTML = '';

    // Obtiene el texto ingresado por el usuario
    var texto = input.value;

    // Divide el texto en líneas
    var lineas = texto.split('\n');

    // Crea un elemento <li> por cada línea y se agrega a la lista
    lineas.forEach(function (linea) {
        if (linea.trim() !== '') {
            var li = document.createElement('li');
            li.textContent = linea;
            lista.appendChild(li);
        }
    });
}