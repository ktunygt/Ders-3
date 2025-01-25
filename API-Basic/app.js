const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require("./data/db");

app.use(cors({
    origin: "*",
    methods: "GET POST PUT DELETE"
}));

app.use(express.json());

require("./models/user");
require("./models/blog");

(async () => {
    await sequelize.sync({ alter: true });
})();

const routes = require("./restAPI/index");
app.use(routes);

const unknownRoute = require("./restAPI/unknownRoute/index");
app.use(unknownRoute);

app.listen(4000, () => {
    console.log("API çalışmakta");
});
