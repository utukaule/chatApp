import express from "express";
import { Server } from "socket.io";
import {createServer} from "http";
const port = 3000;

const app = express();
// creating server
const server =  createServer(app);

// io means we are taking about circuit
const io = new Server(server)

app.get("/",(req,res)=>{
    res.send("hello world")
})

// creating circuit here and socket means individul socket
io.on("connection",(socket)=>{
    console.log("User connected");
  

})

app.listen(port,()=>{
    console.log(`App is running at port ${port}`)
})