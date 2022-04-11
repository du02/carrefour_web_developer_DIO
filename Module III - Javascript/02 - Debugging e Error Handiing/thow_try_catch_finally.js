// Throw
function verificarThrow(string) {
    if(!string) throw "String Inválida.";
}

// return
function verificarReturn(string) {
    if(!string) return "String Inválida.";
}

/**
 *  No caso do 'return' ele apenas volta uma string,
 *  já o 'throw' gera um tipo de 'error'.
 * 
 */

// Try ... catch and finally
function tryCatch(string){
    try {
        verificarThrow(string);
    } catch(error) {
        console.log(error);
    } finally {
        console.log('Finally será executado independente de der erro ou não.');
    }
}

// Objeto Error
new Error(message, fileName, lineNumber)

// todos os parametros são opcionais
const myError = new Error('Mensagem inválida.');
throw myError;