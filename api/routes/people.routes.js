const express = require('express');
const router = express.Router();
const pplController = require('../controllers/people.controller.js');
const tokenUtils = require('../middlewares/token.utils.js');
const bcrypt = require('bcryptjs');


router.post('/user', tokenUtils.checkIfTokenIsValid, function (req, res) {
    pplController.getPeopleById(req.body.id, function (err, result) {
        res.send(result);
    })
})

router.delete('/delete/user', (req, res) => {
    pplController.deletePeopleById(req.query.id, function (err, result) {
        if (result == null || result == undefined) {
            res.send({ message: "The user has been deleted." });
        } else {
            pplController.deletePeopleById(req.body.id, function (err, result) {
                res.send({ message: "An error occurred: the user was not deleted." });
            })
        }
    }, (er) => {
        res.send({ message: "An error occured." });
    })
})

router.post('/user/update', tokenUtils.checkIfTokenIsValid, (req, res) => {
    var psw = null;
    if (req.body.password != null && req.body.password != "") {
        bcrypt.hash(req.body.password, 10, function (e, hash) {
            pplController.updatePeople(req.body, hash, function (err, result) {
                if (result == null || result == undefined) {
                    res.send({ message: "The user has been update." });
                } else {
                    res.send({ message: "An error occurred: the user was not update." });
                }
            }, (er) => {
                res.send({ message: "An error occured." });
            })
        })
    } else {
        pplController.updatePeople(req.body, null, function (err, result) {
            if (result == null || result == undefined) {
                res.send({ message: "The user has been update." });
            } else {
                res.send({ message: "An error occurred: the user was not update." });
            }
        }, (er) => {
            res.send({ message: "An error occured." });
        })
    }
})

module.exports = router;