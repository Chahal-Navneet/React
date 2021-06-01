const express = require('express');
const cors = require('cors');
const bodyParser =require('body-parser');
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/users';
const app = express();
const port =8000;
const corsOptions = {
    origin : "*"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
const userRouter =require('./routes/userRoute');
app.use('/user',userRouter);

app.listen(port,()=> {
    try{
        mongoose.connect(url,
            {
                useNewUrlParser:true,
                useUnifiedTopology: true
            })
    }
    catch(err){
        console.error(`there was an error`);
    }
})