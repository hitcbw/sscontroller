const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 挂载路由
const routeInitializer = require("./routes");
routeInitializer(app);
console.log("start listen");
app.listen(8888);
