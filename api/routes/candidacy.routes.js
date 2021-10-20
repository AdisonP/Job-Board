const express = require('express');
const router = express.Router();
const candidacyController = require('../controllers/candidacy.controller');
const tokenUtils = require('../middlewares/token.utils.js');

router.post('/applied/all',tokenUtils.checkIfTokenIsValid, (req, res) => {
    candidacyController.getAllUserCandidacy(req.body.id, function(err, result){
        res.send(result);
    })
})

router.post('/applied/apply',tokenUtils.checkIfTokenIsValid, (req, res) => {
    candidacyController.chekCandidacy(req.body.id_user, req.body.id_adv, function(err, result){
        if(result[0] != null || result[0] != undefined){
            res.send({message : " You have already applied for this position."});
        } else {
            candidacyController.apply(req.body, function(err, result){
                res.send({message : "Your application has been taken into account."});
            })
        }
    }, (er) => {
        res.send({message : "An error occured."});
    })
})

router.post('/applied/delete', tokenUtils.checkIfTokenIsValid, (req, res) => {
    candidacyController.deletCandidacy(req.body, function(err, result){
        if (result == null || result == undefined){
            res.send({message : "The candidacy has been deleted."});
        } else {
            candidacyController.apply(req.body, function(err, result){
                res.send({message : "An error occurred: the candidacy was not deleted."});
            })
        }
        res.send(result);
    }, (er) => {
        res.send({message : "An error occured."});
    })
})

router.post('/company/advertisements/applied/user', (req, res) => {
    candidacyController.getAllUserByCandidacyId(req.body.id, function(err, result){
        res.send(result);
    })
})

module.exports = router;