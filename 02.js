const usuarios = [  
        { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
        { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },  
        { nome: 'Lucas', idade: 30, empresa: 'Facebook' }, 
    ];

const idades = usuarios.map(usuario => usuario.idade); 
console.log(idades);

//usuarios que trabalham na rocketseat e com mais de 18 anos
const selecionados = usuarios.filter(usuario => usuario.idade > 18 && usuario.empresa==="Rocketseat");
console.log(selecionados);

const findGoogle = usuarios.find(usuario => usuario.empres==="Google")
console.log(findGoogle);

const calculo = usuarios
    .map(usuario => ({...usuario, idade: usuario.idade*2}))
    .filter(usuario => usuario.idade <= 50);
console.log(calculo);
