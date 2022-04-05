const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}))


app.get('/',function(req,res){
  res.sendFile(___dirname +'/index.html')
})

app.post('/', function(req,res){

let name = req.body.name;
let email = req.body.email;
let number = req.body.number;
let textArea = req.body.textarea;


res.send('The following information is inserted by you' +name+ +email+ +number+ +textArea);


})


app.listen(3000,function(){
  console.log('Server started on port 3000');
})
