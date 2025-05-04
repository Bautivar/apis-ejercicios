'use strict'
// Metodos que se puede comunicar una API interna
// Meotdo get : Es para pedir datos
// post : Para enviar datos
// Put : Se usa para ctualizar un recurso existente
// Delete : Eliminar un recurso del servidor

// Tenemos que insertar la ruta de nuestro archivo en el fetch en todas.

// Tipo get son las mismas peticiones que venimos haciendo desde siempre

// PETICION POST : ESTE FETCH ES PARA INGRESAR DATOS. Aca el fetch tiene el primer parametro que es el enlace y el segundo opcional es un objeto. El objeto contiene la clave methodo que puede ser post, delete o put ya que get no es necesario. Luego tenemos el headeers que indicamos el tipo de contenido (Content-Type) que seria en la mayoria de los casos un json. Por ultimo tenemos el body que agarra el json pero lo convertimos a string asi se puede entender en otros archivos usando stringify. JSON.stringify() recibe un objeto que seria el json.

// El put solo se cambia el metodo 'method' y ya esta. Lo que podemos hacer en el JSON.stringify() es guardar el objeto en una variable y luego se le asigna.

// El delete solo se busca el id del objeto que queremos eliminar.

