//es6 arrow function
const {response, request}=require("express");
const express= require("express");
const {MongoClient}=require('mongodb')
const cors=require('cors');
const app=express();
app.use(cors())
app.use(express.json())
const uri= "mongodb+srv://chaitanya:kishore06@cluster0.4qbkxjz.mongodb.net/?retryWrites=true&w=majority"
const client=new MongoClient(uri);
client.connect();
const db=client.db("mydb");
const collect=db.collection("my-collection");
//console.log(db)
//console.log(collect)

app.listen( 9091 ,console.log("started at port 9091"));



const x= (a,b)=>{
    a+=10;
    return a+b;
}

/*app.get('/',(req,res)=>{
    res.send('<h1> the answer is'+x(-1,20)+'</h1>');
});*/

app.post('/',(request,response)=>{
    console.log(request.body)
    collect.insertOne(request.body)
    response.send('<h1>saved successfuly</h1>')
})


//console.log(a(10,20));