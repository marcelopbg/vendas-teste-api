const express = require("express");
const router = express.Router();
const connection = require('./Connection')

router.get("/users", (req, res) => {
    connection.query('SELECT * FROM pessoas', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            res.status(400);
    })
})

router.post("/users/create", (req, res) => {
    var name = req.body.name;
    var document = req.body.document;
    var phones = JSON.stringify(req.body.phones);
    var post = { nome: name, documento: document, telefone: phones }
    connection.query('INSERT INTO pessoas SET ?', post,
        function (err, results) {
            if (!err) {
                res.status(200);
                res.send("ok")
            }
            else {
                res.status(400)
                res.send("error")
            }
        });

})

module.exports = router;
