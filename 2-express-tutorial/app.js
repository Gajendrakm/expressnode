//const app = require('express')();

const express = require('express')
const app = express()

//setup static and middleware
//static asset are the files that server does not have to do 
//any changes
app.use(express.static('./public'))

app.get('/',(req,res)=>{
    console.log('user hit the resource')
    res.status(200).send('About Page')
})
app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})

app.all('*',(req,res) => {
    res.status(404).send('<h1>Resource not found</h1>')
})


app.listen(5000,()=>{
    console.log('server is listening on port 5000...')
})          