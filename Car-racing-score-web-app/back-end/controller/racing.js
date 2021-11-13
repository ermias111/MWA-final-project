const Racing = require('../model/racing')


async function handleGetAll(req, res, next){
    Racing.find({}).sort({date: -1}).exec((err, data) => {
        if(err){
            return next(err);
        }else{
            res.json(data);
        }
    })
}

async function handleDelete(req, res, next){
    const { id } = req.query;
    Racing.remove({_id: id}, (err, data) => {
        if(err){
            return next(err);
        }else{
            res.json(data);
        }
    })
}


async function handleGetById(req, res, next){
    const { id } = req.query;
    Racing.findOne({_id: id}, (err, data) => {
        if(err){
            return next(err);
        }else{
            res.send("Data deleted successfully");
        }
    })

}
async function handlePost(req, res, next){
    let newRacing = new Racing(req.body);
    newRacing.save((err, data) => {
        if(err) {
            return next(err);
        }else{
            res.send("Data inserted");
        }
    })
}

module.exports = {
    handleGetAll,
    handleGetById,
    handlePost,
    handleDelete
}