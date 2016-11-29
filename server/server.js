const express = require('express');
const path = require('path'); // Built in module, doesn't need npm

// Variables declaration
const publicPath = path.join(__dirname,'../public')
var app = express();
const port = process.env.PORT || 3000

app.use(express.static(publicPath));

app.listen(port , () => {
  console.log(`Server started on port ${port}`)
});
