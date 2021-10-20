var db = require('../config/db.js')

var authController = {
    register : function(obj, hsdpsw, callback){
        const role = {"roles": "USER"};
        return db.query("INSERT INTO `people`(`name`, `first_name`, `password`, `email`, `roles`) VALUES ('"+obj.name+"','"+obj.first_name+"','"+hsdpsw+"','"+obj.email+"', '"+JSON.stringify(role)+"')", callback)
    },
    registersecret : function(obj, callback){
        const role = {"roles": "SECRET"};
        return db.query("INSERT INTO `people`(`name`, `first_name`, `email`, `phone`, `roles`) VALUES ('"+obj.name+"','"+obj.first_name+"','"+obj.email+"', '"+obj.phone+"', '"+JSON.stringify(role)+"');", callback)
    },
    loginCp : function(obj, callback){
        return db.query("SELECT `id`, `name`, `roles`, `password` FROM `companies` WHERE `email` LIKE '"+obj.email+"';", callback)
    },
    login : function(obj, callback){
        return db.query("SELECT `id`, `name`, `first_name`, `email`, `address`, `postal_code`, `city`, `birth_date`, `roles`, `password` FROM `people` WHERE `email` = '"+obj.email+"';", callback)
    },
    checkMail : function(mail, callback){
        return db.query("SELECT * FROM `people` WHERE email = '"+mail+"';", callback);
    },
    checkMailCp : function(mail, callback){
        return db.query("SELECT * FROM `companies` WHERE email = '"+mail+"';", callback);
    },
    registerCp : function(obj, psw, callback){
        const role = {"roles": "COMPANY"};
        return db.query("INSERT INTO `companies`(`activities`, `postal_code`, `city`, `siret`, `password`, `number_employes`, `website`, `phone`, `email`, `contact_name`, `name`, `roles`) VALUES ('"+obj.activities+"','"+obj.postal_code+"','"+obj.city+"','"+obj.siret+"','"+psw+"','"+obj.number_employes+"','"+obj.website+"','"+obj.phone+"','"+obj.email+"','"+obj.contact_name+"','"+obj.name+"','"+JSON.stringify(role)+"');", callback);
    }
}

module.exports = authController;
