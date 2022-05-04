const fs = require('fs');

let archivoTareas = {

    archivo: 'tareas.json',
    leerJSON: function () {

        return JSON.parse( fs.readFileSync( this.archivo, 'utf-8') );

    },
    escribirJSON: function(tareas){
        let tareasEnString = JSON.stringify( tareas );
        return tareasEnString;
    }


}

module.exports = archivoTareas;