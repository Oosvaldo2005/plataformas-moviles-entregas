// Definir la función crearPersona para crear un objeto persona con los campos nombre, apellido, edad y documento.
function crearPersona(nombre, apellido, edad, documento) {
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        documento: documento
    };
}

// Ejemplo de uso de la función crearPersona.
let personaEjemplo = crearPersona("Juan", "Pérez", 20, 123456);
console.log("resultado crearPersona: ", personaEjemplo);

// Función para agregar un campo 'apodo' a la persona recibida como parámetro.
function agregarApodo(persona, apodo) {
    persona.apodo = apodo;
    return persona;
}
console.log("resultado agregarApodo: ", agregarApodo(personaEjemplo, "JuanPe"));

// Función para eliminar el campo 'documento' de la persona recibida como parámetro.
function sinDocumento(persona) {
    let personaSinDocumento = { ...persona }; // Crear una copia para no modificar el objeto original.
    delete personaSinDocumento.documento; // Eliminar el campo 'documento' de la copia.
    return personaSinDocumento;
}
console.log("resultado sinDocumento: ", sinDocumento(personaEjemplo));

// Función para mostrar el nombre completo de la persona en el formato "Apellido, Nombre".
function nombreCompletoDePersona(persona) {
    return `${persona.apellido}, ${persona.nombre}`;
}
console.log("resultado nombreCompletoDePersona: ", nombreCompletoDePersona(personaEjemplo));

// Función para incrementar la edad de la persona en uno.
function felizCumpleaños(persona) {
    persona.edad += 1;
    return persona;
}
console.log("resultado felizCumpleaños: ", felizCumpleaños(personaEjemplo));

// Función para verificar si dos personas son la misma comparando todos los campos.
function sonLaMismaPersona(persona1, persona2) {
    return persona1.nombre === persona2.nombre &&
           persona1.apellido === persona2.apellido &&
           persona1.edad === persona2.edad &&
           persona1.documento === persona2.documento;
}
console.log("resultado sonLaMismaPersona: ", sonLaMismaPersona(
    personaEjemplo,
    { apellido: "Pérez", nombre: "Juan", edad: 20, documento: 123456 }
));
