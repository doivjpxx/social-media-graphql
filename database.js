const mongoose = require('mongoose');

require('dotenv').config();

mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true };

(async () => {
    await mongoose.connect('mongodb+srv://phong2410:Phong@2410@graphql-node.veyyw.mongodb.net/graphqlnode?retryWrites=true&w=majority', mongooseOptions, err => {
        if (err) console.error(err);
        else console.log('DB connected on ' + process.env.MONGO_URI)
    })
})
