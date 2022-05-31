const db = require('../database');

const eanElguide = {
    selectWhereEan: function (data, callback) {
        return db.query('select elguide from eanelguide where ean=?'
            , [data], callback);
    },
    selectWhereElguide: function (data, callback) {
        return db.query('select ean from eanelguide where elguide=?'
            , [data], callback);
    }
};

module.exports = eanElguide;