const express = require('express');
const { deleteAdvertisementById } = require('../controllers/admin.controller');
const advertisementController = require('../controllers/advertisement.controller');
const router = express.Router();
const advController = require('../controllers/advertisement.controller');
const authController = require('../controllers/auth.controller');
const candidacyController = require('../controllers/candidacy.controller');
const adminController = require('../controllers/admin.controller');

router.get('/advertisements', (req, res) => {
    advController.getAllAdvertisements(function (err, result) {
        res.send(result);
    })
})

router.get('/advertisement/by_title', (req, res) => {
    var name = req.query.name;
    advController.searchAdvertisementsByName(name, function (err, result) {
        res.send(result)
    })
})

router.get('/advertisement/by_date', (req, res) => {
    advController.getLastAdvertisement(function (err, result) {
        res.send(result);
    })
})

router.post('/advertisement/add', (req, res) => {
    advController.addAdvertisement(req.body, function (err, result) {
        if (result == null || result == undefined) {
            res.send({ message: "An error occurred: the advertisement was not add." });
        } else {
            res.send({ message: "The advertisement has been add." });
        }
    }, (er) => {
        res.send({ message: "An error occured." });
    })
})

router.get('/advertisement/by_id', (req, res) => {
    advController.getAdvertisementById(req.query.id, function (err, result) {
        res.send(result);
    })
})

router.get('/advertisements/cards', (req, res) => {
    advController.getCardAdvertisements(function (err, result) {
        res.send(result);
    })
})

router.post('/advertisement/delete', (req, res) => {
    adminController.deleteAdvertisementById(req.body.id, function (err, result) {
        if (result != null || result != undefined) {
            res.send({ message: "The advertisement has been deleted." });
        } else {
            res.send({ message: "An error occurred: the advertisement was not deleted." });
        }
    }, (er) => {
        res.send({ message: "An error occured." });
    })
})

router.post('/advertisement/apply', (req, res) => {
    authController.registersecret(req.body, function (err, result) {
        var candidacy = { advertisementId: req.body.idAdv, userId: result.insertId, motivationPeople: "jesuis motivé" }
        candidacyController.apply(candidacy, function (error, resultt) {
            res.send(resultt);
        }, (er) => {
            res.send({ message: "An error occured." });
        })
    })
})

router.post('/company/advertisements', (req, res) => {
    advertisementController.getAdvByCpId(req.body.id, function (err, result) {
        res.send(result);
    })
})

router.put('/advertisements/edit', (req, res) => {
    advertisementController.editAdvertisement(req.body, function (err, result) {
        res.send(result);
    })
})

module.exports = router;