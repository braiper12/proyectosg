const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

// middlewares

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//ruta de prueba

app.get('/', (req, res) => {
    res.json({

        message: 'API FUNCIONA OK',
        timestamp: new Date().toISOString()
    })
})


//ruta validar status selver

app.get('/health', (req, res) => {

    res.status(200).json({
        status: 'ok',
        uptime: process.uptime()
    })
})

const PORT = process.env.port || 3000

app.listen(PORT, () => {
    console.log('☻ server corriendo en puerto  ' , PORT)
})

module.exports = app