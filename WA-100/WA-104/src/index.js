import express from 'express';
import routes from './routes';

const app = express() // instanciranje aplikacije
const port = 5000 // port na kojem će web server slušati

app.get('/', (req, res) => {
    let routes = ['studenti', 'first', 'last']
    let response = ''
    for (var i of routes) {
        response += i.charAt(0).toUpperCase() + i.slice(1) + ' ruta:<br /><li>localhost:5000/'
        if (i != "studenti")
            response += 'studenti/'
        response += i + '</li><br />'
    }

    res.send(response)
})
app.get('/studenti', routes.studenti)
app.get('/studenti/first', routes.first)
app.get('/studenti/last', routes.last)

app.listen(port, () => console.log(`Slušam na portu ${port}!`))