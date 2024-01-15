const mostrarListaEstudiantes = (estudiantes) => {
    console.log("Lista de estudiantes registrados:");
    estudiantes.forEach((estudiante) => {
      console.log('nombre: ${estudiante.nombre}, edad: ${estudiante.edad}');
        
    });    
    };

    module.export = {mostrarListaEstudiantes}