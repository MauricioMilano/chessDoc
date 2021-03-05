const express = require('express')
const app = express()
const port = 3000
app.use('/', express.static(__dirname + '/dist'));

app.use('*',express.static(__dirname + '/dist/404.html'))
app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})