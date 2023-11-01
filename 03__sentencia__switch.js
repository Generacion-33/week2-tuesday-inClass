///condicionales: estructura -> switch

//La sentencia se utiliza en el marco de evaluacion de una condicion. Solo una condicion ⚠️, estará ejecutando una secuencia de instrucciones dependiendo de la condicion.

//⚠️ No podemos poner varios condicionales

/**
 * SINTAXIS
 * switch(valor){ //valor es la expresion de control, expresion de test ( expresion de evaluacion)
 *    case valor1:
 *    bloque de codigo
 *    break ->>>>>>>>>>>>>>> hace que se detenga la ejecucion
 * case valor2:
 *    bloque de codigo
 *    break ->>>>>>>>>>>>>>> hace que se detenga la ejecucion
 * default:
 *  bloque de codigo // el default no lleva break
 * }
 */

const diaDeLaSemana = 'miercoles'

let mostrarDia = null

switch (diaDeLaSemana) {
  case 'lunes': //diaDeLaSemana= miercoles ---> miercoles === lunes
    mostrarDia = 'Es dia lunes' //el bloque de codigo es la reasignacion
    break //el break entonces lo que hace es detener la ejecucion para que no se ejecute el proximo case
  case 'martes':
    mostrarDia = 'Es dia martes'
    break
  case 'miercoles':
    mostrarDia = 'Es dia miercoles'
    break
  case 'jueves':
    mostrarDia = 'Es dia jueves'
    break
  case 'viernes':
    mostrarDia = 'Es dia viernes'
    break
  case 'sabado':
    mostrarDia = 'Es dia sabado'
    break
  case 'domingo':
    mostrarDia = 'Es dia domingo'
    break
  default:
    mostrarDia = 'No es un dia de la semana'
}

console.log(mostrarDia); 'No es un dia de la semana'

//ejemplo de agrupamiento de case 

const mesActual = 'agosto'
let estacion = null


switch (mesActual) {
  case 'enero': //octubre === enero
  case 'febrero': //octubre === febrero
  case 'marzo': //octubre === marzo
    estacion = 'verano'
    break
  case 'abril': //octubre === abril
  case 'mayo': //octubre === mayo
  case 'junio': //octubre === junio
    estacion = 'otoño'
    break
  case 'julio': //octubre === julio
  case 'agosto': //octubre === agosto
  case 'septiembre': //octubre === septiembre
    estacion = 'invierno'
    break
  case 'octubre': //octubre === octubre
  case 'noviembre': //octubre === noviembre
  case 'diciembre': //octubre === diciembre
    estacion = 'primavera'
    break

  default:
    estacion = 'No es un mes valido'

}

console.log(estacion);