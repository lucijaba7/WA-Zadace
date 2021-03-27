import lista from './lista.js'

let dohvati = (req, res) => {
    res.send('Lista: ' + lista.join(' '))
}

export default dohvati