const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

require("dotenv").config()

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.ikkis.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

    console.log("Banco de dados conectado com sucesso!");
}

main().catch((err) => console.log(err));

module.exports = main;