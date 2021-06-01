const Paint = require('../models/paint');

exports.getPaints = async(req,res) => {
    try{
        res.header('Content-Type','application/json');
        var paint = await Paint.find();
        if(!paint){
            res.status(404);
            res.send({error:"there was an error"});

        } else {
            res.status(200);
            res.send(paint);
        }
    }
    catch(err){
        res.header('Content-Type','application/json');
        res.status(500);
        res.send({error:'threewerror'});
    }
};
exports.getPaint = async(req,res) => {
    try{
        res.header('Content-Type','application/json');
        var paint = await Paint.findOne({paintId: req.params.id}).exec();
        if(!paint){
            res.status(404);
            res.send({error:"there was an error"});

        } else {
            res.status(200);
            res.send(paint);
        }
    }
    catch(err){
        res.header('Content-Type','application/json');
        res.status(500);
        res.send({error:'threewerror'});
    }
}

exports.addPaint = async(req,res) => {
    try{
        res.header('Content-Type','application/json');
        var paint = {
            paintId:req.body.paintId,
            paintName: req.body.paintName,
            paintAmount: req.body.paintAmount,
            paintQuantity : req.body.paintQuantity
        }
        var paintData = new Paint(paint);
        await paintData.save();
            res.status(200);
            res.send(paintData);
        
    }
    catch(err){
        res.header('Content-Type','application/json');
        res.status(500);
        res.send({error:'threewerror'});
    }
}

exports.putPaint = async(req,res) => {
    try{
        let options = { upsert: true, new: true, setDefaultsOnInsert: true };
        let update1 = {$set:{paintQuantity:req.body.paintQuantity}};
        res.header('Content-Type','application/json');
        var paint = await Paint.findOneAndUpdate({paintId:req.body.paintId},update1,options)
            res.status(200);
            res.send(paint);
        
    }
    catch(err){
        res.header('Content-Type','application/json');
        res.status(500);
        res.send({error:'threewerror'});
    }
}

exports.deletePaint = async(req,res) => {
    try{
        res.header('Content-Type','application/json');
        var paint = await Paint.findOneAndDelete({paintId:req.body.paintId});
        if(!paint){
            res.status(404);
            res.send({error:"there was an error"});

        } else {
            res.status(200);
            res.send(paint);
        }
    }
    catch(err){
        res.header('Content-Type','application/json');
        res.status(500);
        res.send({error:'threewerror'});
    }
}