//import json server

const jsonserver = require('json-server')

//create server

const mediaPlayerServer = jsonserver.create()

//create middleware to convert to json format
const middleware =jsonserver.defaults()
//import db,json file
const router = jsonserver.router("db.json")

//set port from the server

const PORT = 3000 || process.env.PORT

//server use middleware
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//listen()
mediaPlayerServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
    
})



