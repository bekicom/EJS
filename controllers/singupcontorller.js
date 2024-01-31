// user model import
const { Usermodel } = require("../userdata/userdb");

// bcrypt import
const bcrypt = require("bcrypt");

const getsingupPage = async (_, res) => {
  try {
    res.render("signup", {
      title: "signup page",
      path: "/signup",
      error: "",
    });
  } catch (error) {
    res.render("signup", {
      title: "signup page",
      path: "/signup",
      error: error,
    });
  }
};

const getPostpage = async (req, res) => {
  try {
    const { username, login, password } = req.body;

    if (!(username && login && password)) {
      throw new Error("barcha maydonlarni to'ldiring");
    }

    const findUser = await Usermodel.findOne({
      username: username,
    });

    if (findUser) {
      throw new Error("bunday username bazada bor");
    }

    if (password.length < 4) {
      throw new Error("parol 4 ta belgidan kam");
    }

    // passwordni hash qilish
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt).catch((err) => {
      console.error("passwordni hash qilib bolmadi", err);
    });

    const user = { username, login, password: hashPassword };
    await Usermodel.create(user);

    // agar registerdan otsa login pagega yuboramiz
    res.cookie("login", login);
    res.redirect("/signin");
  } catch (error) {
    console.error("Error:", error);
    res.render("signup", {
      title: "signup page",
      path: "/signup",
      error: error.message || "xato sms",
    });
  }
};

module.exports = {
  getsingupPage,
  getPostpage,
};
