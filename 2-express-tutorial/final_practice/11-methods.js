const express = require('express')
const app = express()
let { people } = require('./data')

//static assets
app.use(express.static('./methods-public'))
//parse from data
app.use(express.urlencoded({ extended: false }))
//parse json
app.use(express.json())

app.get('/api/people',(req,res) => {
    res.status(200).json({ success:true, dat: people})
})

app.post('/api/people',(req,res) => {
    const { name } = req.body
    if(!name){
        return res
        .status(400)
        .json({ sucess: false, msg:'please provide name value'})
    }
    res.status(201).json({sucess:true,person:name})
})

app.post('/api/postname/people',(req,res) =>{
    const { name } = req.body
    if(!name){
        return res.status(400).json({sucess:false,msg:'please provide name value'})
    }
    res.status(201).json({sucess:true,data:[...people,name]})
})

app.listen(5000,() => {
    console.log('server is listening on port 5000....')
})