const express = require('express')
const app = express()
const port = 3000
app.use('/', express.static(__dirname + '/'));
app.use('*',express.static(__dirname + '/404.html'))
app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})