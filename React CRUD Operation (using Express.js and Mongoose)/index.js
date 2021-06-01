const express = require('express');
const cors = require('cors');
const bodyParser =require('body-parser');
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/paints';
const app = express();
const port =8000;
const corsOptions = {
    origin : "*"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

const paintRouter = require('./routes/paintRoute');


app.use('/paint',paintRouter);
app.listen(port,()=> {
    try{
        mongoose.connect(url,
            {
                useNewUrlParser:true,
                useUnifiedTopology: true,
                useFindAndModify: false
            })
    }
    catch(err){
        console.error(`there was an error`);
    }
})