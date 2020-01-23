const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

const userRoutes = require("./routes/users");
const apiRoutes = require("./routes/api");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

const spyChicken = (req, res, next) => {
  console.log("MWAHAHAHA", req.method, req.cookies, req.path);

  if (req.path !== "/users" && req.path !== "/") {
    res.redirect("/");
  } else {
    next();
  }
};

app.use(spyChicken);
app.use("/users", userRoutes);
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => console.log(`Express server running on port ${port}`));
