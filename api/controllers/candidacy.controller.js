var db = require('../config/db.js')


var candidacyController = {
    getAllUserCandidacy : function(id, callback){
        return db.query("SELECT applied.id, advertisements.title, advertisements.description, advertisements.contrat_type, applied.motivation_people, companies.activities, companies.city, companies.number_employes, companies.activities FROM `advertisements` INNER JOIN `applied` ON `advertisements`.`id` = `applied`.`advertisement_id` INNER JOIN `companies` ON `advertisements`.`companie_id` = `companies`.id WHERE `applied`.`people_id` LIKE "+id+";", callback)
    },
    apply : function(obj, callback){
        return db.query("INSERT INTO `applied`(`advertisement_id`, `people_id`, `motivation_people`) VALUES ('"+obj.id_adv+"','"+obj.id_user+"','"+obj.motivation+"');", callback)
    },
    chekCandidacy : function(idUser, idCand, callback){
        return db.query("SELECT `id` FROM `applied` WHERE `people_id` = "+idUser+" AND `advertisement_id` = "+idCand+";", callback);
    },
    searchCandidacyByName(obj, callback){
        return db.query("SELECT * FROM `applied` RIGHT JOIN `advertisements` ON `applied`.`advertisement_id` = `advertisements`.`id` WHERE `advertisements`.`title` LIKE '%"+obj.search+"%'OR `advertisements`.`description` LIKE '%"+obj.search+"%' AND `applied`.`people_id` = "+obj.idUser+";", callback)
    },
    deletCandidacy(obj, callback){
        return db.query("DELETE FROM `applied` WHERE `id` LIKE "+obj.id+" ;", callback)
    },
    getAllUserByCandidacyId : function(id, callback){
        return db.query("SELECT `applied`.`id`, `people`.`name`, `people`.`first_name`, `people`.`email`, `people`.`cv`, `applied`.`motivation_people` FROM applied INNER JOIN advertisements ON advertisements.id = applied.advertisement_id INNER JOIN people ON people.id = applied.people_id WHERE advertisements.id = "+id+";", callback);
    }
    

}

module.exports = candidacyController;