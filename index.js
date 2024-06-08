const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const bodyParser = require("body-parser");
const database = require("./config/database");
database.connect();
const app = express();
const port = process.env.PORT;
const jwt = require("jsonwebtoken");

app.use(express.json());

// parse application/json
app.use(bodyParser.json());

//// CORS security API
// app.use(cors({
//   origin: 'http://xyz.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }));

const routesApiV1 = require("./v1/routes/index.route");

routesApiV1(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
