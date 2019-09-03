//converta as funções em arrow functions
//3.1 

const arr = [1, 2, 3, 4, 5]; 
arr.map(item => item +10);


// 3.2 

const mostraIdade = usuario => usuario.idade;
console.log(mostraIdade(usuario));

// 3.3 

const nome = "Diego"; 
const idade = 23; 
const mostraUsuario = (nome = 'Diego', idade = 18) => ({  
    nome,
    idade
}); 

console.log(mostraUsuario("Marcos", 18)); 
console.log(mostraUsuario("Lucas"));

// 3.4 
/*
const promise = function() {  
    return new Promise(function(resolve, reject) {
    return resolve();  
    })
}
*/

const promise = () => new Promise((resolve, reject) => resolve());
