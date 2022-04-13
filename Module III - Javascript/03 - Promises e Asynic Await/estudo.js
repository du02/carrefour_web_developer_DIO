/**
 *  Asynchronous - Que não ocorre ou não se efetiva ao mesmo tempo. (Pode-se fazer várias coisas ao mesmo tempo)
 *  Synchoronous - JS por padrão é síncrono, cada coisa de uma vez, tipo uma fila.
 */

/**
 *  Promises - Processo asynchronous
 *  (Você tem a promessa, entretanto pode ser resolvido ou rejeitado)
 * 
 *  - Pending
 *  - Fultilled
 *  - Rejected
 */

/**
 *  async 
 *  await
 * 
 */

/**
 *  APIs
 */

fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json));

// fetch retorna uma promise (se faz necessário usar o await)

// GET
fetch('https://my-api.com', {
    method: 'GET',
    cache: 'no-cache',
})
    .then(response => response.json())
    .then(json => console.log(json));

// POST
fetch('https://my-api.com', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(json => console.log(json));
