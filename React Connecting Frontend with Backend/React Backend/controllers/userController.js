const User = require('./../models/user')

exports.addUser = async(req,res) => {
    try{
        res.header('Content-Type','application/json');
       
        var userData = new User(req.body.user);
        await userData.save();
            res.status(200);
            res.send(userData);
        
    }
    catch(err){
        res.header('Content-Type','application/json');
        res.status(500);
        res.send({error:'threew error'});
    }
}