var db = require('../config/db.js')

var adminController = {
    getAllAdvertisements : function(callback){
        return db.query('SELECT * FROM `advertisements` WHERE 1;', callback);
    },
    getAllUsers : function(callback){
        return db.query('SELECT * FROM `people` WHERE 1;', callback);
    },
    getAllCompanies : function(callback){
        return db.query('SELECT * FROM `companies`', callback);
    },

    deleteAdvertisementById : function(id, callback){
        return db.query("DELETE FROM `applied` WHERE `advertisement_id` = '"+id+"'; DELETE FROM `advertisements` WHERE `id` = '"+id+"';", callback)
    },
    deleteUserById : function(id, callback){
        return db.query("DELETE FROM `applied` WHERE `people_id` LIKE "+id+"; "+"DELETE FROM `people` WHERE `id` LIKE "+id+";", callback)
    },
    deleteCompanyById : function(id, callback){
        return db.query("DELETE applied FROM applied INNER JOIN advertisements ON advertisements.id = applied.advertisement_id INNER JOIN companies ON companies.id = advertisements.companie_id WHERE companies.id = '"+id+"'; DELETE FROM advertisements WHERE companie_id = '"+id+"'; DELETE FROM companies WHERE id = '"+id+"';", callback)
    },
    createUser : function(obj, callback){
        const role = {"roles": ""+obj.roles.roles+""};
        return db.query("INSERT INTO `people`( `name`, `first_name`, `password`, `email`, `address`, `postal_code`, `city`, `phone`, `birth_date`, `cv`, `website`, `picture`, `gender`, `roles`) VALUES ('"+obj.name+"','"+obj.first_name+"','"+obj.password+"','"+obj.email+"','"+obj.address+"','"+obj.postal_code+"','"+obj.city+"','"+obj.phone+"','"+obj.birth_date+"','"+obj.cv+"','"+obj.website+"','"+obj.picture+"','"+obj.gender+"','"+JSON.stringify(role)+"')", callback);
    },
    updateUser : function(obj, callback) {
        const role = {"roles": ""+obj.roles.roles+""};
        return db.query("UPDATE `people` SET `name`='"+obj.name+"',`first_name`='"+obj.first_name+"',`password`='"+obj.password+"',`email`='"+obj.email+"',`address`='"+obj.address+"',`postal_code`= "+obj.postal_code+",`city`='"+obj.city+"',`phone`= "+obj.phone+",`birth_date`='"+obj.birth_date+"',`cv`= "+obj.cv+",`website`='"+obj.website+"',`picture`='"+obj.picture+"',`gender`='"+obj.gender+"',`roles`='"+JSON.stringify(role)+"' WHERE `id` = "+obj.id+";", callback);
    },
    createCompany : function(obj, callback) {
        const role = {"roles" : "COMPANY"};
        return db.query("INSERT INTO `companies`(`activities`, `postal_code`, `city`, `siret`, `password`, `number_employes`, `website`, `phone`, `email`, `contact_name`, `name`, `roles`) VALUES ('"+obj.activities+"',"+obj.postal_code+",'"+obj.city+"',"+obj.siret+",'"+obj.password+"',"+obj.number_employes+",'"+obj.website+"',"+obj.phone+",'"+obj.email+"','"+obj.contact_name+"','"+obj.name+"','"+JSON.stringify(role)+"');", callback);
    },
    updateCompany : function(obj, callback) {
        const role = {"roles" : "COMPANY"};
        return db.query("UPDATE `companies` SET `activities`='"+obj.activities+"',`postal_code`="+obj.postal_code+",`city`='"+obj.city+"',`siret`="+obj.siret+",`password`='"+obj.password+"',`number_employes`="+obj.number_employes+",`website`='"+obj.website+"',`phone`="+obj.phone+",`email`='"+obj.email+"',`contact_name`='"+obj.contact_name+"',`name`='"+obj.name+"',`roles`='"+JSON.stringify(role)+"' WHERE `id` = "+obj.id+" ;", callback);
    },
    createAdvertisement : function(obj, callback) {
        return db.query("INSERT INTO `advertisements`(`title`, `description`, `date`, `published`, `companie_id`, `contrat_type`) VALUES ('"+obj.title+"','"+obj.description+"','"+obj.date+"','"+obj.published+"',"+obj.companie_id+",'"+obj.contrat_type+"')", callback);
    },
    updateAdvertisement : function(obj, callback) {
        return db.query("UPDATE `advertisements` SET `title`='"+obj.title+"',`description`='"+obj.description+"',`date`='"+obj.date+"',`published`='"+obj.published+"',`companie_id`="+obj.companie_id+",`contrat_type`='"+obj.contrat_type+"' WHERE `id` = "+obj.id+";", callback);
    }

}

module.exports = adminController;