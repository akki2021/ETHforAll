const express=require('express');
const cors=require('cors');

const app=express();
var corsOptions={
    origin:"https://localhost:5001"
};
var corsOptions={
    origin:"https://localhost:5001"
};
app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.json({
        message:"Welcome to voting system"
    });
});
const port=process.env.PORT || 5000;
//Route
app.use('/',require('./routes/index.js'));
app.use('/users',require('./routes/users.js'))

app.listen(port,()=>{
    console.log(`server started ${port}`)
}
    );

const db=require("./models");
const Role=db.role;



