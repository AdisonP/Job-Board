var db = require('../config/db.js')

var advertisementController = {
    getAllAdvertisements : function(callback){
        return db.query('SELECT * FROM `advertisements` WHERE 1;', callback);
    },
    addAdvertisement : function(obj, callback){
        return db.query("INSERT INTO `advertisements`(`title`, `description`, `date`, `published`, `companie_id`, `contrat_type`) VALUES ('"+obj.title+"','"+obj.description+"','"+obj.date+"','"+obj.date+"','"+obj.id+"', '"+obj.contrat_type+"')", callback)
    },
    searchAdvertisementsByName : function(search, callback){
        return db.query("SELECT * FROM `advertisements` WHERE title LIKE '%"+search+"%';", callback)
    },
    getLastAdvertisement : function(callback){
        return db.query("SELECT * FROM `advertisements` ORDER BY published DESC ;", callback)
    },
    getAdvertisementById : function(id, callback){
        return db.query("SELECT * FROM `advertisements` WHERE `id` = "+id+" ;", callback)
    },
    getCardAdvertisements : function(callback){
        return db.query("SELECT advertisements.id, advertisements.title,advertisements.description, companies.name, companies.city FROM `advertisements` INNER JOIN companies ON companies.id = advertisements.companie_id;", callback)
    },
    editAdvertisement : function(obj, callback){
        return db.query("UPDATE `advertisements` SET `title`='"+obj.title+"',`description`='"+obj.description+"',`date`='"+obj.date+"',`contrat_type`='"+obj.contrat_type+"', `salary`= "+obj.salary+" WHERE `id` = "+obj.id+";", callback)
    },
    getAdvByCpId : function(id, callback){
        return db.query("SELECT * FROM `advertisements` WHERE `companie_id` = "+id+";", callback);
    }
}

module.exports = advertisementController;