require("dotenv").config({ path: '.env' });

var express = require("express");
var cors = require("cors");
var path = require("path");
var port = process.env.port;
var host = process.env.host;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var avisosRouter = require("./src/routes/avisos");
var quizRouter = require("./src/routes/quiz");
var dashRouter = require("./src/routes/dash");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/avisos", avisosRouter);
app.use("/quiz", quizRouter);
app.use("/dash", dashRouter);

app.listen(port, function () {
    console.log(`Server On .: http://${host}:${port} :. \n\n`);
});