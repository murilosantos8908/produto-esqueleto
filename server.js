const app = require("./app");
const port = process.env.PORT;
dotenv.config();
const dotenv = require("dotenv");   

app.listen(port, () => {
    console.log("servidor rodando em http://localhost:${port}");
});