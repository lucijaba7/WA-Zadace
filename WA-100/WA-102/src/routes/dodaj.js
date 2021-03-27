import lista from './lista.js'

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


let dodaj = (req, res) => {
    let novi_broj = getRandomInt(100)
    lista.push(novi_broj)
    res.send('Spremam ' + parseInt(novi_broj) + ' u listu..')
}

export default dodaj