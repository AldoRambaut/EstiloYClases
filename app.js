// Ejercicio 1
document.querySelector("#cambiarEstilo").addEventListener("click", (event) => {
  event.preventDefault();
  document.body.style.backgroundColor = `lightblue`;
});

// Ejercicio 2
document.querySelector("#alternarClases").addEventListener("click", (event) => {
  event.preventDefault();
  document.body.classList.toggle("text-bg-info");
});

//Ejercicio 3
document.querySelector("#nombre").addEventListener("change", (event) => {
  if (event.target.value == "") {
    event.target.classList.remove("is-valid");
    event.target.classList.remove("is-invalid");
  } else if (
    /^[a-záéíóúñüA-ZÁÉÍÓÚÑÜ]+(?:\s+[a-záéíóúñüA-ZÁÉÍÓÚÑÜ]+)*$/u.test(
      event.target.value
    )
  ) {
    event.target.classList.add("is-valid");
    event.target.classList.remove("is-invalid");
  } else {
    event.target.classList.add("is-invalid");
    event.target.classList.remove("is-valid");
  }
});

document.querySelector("#edad").addEventListener("change", (event) => {
  if (event.target.value == "") {
    event.target.classList.remove("is-valid");
    event.target.classList.remove("is-invalid");
  } else if (/^[1-9][0-9]?$|^120$/.test(event.target.value)) {
    event.target.classList.add("is-valid");
    event.target.classList.remove("is-invalid");
  } else {
    event.target.classList.add("is-invalid");
    event.target.classList.remove("is-valid");
  }
});

// Ejercicio 4
let indice = 0;
const imgPrincipal = document.querySelector(".imgPrincipal");
const imgGaleria = document.querySelectorAll(".imgGaleria");
imgPrincipal.addEventListener('load', event => {
    imgGaleria.forEach((element) => {
        element.classList.remove('border');
        element.classList.remove('border-5');
        element.classList.remove('border-primary');
    });
    imgGaleria.forEach((element) => {
        if (element.src == event.target.src) {
            element.classList.add('border');
        element.classList.add('border-5');
        element.classList.add('border-primary');
        }
    });
});

imgGaleria.forEach((element, indiceClick) => {
  element.addEventListener("click", (event) => {
    imgPrincipal.src = event.target.src;
    indice = indiceClick;
  });
});

document.querySelector('#anterior').addEventListener('click', (event) => {
    imgPrincipal.src = imgGaleria[(--indice + imgGaleria.length)%imgGaleria.length].src;
});

document.querySelector('#siguiente').addEventListener('click', (event) => {
    imgPrincipal.src = imgGaleria[(++indice + imgGaleria.length)%imgGaleria.length].src;
});

// Ejercicio 5
const listaPais = document.querySelector('#pais');
const listaCiudad = document.querySelector('#ciudad');
const ciudades1 = ['Ciudad1', 'ciudad2', 'ciudad3'];
const ciudades2 = ['ciudad4', 'ciudad5', 'ciudad6'];
const ciudades3 = ['ciudad7', 'ciudad8', 'ciudad9'];
const limpiarLista = () => {
  while (listaCiudad.firstElementChild) {
    listaCiudad.removeChild(listaCiudad.firstChild);
  }
}
listaPais.addEventListener('change', (event) => {
  limpiarLista();
   if (event.target.value == 'pais1'){
    ciudades1.forEach((element) => {
      const opcion = document.createElement('option');
      opcion.value = element.toLowerCase().trim();
      opcion.textContent = element.charAt(0).toUpperCase() + element.slice(1);
      listaCiudad.appendChild(opcion);
    });
   } else if (event.target.value == 'pais2'){
    limpiarLista();
    ciudades2.forEach((element) => {
      const opcion = document.createElement('option');
      opcion.value = element.toLowerCase().trim();
      opcion.textContent = element.charAt(0).toUpperCase() + element.slice(1);
      listaCiudad.appendChild(opcion);
    });
   } else if (event.target.value == 'pais3'){
    limpiarLista();
    ciudades3.forEach((element) => {
      const opcion = document.createElement('option');
      opcion.value = element.toLowerCase().trim();
      opcion.textContent = element.charAt(0).toUpperCase() + element.slice(1);
      listaCiudad.appendChild(opcion);
    });
   } 
});

// Ejercicio 6
const menuNavegacion = document.querySelector('.nav');
if (window.innerWidth <= 500){
  menuNavegacion.classList.add('flex-column');
} else {
  menuNavegacion.classList.remove('flex-column');
}
window.addEventListener('resize', () => {
  const anchoVentana = window.innerWidth;
  if ( anchoVentana <= 500){
    menuNavegacion.classList.add('flex-column');
  } else {
    menuNavegacion.classList.remove('flex-column');
  }
});

// Ejercicio 7
const preguntas = document.querySelector('#preguntas');
document.querySelector('#ocultarPreguntas').addEventListener('click', event => {
  event.preventDefault();
  preguntas.classList.toggle('d-none');
});

// Ejercicio 8
let progreso = 0;
const barraProgreso = document.querySelector('.progress-bar');
let interval;

document.querySelector('#cargar').addEventListener('click', event => {
  event.preventDefault();
  interval = setInterval(() => {
    if (progreso < 100) {
      progreso++;
    barraProgreso.style.width = `${progreso}%`;
    barraProgreso.textContent = `${progreso}%`;  
    } else {
      clearInterval(interval);
    }
  }, 50);
  
});
document.querySelector('#reiniciar').addEventListener('click', event => {
  event.preventDefault();
  progreso = 0;
  barraProgreso.style.width = `${0}%`;
  barraProgreso.textContent = `${0}%`;
  clearInterval(interval);
});

document.querySelector('#detener').addEventListener('click', event => {
  clearInterval(interval);
});

// Ejercicio 9
let posicionInicio;
let posicionFin;
let aux;
const lista = document.querySelector('#listaArrastrar');
lista.addEventListener('dragstart', event => {
  posicionInicio = event.target;
});
lista.addEventListener('dragover', event => {
  event.preventDefault();
});
lista.addEventListener('drop', event => {
  posicionFin = event.target;
  aux = posicionInicio.textContent;
  posicionInicio.textContent = posicionFin.textContent;
  posicionFin.textContent = aux;
});

// Ejercicio 10
document.querySelector('#cambioTema').addEventListener('input', event => {
  document.body.className =`${event.target.value}`;
});