const mongoose = require('mongoose');
require('./database');

require('dotenv').config();

mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true };

(async () => {
    await mongoose.connect(process.env.MONGO_URI, mongooseOptions, err => {
        if (err) console.error(err);
        else console.log('DB connected on ' + process.env.MONGO_URI)
    })
})
