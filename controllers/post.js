const Post = require("../models/post");
const date = require('date-and-time');
const now = new Date();

exports.createNews = (req,res) => {
    const {title,news,name} = req.body
    const post = new Post({
        title : title,
        news : news,
        date : date.format(now, 'ddd, MMM DD YYYY HH:mm:ss'),
        name : name
    })

    post.save((err , user) =>{
        if(err || !user){
            return res.status(400).json({
                success : false,
                message : 'Not able to save in DB',
                err : err
            })
        }
        
        return res.json({
           success : true,
           message : "Post is created successfully"
        })
    })
}

exports.createComment = (req,res) => {
    const _id = req.query.p_id
    const {comment,name} = req.body

    console.log(_id)

    Post.findOneAndUpdate({_id : _id},{
        $push : { comments : {
            comment : comment, 
            name : name
        }}
    },{
    new : true})
    .exec((err,post) => {
        if(err || !post){
            return res.json({
                status : false,
                err: err
            })
        }
        return res.json({
            post,
            success : true
        })
    })
}

exports.getComments = (req,res) => {
    const p_id = req.query.p_id;
    console.log(p_id)

    Post.findById(p_id)
    .exec((err,post) => {
        if(err || !post){
            return res.json({
                ststus : false,
                err : err
            })
        }
        return res.json({
            post
        })
    })
}


exports.deletePost = (req,res) => {
    const up_id = req.query.up_id;

    Post.findByIdAndDelete(up_id)
    .exec((err, post) => {
        if(err || !post){
            return res.json({
                status : false,
                err : err
            })
        }
        return res.json({
            status : true
        })
    })
}


exports.getAllPost = (req,res) => {
    Post.find({})
    .sort([["_id" ,'descending']])
    .select("title news date name")
    .exec((err,post) => {
        if(err || !post){
            return res.json({
                status : false,
                err : err
            })
        }
        return res.json({
            status : true,
            post : post
        })
    })
}