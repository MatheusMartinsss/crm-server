const express = require('express')

const app = express()

const port = proce.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server runing on port ${port}`)
})