const numbers = [1,2,3,4,5,6,7,1,2,5,3,8,5,9,4,1,0];
const mySet = new Set(numbers);

console.log(mySet);

// Adding
mySet.add(15);

// check existennce
mySet.has(1);

// delete
mySet.delete(9);


/**
 *      SET vs Array
 * 
 *  - Valores únicos 
 *  - Em vez da propriedade 'length', consulta-se o número de registro pela propriedade size;
 *  - Não possui os métodos map, filter, reduce etc...
 * 
 */