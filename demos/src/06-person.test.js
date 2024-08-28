// Aquí implementaremos los hooks y los grupos (describe) con una clase de pruebas.

const Person = require('./06-person');

describe('Test for Person', () => { // Se agrupan las pruebas de rango IMC
  let person; // Se instancia el objeto persona para automatizar.

  // ** importante ---  Arrange / Given (Preparar)
  beforeEach(() => {
    person = new Person('Maria', 45, 1.7); // Asignamos datos a la nueva persona en el describe que siempre repite antes de cada test.
  });
  test('should return down', () => {
    // AAA sistemas de pruebas

  // ** importante ---  Arrange / Given (Preparar)
    person.weight = 45; // Cambiamos los datos de la persona para este rango/caso solo enviamos el parametro del peso.
    // Act / When (Actuar)
    const imc = person.calcIMC();
    // Assert / Then (Asertar )
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});


