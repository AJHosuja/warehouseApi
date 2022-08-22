var express = require("express");
var router = express.Router();
const usersManagement = require("../models/usersManagement");
const bcrypt = require("bcryptjs");
const loginCRUD = require("../models/login");

router.get("/", (req, response) => {
  usersManagement.getAllUsers((dberr, dbRes) => {
    if (dberr) {
      response.send(dberr);
    } else {
      response.send(dbRes);
    }
  });
});

router.delete("/:id", (req, response) => {
  if (req.params.id) {
    const userid = req.params.id;
    usersManagement.deleteUserById(userid, (dberr, dbRes) => {
      if (dberr) {
        response.send(dberr);
      } else {
        if (dbRes.affectedRows === 1) {
          response.send(true);
        } else {
          response.send(false);
        }
      }
    });
  }
});

router.post("/", (req, response) => {
  if (req.body) {
    const username = req.body.userName;
    const password = req.body.password;
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        response.send(false);
      } else {
        usersManagement.addUser(username, hash, (dberr, dbRes) => {
          if (dberr) {
            response.send(false);
          } else {
            response.send(true);
          }
        });
      }
    });
  }
});

router.post("/resetPass", (req, response) => {
  if (req.body) {
    const id = req.body.id;
    const newPassword = req.body.newPassword;
    bcrypt.hash(newPassword, 10, (err, hash) => {
      if (err) {
        response.send(false);
      } else {
        console.log("hwe");
        usersManagement.resetPass(id, hash, (dberr, dbRes) => {
          if (dberr) {
            response.send(dberr);
          } else {
            if (dbRes.affectedRows === 1) {
              response.send(true);
            } else {
              response.send(false);
            }
          }
        });
      }
    });
  }
});

router.post("/changePass", (req, response) => {
  if (req.body) {
    loginCRUD.getPassWord(req.body.user, (dberr, dbres) => {
      const user = req.body.user;
      if (dberr) {
        response.send(false);
      } else {
        console.log(dbres);
        if (dbres[0]?.password) {
          bcrypt.compare(
            req.body.password,
            dbres[0].password,
            (err, result) => {
              if (result) {
                const newPassword = req.body.newPassword;
                bcrypt.hash(newPassword, 10, (err, hash) => {
                  if (err) {
                    response.send(false);
                  } else {
                    usersManagement.changePassByUserName(
                      user,
                      hash,
                      (dberr, dbRes) => {
                        if (dberr) {
                          response.send(dberr);
                        } else {
                          if (dbRes.affectedRows === 1) {
                            response.send(true);
                          } else {
                            response.send(false);
                          }
                        }
                      }
                    );
                  }
                });
              } else {
                response.send("wrongpassword");
              }
            }
          );
        } else {
          response.send("usernotfound");
        }
      }
    });
  }
});

module.exports = router;
