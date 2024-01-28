const { Usermodel } = require("../userdata/userdb");
// import bcrypt
const bcrypt = require("bcrypt");

const getsinginPage = async (_, res) => {
  res.render("signin", {
    title: "signin page",
    path: "/",
    error: "",
  });
};

const getPostpage = async (req, res) => {
  try {
    const { login, password } = req.body;

    // Shart berish
    if (!(login && password)) {
      throw new Error("Barcha maydonlarni to'ldiring");
    }

    // Bazadan loginni topish
    const user = await Usermodel.findOne({ login });

    if (!user) {
      throw new Error("Bunday login bazada yo'q");
    }

    // Parolni tekshirish
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Parol xato");
    }

    res.redirect("/");
  } catch (error) {
    res.render("signin", {
      title: "signin page",
      path: "/signin",
      error: error.message || "Xato SMS",
    });
  }
};

module.exports = {
  getsinginPage,
  getPostpage,
};
