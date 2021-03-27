import express from 'express';
import routes from './routes';

const app = express() // instanciranje aplikacije
const port = 5000 // port na kojem će web server slušati

app.get('/', routes.home)
app.get('/datum', routes.datum)
app.get('/prognoza', routes.prognoza)

app.listen(port, () => console.log(`Slušam na portu ${port}!`))