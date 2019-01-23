const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 8008

app.use(express.static(__dirname + '/www'))
app.use(cors())

app.get('/', (req, res) => res.send("Hello World!"))

app.get('/api/testReactCall', (req, res) => res.send("Test react call"))

app.listen(port, () => console.log("Good Morning. Server listening on " + port))