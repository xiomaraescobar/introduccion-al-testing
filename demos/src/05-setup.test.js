// Podemos encerrar varios test() dentro de este describe()
/* Esto nos sirve para cosas como mejorar la lectura y el
encapsulamiento */
describe('group 1', () => {
  beforeAll(() => { // se ejecuta antes de las pruebas
    console.log('beforeAll');
    //up db
  });
  afterAll(() => {
    console.log('afterAll');
    //down db
  })

  beforeEach(() => {
    // corre con las interacciones de las pruebas, ejecutandose antes de los casos.
    console.log('beforeEach');
  });

  afterEach(() => {
    // corre con las interacciones de las pruebas, ejecutandose despues de los casos.
    console.log('afterEach');
  });
  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });

  test('case 2', () => {
    console.log('case 2');
    expect(2 + 2).toBe(4);
  });

  // Inlcuso podemos tener conjuntos de test unos dentro de otros
  describe('group 2', () => {
    beforeAll(() => {
      console.log('beforeAll');
      //up db
    })
    test('case 3', () => {
      console.log('case 3');
      expect(3 + 3).toBe(6);
    });

    test('case 4', () => {
      console.log('case 4');
      expect(4 + 4).toBe(8);
    });
  });
});
