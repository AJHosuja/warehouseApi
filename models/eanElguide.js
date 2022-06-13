const db = require('../database');

const eanElguide = {
    selectWhereEan: function (data, callback) {
        return db.query('select elguide from eanelguide where ean=?'
            , [data], callback);
    },
    selectWhereElguide: function (data, callback) {
        return db.query('select ean from eanelguide where elguide=?'
            , [data], callback);
    },
    getEanElguide: function (callback) {
        return db.query('select * from eanelguide'
            , callback);
    },
    insertIntoEanElguide: function (data, callback) {
        return db.query('INSERT INTO eanelguide (ean, elguide) VALUES (?,?)'
            , [data.productEAN , data.elguideCode], callback);
    }
};

module.exports = eanElguide;