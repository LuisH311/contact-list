


const contactos  = [
    {
        id: 1,
        nombre: 'Sara',
        apellido: 'Lopez',
        telefono: 302469575,
        ubicacion: {
            ciudad: 'Puerto',
            direccion: 'Via al Mar',
        }
    },
    
    {
        id: 2,
        nombre: 'Napoleon',
        apellido: 'Bonaparte',
        telefono: 301469255,
        ubicacion: {
            ciudad: 'Valencia',
            direccion: 'España',
        }
    }

    
];

alert(`La lista contiene a: ${contactos[0].nombre} y ${contactos[1].nombre}`); 
imprimir();

function agregar(){
let adicional1 = {
    id: 3,
    nombre: 'Juan',
    apellido: 'de Nepomuceno',
    telefono: 302469575,
    ubicacion: {
        ciudad: 'San Juan',
        direccion: 'Via Calamar a la izquierda sin doblar pa ningun lao',
    }
}; 
contactos.push(adicional1);
alert('Juan fue agregado a la lista')
imprimir();

let adicional2 = {
    id: 4,
    nombre: 'Matador',
    apellido: 'Salas',
    telefono: 3014567897,
    ubicacion: {
        ciudad: 'Alpes',
        direccion: 'Cra 54 # 70',
    }
};
    
    contactos.push(adicional2);
    alert ("Matador fue agregado a la lista");
    imprimir();
}
agregar();


function eliminar(){
contactos.splice(1,1);
alert ("Contacto eliminado de la lista");
}
eliminar();


function actualizar(){
    let obj = { id: 5,
    nombre: 'Matador',
    apellido: 'fedelobo',
    telefono: 3014567897,
    ubicacion: {
        ciudad: 'Alpes',
        direccion: 'Cra 54 # 70',
    }}
    contactos.splice(2,1,obj) 
        
      }
      actualizar();
    

function imprimir(){
console.table(contactos);
}

imprimir();
