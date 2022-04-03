const express = require('express')
const app = express()
var path = require('path');
const port = 3001;

app.use(express.static('public'))
app.get("/", (req, res) => {
    console.log(req.app.get('public'));
    res.send(path.join(__dirname + "/public/script/app.js"));
})

app.listen(port, () => {
  console.log(`Client listening on ${port} `)
})