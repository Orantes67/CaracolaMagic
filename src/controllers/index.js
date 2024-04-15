import { listContacts } from "./dependencies.mjs";


console.log("a"<"z")
let addcontac = document.getElementById("btn-add")
addcontac.addEventListener("click",function(){
    const card= document.createElement("div");
    divchar.appendChild(card)

    let pName= document.createElement("p");
    pName.innerText="ingrese el nombre del contacto" 
    card.appendChild(pName)
    let charName= document.createElement("input");
    card.appendChild(charName)
    charName.setAttribute("id", "inputName");

    let pLName= document.createElement("p");
    pLName.innerText="ingrese el apellido del contacto" 
    card.appendChild(pLName)
    let CharLname= document.createElement("input");
    card.appendChild(CharLname)
    CharLname.setAttribute("id", "inputLName");
  
    let pCelular= document.createElement("p");
    pCelular.innerText="ingrese el numero telefonico del contacto"
    card.appendChild(pCelular)
    let CharCelular= document.createElement("input");
    card.appendChild(CharCelular)
    CharCelular.setAttribute("id", "inputCelular"); 
    CharCelular.setAttribute("type", "number"); 
    
    
   
    let Btn= document.createElement("button");
    Btn.innerText="agregar contacto" 
    card.appendChild(Btn)
 
    Btn.addEventListener('click', function() {
        let infoName = null;
        let infoLName = null;
        let infoCelular = null;
    
        infoName = document.getElementById("inputName").value 
        infoLName = document.getElementById("inputLName").value
        infoCelular = document.getElementById("inputCelular").value
        
        if (infoName!=null&&infoLName!=null&&infoCelular!=null) {
            listContacts.addContacto(infoName,infoLName,infoCelular)
            console.log(listContacts.comprobacion())
            infoName = document.getElementById("inputName").value = "";
            infoLName = document.getElementById("inputLName").value = "";
            infoCelular = document.getElementById("inputCelular").value = "";

        }else{
            alert("Por favor, complete todos los campos.");
        }
        
    });
});
let seecontac = document.getElementById("btn-see")
seecontac.addEventListener("click",function(){
    

    if(listContacts.comprobacion()>0){
        for(let i=0;i<listContacts.comprobacion();i++){
            let contactos= listContacts.seeContacto(i)
            const card= document.createElement("div");
            divchar.appendChild(card)
        
            let charTXT= document.createElement("h1");
            charTXT.innerText="nombre" 
            card.appendChild(charTXT)
            let chartxt= document.createElement("p");
            chartxt.innerText= contactos.getNombre()
            card.appendChild(chartxt)
        
            charTXT= document.createElement("h1");
            charTXT.innerText="apellido" 
            card.appendChild(charTXT)
            chartxt= document.createElement("p");
            chartxt.innerText=contactos.getApellido()
            card.appendChild(chartxt)
        
            charTXT= document.createElement("h1");
            charTXT.innerText="numero" 
            card.appendChild(charTXT)
            chartxt= document.createElement("p");
            chartxt.innerText=contactos.getTelefono()
            card.appendChild(chartxt)
            
        }
    
    }
    else{
        alert("ingrese un contacto.");
    }
    
})

let findcontac = document.getElementById("btn-find")
findcontac.addEventListener("click",function(){
    if(listContacts.comprobacion()>0){
       
            const card= document.createElement("div");
            divchar.appendChild(card)

            let chartxt= document.createElement("p");
            chartxt.innerText="ingrese el nombre del contacto" 
            card.appendChild(chartxt)
            let char= document.createElement("input");
            card.appendChild(char)
            char.setAttribute("id", "idinput");
            
            let Btn= document.createElement("button");
            Btn.innerText="buscar contacto" 
            card.appendChild(Btn)
            Btn.addEventListener("click",function(){
            let info=document.getElementById("idinput").value;
            let contac = listContacts.searchContacto(info)

            let charTXT= document.createElement("h1");
            charTXT.innerText="nombre" 
            card.appendChild(charTXT)
            chartxt= document.createElement("p");
            chartxt.innerText= contac.getNombre()
            card.appendChild(chartxt)
        
            charTXT= document.createElement("h1");
            charTXT.innerText="apellido" 
            card.appendChild(charTXT)
            chartxt= document.createElement("p");
            chartxt.innerText=contac.getApellido()
            card.appendChild(chartxt)
        
            charTXT= document.createElement("h1");
            charTXT.innerText="numero" 
            card.appendChild(charTXT)
            chartxt= document.createElement("p");
            chartxt.innerText=contac.getTelefono()
            card.appendChild(chartxt)
 
            })

    }
    else{
        alert("ingrese un contacto.");
    }
})

let delcontac = document.getElementById("btn-del")
delcontac.addEventListener("click",function(){
    listContacts.burbuja()
})


