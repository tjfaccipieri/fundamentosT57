// var nome = 'thiago' //variavel de escopo global
let nome = 'thiago' // variavel de escopo local, pode alterar o valor
// const nome = 'thiago' // variavel de escopo local, não pode alterar o valor


// const perfil = document.getElementById('perfil') -> pega pelo perfil
// const perfil = document.getElementsByClassName('perfil') -> pega pela classe
// const perfil = document.getElementsByName('name') -> pega pelo atributo name
// const perfil = document.getElementsByTagName('name') -> pega pela tag
const perfil = document.querySelector('.perfil')

function aparecerNome() {
  // let data = new Date()
  // alert(data)
  console.log(perfil)
}