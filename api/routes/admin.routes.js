const express = require('express');
const adminController = require('../controllers/admin.controller');
const router = express.Router();
const tokenUtils = require('../middlewares/token.utils.js');


router.get('/admin/users/all', tokenUtils.checkIfTokenIsValid, (req, res) => {
    adminController.getAllUsers(function(err, result){
        res.send(result);
    })
}) 

router.get('/admin/companies/all', tokenUtils.checkIfTokenIsValid, (req, res)=> {
    adminController.getAllCompanies(function(err, result){
        res.send(result);
    })
})

router.get('/admin/advertisement/all', tokenUtils.checkIfTokenIsValid, (req, res) => {
    adminController.getAllAdvertisements(function(err, result){
        res.send(result);
    })
}) 

router.delete('/admin/users/delete', tokenUtils.checkIfTokenIsValid, (req, res) => {
    adminController.deleteUserById(req.body.id, function(err, result){
        if (result == null || result == undefined){
            res.send({message : "The user has been deleted."});
        } else {
            adminController.deleteUserById(req.body, function(err, result){
                res.send({message : "An error occurred: the user was not deleted."});
            })
        }
        // bien suppr
    }, (er) => {
        res.send({message : "An error occured."});
    })
})

router.delete('/admin/advertisement/delete', tokenUtils.checkIfTokenIsValid, (req, res) => {
    adminController.deleteAdvertisementById(req.body.id, function(err, result){
        res.send(result);
    }, (er) => {
        res.send({message : "An error occured."});
    })
})

router.delete('/admin/company/delete', tokenUtils.checkIfTokenIsValid, (req, res) => {
    adminController.deleteCompanyById(req.body.id, function(err, result){
        res.send(result);
    }, (er) => {
        res.send({message : "An error occured."});
    })
})

router.put('/admin/users/add', tokenUtils.checkIfTokenIsValid, (req, res) => {
    adminController.createUser(req.body, function(err, result){
        res.send(result);
    })
})

router.put('/admin/users/update', tokenUtils.checkIfTokenIsValid, (req, res) => {
    adminController.updateUser(req.body, function(err, result){
        res.send(result);
    }, (er) => {
        res.send({message : "An error occured."});
    })
})

router.put('/admin/companies/add', tokenUtils.checkIfTokenIsValid, (req, res) => {
    adminController.createCompany(req.body, function(err, result){
        res.send(result);
    }, (er) => {
        res.send({message : "An error occured."});
    })
})

router.put('/admin/companies/update', tokenUtils.checkIfTokenIsValid, (req, res) => {
    adminController.updateCompany(req.body, function(err, result){
        res.send(result);
    }, (er) => {
        res.send({message : "An error occured."});
    })
})

router.put('/admin/advertisement/create', tokenUtils.checkIfTokenIsValid, (req, res) => {
    adminController.createAdvertisement(req.body, function(err, result){
    }, (er) => {
        res.send({message : "An error occured."});
    })
})

router.put('/admin/advertisement/update', tokenUtils.checkIfTokenIsValid, (req, res) => {
    adminController.updateAdvertisement(req.body, function(err, result){
    }, (er) => {
        res.send({message : "An error occured."});
    })
})

router.get('/table', (req, res) => {
    res.send("SET FOREIGN_KEY_CHECKS=0; CREATE TABLE `user` (`id` int(11) NOT NULL AUTO_INCREMENT, `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL, `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL, `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL, `roles` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)', PRIMARY KEY (`id`), UNIQUE KEY `UNIQ_8D93D649F85E0677` (`username`), UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`)) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;")
})

module.exports = router;