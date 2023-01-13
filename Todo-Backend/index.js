require("dotenv").config();
require("./config/googleStrategy")


const connection=require("./config/db");
const express=require("express");
const app=express();
const cors=require("cors");
const passport=require("passport")
const session = require("express-session");

app.use(cors({
  origin:"http://localhost:3000",
  methods:"GET,PUT,POST,DELETE,PATCH",
  credentials:true
}))


app.use(
  session({
      secret:process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: false
  })
);

app.use(passport.initialize())
app.use(passport.session());
// app.use(cookieSession({name:"session",keys:['cyberwolve'],maxAge:24*60*60*100}));
// app.use(passport.session());
app.use("/images",express.static("images"))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT=process.env.PORT || 8080
const userRouter=require("./routes/user.route")
const todoRouter=require("./routes/todo.route");
const googleRouter=require("./routes/google.route")


app.use("/user",userRouter)
app.use("/todo",todoRouter)
app.use("/auth",googleRouter)

app.listen(PORT,async()=>{
    try{
      await connection ;
      console.log("Connected to database")
    }
    catch(err){
      console.log(err);
      console.log("Couldn't connect to database")
    }

    console.log(`Server is running in PORT ${PORT}`)
})