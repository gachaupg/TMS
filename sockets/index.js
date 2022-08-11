import express  from 'express'
import {Server} from 'socket.io'
import http from 'http'
import cors from 'cors'
const app =express();

app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
cors:{
  origin:'http://localhost:3000',
  methods:["GET","POST"],
}


});

server.listen(3001, ()=>{
  console.log('sever is running');
})