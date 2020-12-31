var express = require("express");
var apiController = require("../Controller/apiController");
var router = express.Router();
router.get("/getClient", (req, res) => {
  console.log("get request");
  apiController
    .executeCommand("netstat -a |grep 4396")
    .then((result) => {
      clientList = apiController.getClientList(result);
      res.send(clientList);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
