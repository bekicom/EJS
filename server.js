const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

require("dotenv").config();

// ejs setting
app.set("view engine", "ejs");
// routers import
const aboutRouter = require("./router/aboutroute");
const contactRouter = require("./router/contactroute");
const homeRouter = require("./router/homeroute");

app.use(homeRouter.router.path, homeRouter.router.router);
app.use(aboutRouter.router.path, aboutRouter.router.router);
app.use(contactRouter.router.path, contactRouter.router.router);
// 404 page



app.listen(port, console.log("men ishga tshdim"));
