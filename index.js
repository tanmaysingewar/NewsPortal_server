const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http')


const socketIo = require('socket.io')

require('dotenv').config()

const app = express();

//Connecting to MONGODB (Locally)
mongoose.connect( process.env.MONGO_CONN_SERVER,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>{
    console.log('DB IS CONNECTED')
})

//Importing route
const userRoutes = require("./routes/user")
const postRoutes = require("./routes/post")
const serviceRoutes = require("./routes/service")

//middlewares
app.use(bodyParser.json())
app.use(cors())

app.use("/api",userRoutes)
app.use("/api",postRoutes)
app.use("/api",serviceRoutes)


const server = http.createServer(app)

const io = socketIo(server,{ 
    cors: {
      origin: "*"
    }
}) //in case server and client run on different urls

io.on('connection',(socket)=>{
    console.log('client connected: ',socket.id)
    
    socket.join('clock-room')
    
    socket.on('disconnect',(reason)=>{
      console.log(reason)
    })
  })

setInterval(()=>{
    // io.to('clock-room').emit('time', new Date());
},1000)

app.post('/sendNotification',(req,res)=>{
    const data = req.body;
    console.log(data)
    io.to('clock-room').emit('time', `${data.title}`);
    res.status(200).send({})
})

// Port 
const port = process.env.PORT || 8080

const PORT = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log('SERVER IS RUNNING AT',port)
})

server.listen(PORT, err=> {
    if(err) console.log(err)
    console.log('Server running on Port ', PORT)
  })