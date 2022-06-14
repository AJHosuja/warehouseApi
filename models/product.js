const db = require('../database');

const product = {
  addProductEAN: function (data, elguide, callback) {
    return db.query('insert into products (productEAN, elguideCode, rack, updater) VALUES (?,?,?,?)'
      , [data.productEAN, elguide, data.rack, data.updater], callback);
  },
  addProductELGUIDE: function (data, ean, callback) {
    return db.query('insert into products (productEAN, elguideCode, rack, updater) VALUES (?,?,?,?)'
      , [ean, data.elguideCode, data.rack, data.updater], callback);
  },
  getProductEAN: function (ean, callback) {
    return db.query('select * from products where productEAN=?'
      , [ean], callback);
  },
  getProductELGUIDE: function (elguide, callback) {
    return db.query('select * from products where elguideCode=?'
      , [elguide], callback);
  },
  getAllELGUIDE: function (callback) {
    return db.query('select elguideCode from products'
      , callback);
  },
  getProductById: function (id, callback) {
    return db.query('delete from products where id=?'
      , [id], callback);
  },
  getAllFromProduct: function (callback) {
    return db.query('select * from products'
      , callback);
  },
  getUpdateRackFromProduct: function (data ,callback) {
    console.log(data.newRack);
    console.log(data.id);
    return db.query('update products set rack=? where id=?',
      [data.newRack, data.id], callback);
  }
};

module.exports = product;