const db = require("../database");

const product = {
  addProductEAN: function (data, elguide, callback) {
    return db.query(
      "insert into products (productEAN, elguideCode, rack, updater) VALUES (?,?,?,?)",
      [data.productEAN, elguide, data.rack, data.updater],
      callback
    );
  },
  addProductELGUIDE: function (data, ean, callback) {
    return db.query(
      "insert into products (productEAN, elguideCode, rack, updater) VALUES (?,?,?,?)",
      [ean, data.elguideCode, data.rack, data.updater],
      callback
    );
  },
  getProductEAN: function (ean, callback) {
    return db.query(
      "select * from products where productEAN=?",
      [ean],
      callback
    );
  },
  getProductELGUIDE: function (elguide, callback) {
    return db.query(
      "select * from products where elguideCode=?",
      [elguide],
      callback
    );
  },
  getAllELGUIDE: function (callback) {
    return db.query("select elguideCode from products", callback);
  },
  getProductById: function (id, callback) {
    return db.query("delete from products where id=?", [id], callback);
  },
  getAllFromProduct: function (callback) {
    return db.query("SELECT id, productEAN, elguideCode, UPPER(rack) as rack, updateDate, updater FROM products", callback);
  },
  getUpdateRackFromProduct: function (data, callback) {
    return db.query(
      "update products set rack=? where id=?",
      [data.newRack, data.id],
      callback
    );
  },
  getLastFiveUpdates: function (callback) {
    return db.query(
      "SELECT * FROM (SELECT * FROM products ORDER BY id DESC LIMIT 5) AS sub ORDER BY id desc;",
      callback
    );
  },
};

module.exports = product;
