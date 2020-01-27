const express = require('express');
const serveIndex = require('serve-index');
const app = express();

// quelque soit le verbe http et le '.' indique le répertoire actuel
app.use(express.static('.'));

// sers à mettre un système de navigation 
app.use(serveIndex('.', { icons: true }));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});