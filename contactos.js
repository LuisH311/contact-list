




const contactos  = ['Luis Hernandez' , 'Juanito Perez' , 'Sancho Panza'];
alert (contactos); 


function agregar(){
contactos.push('Matador Salas');
alert (contactos);    
}
agregar()



function eliminar(){
contactos.splice(1,1)
alert (contactos); 
}
eliminar()



function imprimir(){
console.log (contactos);
}

imprimir()