var db = require('../config/db.js')

var peopleController = {
    getPeopleById : function(id, callback){
        return db.query("SELECT `name`, `first_name`, `email`, `address`, `postal_code`, `city`, `birth_date` FROM `people` WHERE `id` LIKE "+id+" ;", callback);
    }, 
    deletePeopleById : function(id, callback){
        return db.query("DELETE FROM `people` WHERE `id` LIKE "+id+" ;", callback);
    }, 
    updatePeople : function(obj, psw, callback){
        const setPsw = psw ? "`password` = " + psw + ", " : "";
        return db.query("UPDATE `people` SET `name`='"+obj.name+"', "+setPsw+"`first_name`='"+obj.last_name+"',`email`='"+obj.email+"',`address`='"+obj.address+"',`postal_code`="+obj.postal_code+",`city`='"+obj.city+"' WHERE `people`.`id` LIKE "+obj.id+";", callback);
    }
}

module.exports = peopleController;