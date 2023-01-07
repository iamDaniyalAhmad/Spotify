const express = require('express')
const path = require("path");
const app = express()
const port = 3000

const staticPath = path.join(__dirname,"../public");
console.log(staticPath);

app.use(express.static(staticPath))

app.get('/', (req, res) => {
  res.send("Hello World")
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})