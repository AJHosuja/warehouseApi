var express = require('express');
var router = express.Router();
const productCRUD = require('../models/product');
const eanElguideCRUD = require('../models/eanElguide');
//const dotenv = require('dotenv');

router.post('/', (req, response) => {

    if (!req.body.elguideCode) {
        eanElguideCRUD.selectWhereEan(req.body.productEAN, (dberr, dbRes) => {
            if (dberr) {
                response.send(dberr);
            } else {
                if (dbRes[0]) {
                    productCRUD.addProductEAN(req.body, dbRes[0].elguide, (dberr, dbRes) => {
                        if (dberr) {
                            response.send(dberr);
                        } else {
                            console.log(dbRes);
                            response.send(true);
                        }});
                } else {
                    response.send('elguideCodeErr');
                }

            }
        });
    }

    if (!req.body.productEAN) {
        eanElguideCRUD.selectWhereElguide(req.body.elguideCode, (dberr, dbRes) => {
            if (dberr) {
                response.send(dberr);
            } else {
                if (dbRes[0]) {
                    productCRUD.addProductELGUIDE(req.body, dbRes[0].ean, (dberr, dbRes) => {
                        if (dberr) {
                            response.send(dberr);
                        } else {
                            console.log(dbRes);
                            response.send(true);
                        }});
                } else {
                    response.send('elguideCodeErr');
                }

            }
        });
    }
})


router.get('/ean/:ean', (req, response) => { 
    if(req.params.ean){
        productCRUD.getProductEAN(req.params.ean, (dberr, dbRes) => { 
            if (dberr) {
                response.send(dberr);
            } else {
                console.log(dbRes);
                response.send(dbRes);
            }
        });
    };
});

router.get('/elguide/:elguide', (req, response) => { 
    if(req.params.elguide){
        productCRUD.getProductELGUIDE(req.params.elguide, (dberr, dbRes) => { 
            if (dberr) {
                response.send(dberr);
            } else {
                console.log(dbRes);
                response.send(dbRes);
            }
        });
    };
});

router.delete('/:id', (req, response) => { 
    if(req.params.id){
        productCRUD.getProductById(req.params.id, (dberr, dbRes) => { 
            if (dberr) {
                console.log(dberr);
                response.send(false);
            } else {
                console.log(dbRes);
                response.send(true);
            }
        });
    };
});

router.get('/', (req, response) => { 
        productCRUD.getAllELGUIDE((dberr, dbRes) => { 
            if (dberr) {
                response.send(dberr);
            } else {
                console.log(dbRes);
                response.send(dbRes);
            }
        });
});

router.get('/eanelguide', (req, response) => { 
    eanElguideCRUD.getEanElguide((dberr, dbRes) => { 
        if (dberr) {
            response.send(dberr);
        } else {
            console.log(dbRes);
            response.send(dbRes);
        }
    });
});

router.get('/all', (req, response) => { 
    productCRUD.getAllFromProduct((dberr, dbRes) => { 
        if (dberr) {
            response.send(dberr);
        } else {
            console.log(dbRes);
            response.send(dbRes);
        }
    });
});

module.exports = router;