import { cola } from "../controllers/dependencies.js";
import { Contacto } from "./Contacto.js";
export class Lista{

    addContacto(nombre,numero){
        let contacto = new Contacto()

        contacto.setNombre(nombre)
        contacto.setTelefono(numero)
        let nuevoContacto = contacto
        cola.enqueue(nuevoContacto)
    }
    getContacto(){
        let objcontacto = cola.peek()
        return objcontacto
        }
    deleteContacto(){
        let objcontacto=cola.dequeue()
        cola.enqueue(objcontacto)

    }
    comprobacion(){
        return cola.size()
    }
}