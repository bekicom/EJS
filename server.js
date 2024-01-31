const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const port = process.env.PORT || 4000;

require("dotenv").config();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ejs setting
app.set("view engine", "ejs");

// mongodbni ishga tshurish
const { connect } = require("./userdata/userdb");
connect();
// routers import
const aboutRouter = require("./router/aboutroute");
const contactRouter = require("./router/contactroute");
const homeRouter = require("./router/homeroute");
const signinRouter = require("./router/signinrouter");
const signupRouter = require("./router/signuprouter");

app.use(homeRouter.router.path, homeRouter.router.router);
app.use(aboutRouter.router.path, aboutRouter.router.router);
app.use(contactRouter.router.path, contactRouter.router.router);
app.use(signinRouter.router.path, signinRouter.router.router);
app.use(signupRouter.router.path, signupRouter.router.router);

// port listen

app.listen(port, console.log("men ishga tshdim"));
