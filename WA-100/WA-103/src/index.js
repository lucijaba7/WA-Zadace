import express from 'express';

const app = express() // instanciranje aplikacije
const port = 4000 // port na kojem će web server slušati
const staticMiddleware = express.static('public')

app.use('/', staticMiddleware)

app.listen(port, () => console.log(`Slušam na portu ${port}!`))