const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Connected to database successfully");
    } catch (err) {
        console.error("Could not connect to the database!", err);
    }
};
