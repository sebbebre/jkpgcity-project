const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());

app.use(express.static("../frontend"));

app.get("/stores", (req, res) => {

    const data = fs.readFileSync("../database/stores.json");
    const stores = JSON.parse(data);

    res.json(stores);

});



app.listen(3000, () => {
    console.log("Server running on port 3000");
});