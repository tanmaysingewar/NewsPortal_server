const Advertisement = require("../models/advertisement")


exports.addAdvertisement = (req,res) => {
    const {title,date} = req.body;
    Advertisement.deleteMany({})
    .exec((err,result) => {
        if(err){
            return res.json({
                status : false,
                err : err
            })
        }

        const newAdvertisement = new Advertisement({
            title,
            date
        })
        newAdvertisement.save((err,advertisement) => {
            if(err || !advertisement){
                return res.json({
                    status : false,
                    err: err
                })
            }
            return res.json({
                status : true,
                advertisement
            })
        })
    })
}

exports.getAdvertisement = (req,res) => {
    Advertisement.find({})
    .exec((err,advertisements) => {
        if(err){
            return res.json({
                status : false,
                err : err
            })
        }
        return res.json({
            status : true,
            advertisements
        })
    })
}




