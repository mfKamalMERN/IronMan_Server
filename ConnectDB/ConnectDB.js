const mongoose = require('mongoose');

const ConnectDB = () => {
    mongoose.connect(`mongodb+srv://mfk:test123@portfolio.lsuj3bc.mongodb.net/IronMan_Quotes?retryWrites=true&w=majority&appName=Portfolio`)
        .then(console.log(`DB connected`))
        .catch(er => console.log(er))
}

module.exports = ConnectDB;