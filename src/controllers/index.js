import { listaC } from "./dependencies.js";

document.getElementById("agregar").addEventListener("click", agregarContacto);
document.getElementById("mostrar").addEventListener("click", mostrarContacto);

function agregarContacto() {
    const visualizar = document.getElementById("visualizar");
    const card = document.createElement("div");

    const name = document.createElement("p");
    name.setAttribute("id", "idp")
    name.innerText = "Nombre: ";
    const contactonombre = document.createElement("input");
    contactonombre.setAttribute("id", "id1")
    name.appendChild(contactonombre)
    card.appendChild(name);

    const telefono = document.createElement("p");
    telefono.setAttribute("id", "idp")
    telefono.innerText = "Telefono: ";
    const  contactonumero = document.createElement("input");
    contactonumero.setAttribute("id", "id1")
    telefono.appendChild(contactonumero)
    card.appendChild(telefono)

    const divguardar = document.createElement("div")
    divguardar.setAttribute("id", "btnguardar")
    const guardar = document.createElement("button");
    guardar.innerText = "Guardar";
    divguardar.appendChild(guardar)
    card.appendChild(divguardar)

    guardar.addEventListener("click", () => {
        const nombre = contactonombre.value;
        const numero = contactonumero.value;
        listaC.addContacto(nombre, numero);
    });

    visualizar.appendChild(card);
}

function mostrarContacto() {
    const divMostrarContacto2 = document.getElementById("mostrarc2");
    divMostrarContacto2.innerHTML = '';

    if (listaC.comprobacion() > 0) {
        let comprobacion = listaC.getContacto();

        do {
            const card = document.createElement("div");
            divMostrarContacto2.appendChild(card);

            const h2 = document.createElement("h2");
            h2.setAttribute("id", "h2")
            h2.innerText = "CONTACTO";
            card.appendChild(h2);

            const nombrep = document.createElement("p")
            nombrep.setAttribute("id", "nombrep")
            nombrep.innerText="NOMBRE: "
            const nombre = document.createElement("span");
            nombre.innerText = comprobacion.getNombre();
            nombrep.appendChild(nombre)
            card.appendChild(nombrep)
            
            const numerop = document.createElement("p")
            numerop.setAttribute("id", "numerop")
            numerop.innerText="NUMERO: "
            const numero = document.createElement("span");
            numero.innerText = comprobacion.getTelefono();
            numerop.appendChild(numero)
            card.appendChild(numerop)
            
            listaC.deleteContacto();
            comprobacion = listaC.getContacto();
        } while (comprobacion);
    } 
}
