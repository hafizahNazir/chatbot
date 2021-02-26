require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";

let app = express();

//config
viewEngine(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

initWebRoutes(app);

let port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log("app is running: " + port);
});


