import { listaC } from "./dependencies.js";

document.getElementById("agregar").addEventListener("click", agregarContacto);

function agregarContacto() {
    const visualizar = document.getElementById("visualizar");
    const card = document.createElement("div");
    card.setAttribute("id", "divprincipal")

    const name = document.createElement("p");
    name.innerText = "Nombre: ";
    const contactonombre = document.createElement("input");
    name.appendChild(contactonombre)
    card.appendChild(name);

    const telefono = document.createElement("p");
    telefono.innerText = "Telefono: ";
    const  contactonumero = document.createElement("input");
    telefono.appendChild(contactonumero)
    card.appendChild(telefono)

    const divguardar = document.createElement("div")
    const guardar = document.createElement("button");
    guardar.setAttribute("id", "btnguardar")
    guardar.innerText = "Guardar";
    divguardar.appendChild(guardar)
    card.appendChild(divguardar)

    guardar.addEventListener("click", () => {
        const nombre = contactonombre.value;
        const numero = contactonumero.value;
        listaC.addContacto(nombre, numero);
        mostrarContacto(nombre, numero);
        contactonombre.value = '';
        contactonumero.value = '';
    });

    visualizar.appendChild(card);
}

function mostrarContacto(nombre, numero) {
    const divMostrarContacto2 = document.getElementById("mostrarc2");

    const card = document.createElement("div");
    divMostrarContacto2.appendChild(card);

    const nombrep = document.createElement("p")
    nombrep.setAttribute("id", "nombrep");
    nombrep.innerText ="NOMBRE: " + nombre + " "+ "NUMERO: " + numero;
    card.appendChild(nombrep);
    
}
