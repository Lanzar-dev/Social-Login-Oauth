require("dotenv").config();
const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const path = require("path");
const authRoute = require("./routes/auth");
const cors = require("cors");
require("./passport");

const KEY = process.env.KEY;
const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: [KEY],
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api running");
  });
}

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Serve running on port ${PORT}`);
});
