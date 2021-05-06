const contenedor = document.getElementById('contenedor');
const boton = document.getElementById('boton');
const texto = document.getElementById('inputText');
const imagen = document.getElementById('imagenURL');

function accion(){
    const div = document.createElement('div');
    const p = document.createElement('p');
    const img = document.createElement('img');
    imagen.src = imagen.value
    contenedor.appendChild(div);
    div.appendChild(p);
    div.appendChild(img);
    p.textContent = texto.value;
    img.src = imagen.value;
}
