const express = require('express');
const apiRouter = require('./routes/routes');



const app = express();

// Middleware setup
app.use(express.json());
app.use("/api", apiRouter);

// Your code goes here

// Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});