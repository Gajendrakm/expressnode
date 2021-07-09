const http = require('http')

const server = http.createServer((req,res) => {

    if(req.url ==="/"){
        res.end("This is home page")
    }
    else if(req.url === '/about'){
        res.end("this is about page")
    } else {
        res.end('er page')
    }
    

})

server.listen(5000,()=>{
    console.log('Server Listening on port 5000')
})