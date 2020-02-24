var express=require("express")
var bodyParser=require("body-parser")
var mysql=require("mysql")

var app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

var conn=mysql.createConnection({

host: "localhost",
user:"root",
password:"",
database:"survey"

})

conn.connect((err)=>{

    if(err)
    {
        console.log(err)
    }
    else
    console.log("connected to database")
})

app.use(express.static(__dirname))


app.get("/",function(req,res){

res.send(__dirname+'/index.html')
})

app.post("/",function(req,res){

var sql="insert into result values(null,'"+req.body.name+"','"+req.body.hostel+"','"+req.body.time+"','"+req.body.meal+"','"+req.body.prefer+"','"+req.body.quality+"','"+req.body.option+"')"
conn.query(sql,function(err){

if(err) throw err

console.log("Inserted")

})


})



app.listen(4000,function(){

console.log("running at port 4000")





})


