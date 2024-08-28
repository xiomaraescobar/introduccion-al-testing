beforeAll(): se ejecuta antes de todas las pruebas.
beforeEach(): se ejecuta antes de cada prueba.
afterEach(): se ejecuta después de cada prueba.
afterAll(): se ejecuta después de todas las pruebas Nota: Todas estas funciones se ejecutan dentro del alcance del scope.



Tipos de pruebas. Unit test



Metodologías

TDD (Test Driven Development): Desarrollo guiado por pruebas, donde primero se hacen las pruebas antes de escribir el código (primero los expects).

BDD (Behavior Driven Development): Desarrollo guiado por comportamiento de acuerdo a los requisitos y luego las pruebas.

AAA "Mantra" para hacer pruebas

_____ preparar Arrange | Given dado algo _________ ejecutar Act | When cuando resolver hipótesis Assert | Then entonces

concepto Falso Positívo Cuando una prueba indica un error, pero todo está bien, por ejemplo, testeando el método suma de 1 +1 y pongo el expect en 5, es un falso positivo, luego la prueba está mal.

c Falso Negativo Son más comunes, ya que parece que todo está normal, pero no se ha identificado el error, el set de pruebas debería ser más amplio; esto sucede cuando caemos en tan solo, probar el Happy Path, probar las condiciones en las que sabemos que el sistema funciona, por ejemplo, en el SUT de dividir las primeras pruebas salían bien porque no se tomó en cuenta la división entre cero 0, luego se hizo la prueba y el refactor. En caso de falso negativo lo mejor es aplicar TDD.

c Sistema Legacy Son sistemas que te piden agregar pruebas a algo funcional, incluso en paralelo; hay que refactorizar los métodos enormes a pequeños para hacer unit test de pocos a muchos métodos; legacy no lleva una buena arquitectura.

c Clean Architecture Este patrón lleva buenas prácticas desde el principio, cada método está bien dividido y con responsabilidades acertadas, es mucho más facil de agregar el set de pruebas.





Comando Coverage --- sirve para ver como va el proceso de las pruebas.
Significa que al momento de ejecutar las pruebas nos da un resultado, de los metodos o funciones a los que se esten accediendo con las pruebas que hallamos lanzado.

npm run test -- --coverage
