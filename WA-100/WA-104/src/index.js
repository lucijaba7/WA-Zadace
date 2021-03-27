import express from 'express';
import routes from './routes';

const app = express() // instanciranje aplikacije
const port = 5000 // port na kojem će web server slušati

app.get('/', (req, res) => {

})
app.get('/studenti', routes.datum)
app.get('/studenti/first', routes.prognoza)
app.get('/studenti/last', routes.prognoza)

app.listen(port, () => console.log(`Slušam na portu ${port}!`))