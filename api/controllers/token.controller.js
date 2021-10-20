var db = require('../config/db.js')


var tokenController = {
    setNewToken : function(token, userId, callback){
        return db.query("UPDATE `people` SET `token`='"+token+"' WHERE `id` LIKE "+userId+"", callback);
    },
    getUserToken : function(userId, callback){
        return db.query("SELECT `token` FROM `people` WHERE `id` LIKE "+userId+" ;", callback);
    }
}

module.exports = tokenController