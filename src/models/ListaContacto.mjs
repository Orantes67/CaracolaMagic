import {Contacto} from "./Contacto.mjs"
import { linkedlist } from "../controllers/dependencies.mjs";
export class listaContacto{
    addContacto(nombre,apellido,numero){
        let contacto = new Contacto()
        contacto.setNombre(nombre)
        contacto.setApellido(apellido)
        contacto.setTelefono(numero)
        
        linkedlist.push(contacto)
       
    }
    seeContacto(i){
        let objcontacto= linkedlist.getItem(i)
        return objcontacto
    }
    searchContacto(info) {
        for (let i = 0; i < linkedlist.size(); i++) {
            let contacto = linkedlist.getItem(i);
            if (contacto.getNombre() == info) {
                return contacto;
            }
        }
        return null; 
    }
    
    comprobacion(){
        return linkedlist.size()
    }

    burbuja(){
        let n, i, k;
        n = linkedlist.size();

        let aux = new Contacto()
       for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            console.log(linkedlist.getItem(i).getNombre())
            console.log(linkedlist.getItem(i+1).getNombre() )
            console.log(linkedlist.getItem(i).getNombre() >linkedlist.getItem(i+1).getNombre())
            if (linkedlist.getItem(i).getNombre()>linkedlist.getItem(i+1).getNombre()) {
              
                aux.setNombre(linkedlist.getItem(i).getNombre())
                aux.setApellido(linkedlist.getItem(i).getApellido())
                aux.setTelefono(linkedlist.getItem(i).getTelefono())
            
                linkedlist.getItem(i).setNombre(linkedlist.getItem(i+1).getNombre())
                linkedlist.getItem(i).setApellido(linkedlist.getItem(i+1).getApellido())
                linkedlist.getItem(i).setTelefono(linkedlist.getItem(i+1).getTelefono())
               
                linkedlist.getItem(i+1).setNombre( aux.getNombre())
                linkedlist.getItem(i+1).setApellido( aux.getApellido())
                linkedlist.getItem(i+1).setTelefono( aux.getTelefono())
            }  
        }
    }
    }
}
