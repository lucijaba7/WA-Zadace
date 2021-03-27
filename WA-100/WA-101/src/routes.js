const moment = require('moment')

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let home = (req, res) => {
    let routes = ['prognoza', 'datum']
    let response = ''
    for (var i of routes) {
        response += i.charAt(0).toUpperCase() + i.slice(1) + ' ruta:<br /><li>localhost:5000/' + i + '</li><br />'
    }

    res.send(response)
}

let datum = (req, res) => {
    res.send(moment().format('DD.MM.YYYY. h:mm'))
}

let prognoza = (req, res) => {
    let prognoze = ["sunčano", "kišovito", "oblačno"]
    res.send('Danas će biti ' + prognoze[getRandomInt(prognoze.length)])
}

export default { home, datum, prognoza }