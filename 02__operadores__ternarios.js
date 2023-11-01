//operadores ternarios

//ejemlo de permiso

const edad = 15;

//el operador ternario es una forma de escribir una condicion en una unica linea. La buena practica recomienda evaluar multiples condiciones

const permiso = (edad >= 18) ?
  'Puede conducir' :
  'No puede conducir';

console.log(permiso);

const nombreDeUsuario = 'David'

const saludo = nombreDeUsuario ?
  `Bienvenido ${nombreDeUsuario}` :
  'No podemos iniciar sesión'

console.log(saludo);

//La sintaxis es la siguiente:

//condicion ? valor en caso de que sea true : valor en caso que sea false


//ejemplo de multiples condiciones

const num1 = 10
const num2 = 8

const result = (num1 < num2) ?
  'El numero1 es menor que el num2 ' :
  (num1 > num2) ?
    'Numero1 es mayor que numero 2' :
    'Los numeros son iguales'
