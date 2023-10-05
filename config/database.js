let mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL);

mongoose.connection
    .on('open', () => console.log("Database is connected successfully!"))
    .on('error', (error) => console.log(`DB Failed: ${error}`))