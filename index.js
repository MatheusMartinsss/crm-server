const express = require('express')
require('dotenv').config();
require('./src/models/index')
const app = express()
const setupRoutes = require('./src/main/routers')
const port = process.env.PORT || 8080

app.use(express.json())
app.listen(port, () => {
    console.log(`Server runing on port ${port}`)
})
setupRoutes(app)