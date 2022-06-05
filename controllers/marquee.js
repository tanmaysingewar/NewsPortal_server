const Marquee = require('../models/marquee')

exports.addMarquee = (req,res) => {
    const {title} = req.body;
    Marquee.deleteMany({})
    .exec((err,result) => {
        if(err){
            return res.json({
                status : false,
                err : err
            })
        }

        const newMarquee = new Marquee({
            title
        })
        newMarquee.save((err,marquee) => {
            if(err || !marquee){
                return res.json({
                    status : false,
                    err : err
                })
            }
            return res.json({
                status : true,
                marquee
            })
        })
    })
}

exports.getMarquee = (req,res) => {
    Marquee.find({})
    .exec((err,marquees) => {
        if(err){
            return res.json({
                status : false,
                err : err
            })
        }
        return res.json({
            status : true,
            marquees
        })
    })
}