const express = require("express");
const router = express.Router();

router.get("/", (_, res) => {
  res.render("index", { title: "index" });
});

router.get("/home", (_, res) => {
    res.render("home", { title: "home" });
    }
);


module.exports = {
    router, 
}

