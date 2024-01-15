const readline = require("readline-sync");
const {mostrarListaEstudiantes} = require('./lista_estudiantes.js');

const registrarEstudiantes = () => {
  const cantidadEstudiantes = readlineSync.question("Ingresas la cantidad de estudiantes a registrar: ");
  const estudiantes = [];
    
    for(let i = 0; i < cantidadEstudiantes; i++) {
        const nombre = readlineSync.question('Ingresas el nombre del estudiante ${i}:');
        const edad = readlineSync.question('Ingresas la edad del estudiante ${nombre}:');
       
        const estudiante = {
            nombre,
            edad
        };;
       estudiantes.push(estudiante);
    }

    mostrarListaEstudiantes(estudiantes);
};


  
  //iniciar el registro de estudiantes
  registrarEstudiantes();
