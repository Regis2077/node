const express = require("express")

const { randomUUID } = require("crypto")
const { response } = require("express")

const app = express()

app.use(express.json())

const products = []

/* 
POST => inserir um dado
GET => buscar um dado
PUT => Alterar um dado 
DELETE => Remover um dado

*/

/**
 * Body => Passar uma informação (corpo da requisição)
 * Params=> parametros da rota na URL 
 * Query => /product?id=12345789&value=12312312 
 */

app.post("/products", (req, res) => {

    const { name, quantity } = req.body

    const product = {
        id: randomUUID(),
        name,
        quantity
    }
    products.push(product)

    return res.json(product)
})

app.get("/products",(req, res)=>{
    return res.json(products)
})

app.get("/products/:id", (req, res) => {
    const { id } = req.params
    const product = products.find( product => product.id === id)

    return res.json(product)
})

app.put("/products/:id",(req, res) =>{
    const { id } = req.params
    const { name, quantity } = req.body
    const productIndex = products.findIndex((product)=> product.id === id);

    products[productIndex] = {
        ...products[productIndex],
        name,
        quantity
    }
    
    return res.json({message: "produto alterado com sucesso"})
})
app.delete("/products/:id",(req, res) =>{
    const { id } = req.params

    const productIndex = products.findIndex((product)=> product.id === id);

    products.splice(productIndex, 1)

    return res.json({message: "produto removido com sucesso"})
})

app.listen(4002, ()=> console.log("server is running in 4002"))