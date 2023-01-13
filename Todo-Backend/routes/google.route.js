const {Router}=require("express");
const passport=require("passport");
const jwt = require("jsonwebtoken");
const auth=Router();


auth.get('/google',
  passport.authenticate('google', { scope:['email','profile'] }));


auth.get('/google/profile',(req,res)=>{
  if(req.user){
    const {_id,first_name,last_name,email,image}=req.user;

    const token = jwt.sign(
      { user_id:_id, email: email },
      process.env.SECRET_KEY
    );

    res.send({
      mesg:"Authentication Successful",
      token:token,
      name:first_name,
      title:last_name,
      email:email,
      image:image
    })
  
  }
  else{
    res.send({mesg:"Someting went wrong, try again  later"})
  }
})

 auth.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login',successRedirect:'http://localhost:3000/googlecheck'})
  
  );

module.exports=auth
