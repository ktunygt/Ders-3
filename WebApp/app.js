// Express uygulaması ve gerekli modüller
const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require("./data/db");

// CORS (Cross-Origin Resource Sharing) yapılandırması
app.use(cors({
    origin: "*", // Her yerden gelen istekleri kabul et
    methods: "GET POST PUT DELETE" // İzin verilen HTTP metotları
}));

// URL verisi (form data) için express'in urlencoded parser'ını kullan
app.use(express.urlencoded({ extended: true }));

// EJS (Embedded JavaScript) şablon motorunu kullan (html motoru)
app.set("view engine", "ejs");

require("./models/user");

(async () => {
    await sequelize.sync({ alter: true });
})();

const router = require("./controllers/index");

// Router'ı uygulamaya dahil et
app.use(router);

// Uygulamayı 3000 portunda çalıştır
app.listen(3000, () => {
    console.log("Uygulama çalıştı");
});
