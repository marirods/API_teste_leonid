'use strict'

import { getContatos, getContatosPorNome } from "./contato.js"

function criarCard (contato){
    // console.log(contato)
    const container = document.getElementById('container')
    const card = document.createElement('div')
    card.classList.add('card-contato')
    card.innerHTML = `
         <img src="${contato.foto}" alt="">
         <h2>${contato.nome}</h2>
         <p>${contato.celular}</p>`
    

    container.appendChild(card)
}

async function exibirPesquisa(evento){
    if(evento.key == 'Enter'){
        const contatos = await getContatosPorNome(evento.target.value)
        const container = document.getElementById('container')
        container.replaceChildren()
        contatos.forEach(criarCard)
        console.log(contatos);
        
        console.log('Enter pressionado')
    }
    // console.log(evento.key);
    
}

//mostrar contatos

async function exibirContatos(){
    const contatos = await getContatos()
    contatos.forEach(criarCard)
}

exibirContatos()


document.getElementById('pesquisar').addEventListener('keydown', exibirPesquisa)