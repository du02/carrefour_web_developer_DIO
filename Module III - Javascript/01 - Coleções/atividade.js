// Maps

/**
 *  1 - Crie uma função getAdmins que recebe um Map;
 *  2 - Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
 *  3 - Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usuários que são administradores. 
*/

function getAdmins(map){

    let admins = [];

    for ([key, value] of map) {
        if(value === 'Admin'){
            admins.push(key);
        }
    }

    return admins;
}

const users = new Map();

users.set('Luiz', 'Admin');
users.set('Eduardo', 'Admin');
users.set('Kinha', 'Admin');
users.set('Luh', 'User');

console.log(getAdmins(users))

// Sets

/**
 *  1 - Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.
 */

const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valueUnic(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valueUnic(array));