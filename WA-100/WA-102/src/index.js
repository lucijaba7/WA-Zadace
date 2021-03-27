import express from 'express';
import dodaj from './routes/dodaj.js';
import dohvati from './routes/dohvati.js';

const app = express() // instanciranje aplikacije
const port = 5000 // port na kojem će web server slušati

app.get('/', (req, res) => {
    let routes = ['dodaj', 'dohvati']
    let response = ''
    for (var i of routes) {
        response += i.charAt(0).toUpperCase() + i.slice(1) + ' ruta:<br /><li>localhost:5000/' + i + '</li><br />'
    }

    res.send(response)
})
app.get('/dodaj', dodaj)
app.get('/dohvati', dohvati)

app.listen(port, () => console.log(`Slušam na portu ${port}!`))