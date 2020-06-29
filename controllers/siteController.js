function home(req, res) {
    res.render('home');
}

function getPhysio(req, res) {
    res.render('physio');
}

function getRehabilitation(req, res) {
    res.render('rehabilitation');
}

function getMassage(req, res) {
    res.render('massage');
}

function getHospis(req, res) {
    res.render('hospis');
}

function getPayments(req, res) {
    res.render('payments');
}

function getPurpose(req, res) {
    res.render('purpose');
}

function getTasks(req, res) {
    res.render('tasks');
}

function getResources(req, res) {
    res.render('resources');
}

function getContacts(req, res) {
    res.render('contacts');
}

module.exports = {
    home,
    getPhysio,
    getRehabilitation,
    getMassage,
    getHospis,
    getPayments,
    getPurpose,
    getTasks,
    getResources,
    getContacts
}