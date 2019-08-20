const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();

// midware use
app.use(cors());
app.use(express.json());

//connect to mongoab
const uri = process.env.ATLAS_URL
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Mongodb database connection established successfully");
})

const exerciseRouter = require('./routes/exercise');
const userRouter = require('./routes/user');

app.use('/exercise',exerciseRouter)
app.use('/user',userRouter)

const port = process.env.PORT||3000;
app.listen(port, () => {
    console.log(`Server running is runnig on port: ${port}`)
});
 


