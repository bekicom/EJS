const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

require("dotenv").config();

// ejs setting
app.set("view engine", "ejs");

app.get("/", (_, res) => {
  res.render("index", { title: "index" });
});

app.get("/home", (_, res) => {
  res.render("home", { title: "home" });
}
);
  
app.get("/signup", (_, res) => {

  res.render("signup", { title: "signup" });
}
);


app.listen(port, console.log("men ishga tshdim"));
