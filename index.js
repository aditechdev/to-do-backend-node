const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');


const user = require('./routes/user');

const app = express();

// Body Parser
app.use(express.json());


// load env vars
dotenv.config({
    path: './config/config.env'
});

const connectDb = require("./config/db")
connectDb();
app.use('/api/v1/users', user);

const PORT = process.env.PORT || '3000';

app.listen(PORT, console.log(
        `Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`
    ),
);


// Handle unhandle promise rejection
process.on('unhandledRejection', (err, Promise) => {
    console.log(`${err.message}`);
    // close server and exit the process
    server.close(
        () => process.exit(1)
    );
});