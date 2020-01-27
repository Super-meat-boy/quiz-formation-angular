const express = require('express');
const serveIndex = require('serve-index');
const app = express();

// quelque soit le verbe http et le '.' indique le répertoire actuel
app.use(express.static('.'));
console.log('CARAMBA');

// sers à mettre un système de navigation 
app.use(serveIndex('.', { icons: true }));
console.log('CARAMBA');

app.listen(3000, () => {
    console.log('CARAMBA');
    console.log('Example app listening on port 3000!')
});