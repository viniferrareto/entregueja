const express = require('express')
const cors = require ('cors')
const app = express()
const port = 3002

app.use(cors())

app.get('/', (req, res) => {
    res.send('Olá, mundo!')
})

app.listen(port, () => {
    console.log('App ouvindo na porta ${port}')
})