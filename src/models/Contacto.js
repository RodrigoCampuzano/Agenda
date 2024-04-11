export class Contacto {
    #nombre
    #numero

    setNombre(nombre){
        this.#nombre = nombre
    }
    getNombre(){
        return this.#nombre
    }
    setTelefono(numero){
        this.#numero = numero
    }
    getTelefono(){
        return this.#numero
    }

}