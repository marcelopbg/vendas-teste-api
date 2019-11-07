const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const apiRoutes = (require("./routes"))
var cors = require('cors')

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(apiRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});