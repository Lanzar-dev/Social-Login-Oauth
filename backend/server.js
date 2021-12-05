require("dotenv").config();
const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const authRoute = require("./routes/auth");
const cors = require("cors");
require("./passport");

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["lanzar"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Serve running on port ${PORT}`);
});
