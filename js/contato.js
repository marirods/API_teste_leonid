'use strict'

//pegar dados pelos nomes sem ser id
export async function getContatos (){
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'
    const response = await fetch(url)
    const data = await response.json()
    return data
}


//pegar dados pelos nomes que o usuario cadastrar
export async function getContatosPorNome (nome){
  const url = `https://bakcend-fecaf-render.onrender.com/contatos?nome_like=^${nome}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}


//pegar pelo id ou numero de telefone
async function getContato (id){
const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}


//criar contato
async function postContato(contato){
    // console.log(contato)
      const url = 'https://bakcend-fecaf-render.onrender.com/contatos'
      const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
      }
      const response = await fetch(url, options)

      //ok é verdadeiro se deu certo e falso deu errado
      return response.ok
}


//criar novo contato
// const novoContato = {
//     "nome": "Mari Rodrigues",
//     "celular": "11 1 1111-1111",
//     "foto": "senai.png",
//     "email": "marirodrigues@gmail.com",
//     "endereco": "Elton Silva, 904",
//     "cidade": "Jandira"
// }

const novoContato = {
    "nome": "Mari",
    "celular": "22 2 2222-2222",
    "foto": "mari.png",
    "email": "mari@gmail.com",
    "endereco": "Elton Silva, 904",
    "cidade": "Jandira"
}

//editar contato cadastrado - update
async function putContato(id, contato){
    // console.log(contato)
      const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
      const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
      }
      const response = await fetch(url, options)

      //ok é verdadeiro se deu certo e falso deu errado
      return response.ok
}


//deletar algum elemento
async function deleteContato(id){
    // console.log(contato)
      const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
      const options = {
        method: 'DELETE',
      }
      const response = await fetch(url, options)

      //ok é verdadeiro se deu certo e falso deu errado
      return response.ok
}
