const Racing = require('../model/racing')


async function handleGetAll(req, res, next){
    try{
        await Racing.find({}).sort({date: -1}).exec((err, data) => {
            if(err){
                return next(err);
            }else{
                res.json(data);
            }
        })
    }catch(err){
        console.log(err);
    }
}

async function handleDelete(req, res, next){
    const { id } = req.params;
    try{
        await Racing.deleteOne({_id: id}, (err, data) => {
            if(err){
                return next(err);
            }else{
                res.json(data);
            }
        })
    }catch(err){
        console.log(err);
    }
}


async function handleGetById(req, res, next){
    const { id } = req.params;
    try{
        await Racing.findOne({_id: id}, (err, data) => {
            if(err){
                return next(err);
            }else{
                console.log(data)
                res.json(data);
            }
        })
    }catch(err){
        console.log(err);
    }

}
async function handlePost(req, res, next){
    try{
        let newRacing = new Racing(req.body);
        await newRacing.save((err, data) => {
            if(err) {
                return next(err);
            }else{
                res.json({ status: "success", payload: data });
            }
        })
    }catch(err){
        console.log(err);
    }
}


async function handleAddResult(req, res, next){
    const { id } = req.params
    try{
        await Racing.updateOne({_id: id}, {
            $push: {result: {
                $each: [req.body],
                $sort: {rank: 1}
            }}
        }, (err, data) => {
            if(err) {
                return next(err);
            }else{
                res.json({ status: "success", payload: data });
            }
        })
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    handleGetAll,
    handleGetById,
    handlePost,
    handleDelete,
    handleAddResult
}