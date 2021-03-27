const data = require('./studenti.json')

function studentInfo(student) {
    return student.ime + ' ' + student.prezime + ' (' + student.JMBAG + '), ' + student.godina_studija + '. godina.<br />'
}

let studenti = (req, res) => {
    let response = ''
    data.students.forEach((student) => {
        response += studentInfo(student)
    })

    res.send(response)
}

let first = (req, res) => {
    res.send(studentInfo(data.students[0]))
}

let last = (req, res) => {
    res.send(studentInfo(data.students[data.students.length - 1]))
}


export default { studenti, first, last }