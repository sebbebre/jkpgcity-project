const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

app.get("/", (req, res) => {

    const data = fs.readFileSync("../database/stores.json");
    const stores = JSON.parse(data);

    let html = `
    <html>
    <head>
        <title>Stores in Jönköping</title>
        <style>
            body{font-family:Arial;background:#f4f4f4;padding:40px}
            h1{text-align:center}
            .store{background:white;padding:15px;margin:10px;border-radius:8px}
        </style>
    </head>
    <body>  
    <h1>Stores in Jönköping</h1>
    `;

    stores.forEach(store => {
        html += `
        <div class="store">
            <b>${store.name}</b><br>
            District: ${store.district || "Unknown"}<br>
            <a href="https://${store.url}" target="_blank">Website</a>
        </div>
        `;
    });

    html += "</body></html>";

    res.send(html);

});

app.get("/stores", (req, res) => {

    const data = fs.readFileSync("../database/stores.json");
    const stores = JSON.parse(data);

    let html = `
    <html>
    <head>
        <title>Stores in Jönköping</title>
        <style>
            body{font-family:Arial;background:#f4f4f4;padding:40px}
            h1{text-align:center}
            .store{background:white;padding:15px;margin:10px;border-radius:8px}
        </style>
    </head>
    <body>  
    <h1>Stores in Jönköping</h1>
    `;

    stores.forEach(store => {
        html += `
        <div class="store">
            <b>${store.name}</b><br>
            District: ${store.district || "Unknown"}<br>
            <a href="https://${store.url}" target="_blank">Website</a>
        </div>
        `;
    });

    html += "</body></html>";

    res.send(html);

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});