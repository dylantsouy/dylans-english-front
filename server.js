const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.static(path.join("dist"))) // configure static path

app.get('/asset', function (req, res) {
  res.sendfile('dist/asset')
})
app.get('/*', function (req, res) {
  res.sendfile('dist/index.html')
})
app.all('/*', function (req, res) {
  res.sendfile('dist/index.html');
});

const port = process.env.PORT || 8080
app.listen(PORT || 5000, () => console.log(`Listening on http://localhost:${PORT}`)); // listen on port