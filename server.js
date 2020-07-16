const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const routes = require("./routes/API-routes");

//connect to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sezzlecalc", {
  useNewUrlParser: true,
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build" + "index.html"));
});

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.static("static"));

//API Routes
app.use("/api/calculator", routes);

app.get("/api/calculator/save", function (req, res) {
  console.log(req.body);
  res.json(req.body);
});

app.post("/api/calculator/save", function (req, res) {
  console.log(req.body);
  res.json(req.body);
});

//CORS Headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
