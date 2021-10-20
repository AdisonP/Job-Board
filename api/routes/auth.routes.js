const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller.js');
const tokenController = require('../controllers/token.controller');
const tokenUtils = require('../middlewares/token.utils')
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
require('dotenv').config()



router.post('/register', (req, res) => {
    authController.checkMail(req.body.email, function (er, re) {
        if (re[0] != null || re[0] != undefined) {
            res.send({ message: "this mail is already use", error: true });
        } else {
            bcrypt.hash(req.body.password, 10, function (e, hash) {
                var user = req.body;
                authController.register(user, hash, function (err, result) {
                    if (result.statusCode == 200) {
                        res.send({ message: "Your account has been successfully created." });
                    } else {
                    }
                })
            })
        }
    })
});

router.put('/register/cp', (req, res) => {
    authController.checkMailCp(req.body.email, function (er, re) {
        if (re[0] != null || re[0] != undefined) {
            res.send({ message: "This mail is already use", error: true });
        } else {
            bcrypt.hash(req.body.password, 10, function (e, hash) {
                var cp = req.body;
                authController.registerCp(cp, hash, function (err, result) {
                    res.send({ message: "Your account has been successfully created." });
                })
            })
        }
    })
});

router.post('/login', (req, res) => {
    authController.login(req.body, function (err, result) {
        if (result[0] != null && result[0] != undefined) {
            bcrypt.compare(req.body.password, result[0].password, function (e, r) {
                if (r) {
                    var roles = JSON.parse(result[0].roles)
                    if (roles.roles == "USER") {
                        var token = tokenUtils.generateToken(result[0])
                        tokenController.setNewToken(token, result[0].id, function (err, re) {
                            res.send({ token: token, id: result[0].id, name: result[0].name, first_name: result[0].first_name, mail: result[0].email, adress: result[0].address, city: result[0].city, postal_code: result[0].postal_code, birth_date: result[0].birth_date, role: roles })
                        })
                    } else {
                        res.send({ message: "Please log in to the login area, adapt to your status : " + roles.roles.toLowerCase(), error: true });
                    }
                } else {
                    res.send({ message: "Wrong informations.", error: true });
                }
            })
        } else {
            res.send({ message: "Wrong informations.", error: true });
        }
    })
})


router.post('/login/admin', (req, res) => {
    authController.login(req.body, function (err, result) {
        if (result[0] != null && result[0] != undefined) {
            bcrypt.compare(req.body.password, result[0].password, function (e, r) {
                if (r) {
                    var roles = JSON.parse(result[0].roles)
                    if (roles.roles == "ADMIN") {
                        var token = tokenUtils.generateToken(result[0])
                        tokenController.setNewToken(token, result[0].id, function (err, re) {
                            res.send({ token: token, id: result[0].id, name: result[0].name, first_name: result[0].first_name, mail: result[0].email, adress: result[0].address, city: result[0].city, postal_code: result[0].postal_code, birth_date: result[0].birth_date, role: roles })
                        })
                    } else {
                        res.send({ message: "Please log in to the login area, adapt to your status : " + roles.roles.toLowerCase(), error: true });
                    }
                } else {
                    res.send({ message: "Wrong informations.", error: true });
                }
            })
        } else {
            res.send({ message: "Wrong informations.", error: true });
        }
    })
})

router.post('/login/company', (req, res) => {
    authController.loginCp(req.body, function (err, result) {
        if (result[0] != null && result[0] != undefined) {
            bcrypt.compare(req.body.password, result[0].password, function (e, r) {
                if (r) {
                    var roles = JSON.parse(result[0].roles);
                    if (roles.roles == "COMPANY") {
                        var token = tokenUtils.generateToken(result[0])
                        tokenController.setNewToken(token, result[0].id, function (err, re) {
                            res.send({ token: token, id: result[0].id, name: result[0].name, mail: result[0].email, city: result[0].city, postal_code: result[0].postal_code, role: roles })
                        })
                    } else {
                        res.send({ message: "Please log in to the login area, adapt to your status : " + roles.roles.toLowerCase(), error: true });
                    }

                } else {
                    res.send({ message: "Wrong informations.", error: true });
                }
            })
        } else {
            res.send({ message: "Wrong informations.", error: true });
        }
    })
})

module.exports = router;
