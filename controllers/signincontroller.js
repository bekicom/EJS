const db = require("../db");

const getsinginPage = async (req, res) => {
  res.render("signin", {
    title: "signin page",
    path: "/",
    error: "",
  });
};

const getPostpage = async (req, res) => {
  try {
    const { login, password } = req.body;
    let findlogin = db.find((user) => user.login === login);
    if (!findlogin) {
      throw new Error("bunday login yoki parol bazada yo'q");
    }
    let findpassword = db.find((user) => user.password === password);
    if (!findpassword) {
      throw new Error("bunday login yoki parol bazada yo'q");
    }

    db.push(req.body);
    res.redirect("/");
  } catch (error) {

    res.render("signin", {

      title: "signin page",
      path: "/signin",
      error: error.message || "xato sms",
    });
  }
};

module.exports = {
  getsinginPage,
  getPostpage,
};
