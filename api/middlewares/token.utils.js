const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();


var tokenUtils = {
    generateToken : function(result){
        var user = {name : result.name, first_name: result.first_name, email: result.email}
        return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    },
    checkIfTokenIsValid : function(req, res, next){
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]
    
        if(token == null) return res.sendStatus(401);
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if(err != null){
                return res.send({error : "Session Expired"});
            }else{
                next();
            }
        })
    }
}

module.exports = tokenUtils

