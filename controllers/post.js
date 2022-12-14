const Post = require("../models/post");
const date = require('date-and-time');
const now = new Date();
const socketIo = require('socket.io')



exports.createNews = (req,res) => {
    const {title,news,name,catagory} = req.body
    const post = new Post({
        title : title,
        news : news,
        date : date.format(now, 'ddd, MMM DD YYYY'),
        name : name,
        catagory : catagory
    })

    post.save((err , post) => {
        if(err || !post){
            return res.status(400).json({
                success : false,
                message : 'Not able to save in DB',
                err : err
            })
        }

        // io.to('clock-room').emit('time', title);
        
        return res.json({
           success : true,
           message : "Post is created successfully",
           post
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
    .select("title news date name catagory")
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

exports.getPostByCatagory = (req,res) => {
    const catagory = req.query.catagory;

    // console.log(catagory);

    Post.find({catagory : catagory})
    .sort([["_id" ,'descending']])
    .select("title news date name catagory")
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
};