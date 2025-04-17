'use strict'

//pegar dados pelos nomes sem ser id


async function getMeusContatos (){
     const url=`https://giovanna-whatsapp.onrender.com/v1/whatsapp/contatos/11987876567`
    const response = await fetch (url)
    const data = await response.json()
    console.log(data)
    return data
}

// criar contato
// async function postContatos(contato){
//     const url = ``
// }