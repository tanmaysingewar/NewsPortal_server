const HeadNews = require('../models/headNews')
const date = require('date-and-time');
const now = new Date();


exports.createHeadNews = (req,res) => {
    const {title,news,image} = req.body
    const headNews = new HeadNews({
        title : title,
        news : news,
        date : date.format(now, 'ddd, MMM DD YYYY'),
        image : image
    })

    headNews.save((err , headNews) => {
        if(err || !headNews){
            return res.status(400).json({
                success : false,
                message : 'Not able to save in DB',
                err : err
            })
        }
        
        return res.json({
           success : true,
           message : "HeadNews is created successfully"
        })
    })
}

exports.getHeadNews = (req,res) => {
    HeadNews.find({})
    .sort([["_id" ,'descending']])
    .exec((err,headNews) => {
        if(err){
            return res.json({
                status : false,
                err : err
            })
        }
        return res.json({
            status : true,
            headNews
        })
    })
}