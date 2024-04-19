var express = require ('express')
var cors = require('cors')
require('dotenv').config()

var app= express()
app.use(express.json())
app.use(cors())
var jwt = require('jsonwebtoken');
const multer  = require('multer')
app.use(express.static("public/uploads"))


const bcrypt = require('bcrypt');
const saltRounds = 10;




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname )
    }
  })
  
  const upload = multer({ storage: storage })




// Connection 

require ("./db/connection")

// Register

const Register = require ("./Model/register")

// Admin Registration

const adminRegister = require ("./Model/adminRegister")


/// Contact///

const Contact = require ("./Model/contact")

//// Book Appointement ///

const  Bookappointment =require ("./Model/bookappointment")


/// user /////////
app.post("/register", async (req,res)=>{

   const {name,email,mobile,password, conpassword,address, subject, message} = req.body
    const preUser= await Register.findOne({email})
    console.log(preUser)

    if(!preUser){
        if(password===conpassword){
            const passHash = await bcrypt.hash(password, saltRounds)
            const conpassHash = await bcrypt.hash(conpassword, saltRounds)
            const preResult = await new Register({name,email,mobile,password:passHash, conpassword:conpassHash,address, message,subject })
        const result= await preResult.save()
        res.send({message:"Register Suceessfully"})

        }
        else{
            res.send({message:"Your password and conpassword not match"})
        }
        
    }
    else{
        res.send({message:"All ready register in our Database"})
    }
})

// get 

   app.get("/fetch", async (req,res)=>{
             const result = await Register.find()
             
                res.send({message: result})
         
   })
// get by id

app.get("/singleidfetch/:id", async (req,res)=>{
      const result = await Register.findById({_id:req.params.id})
      res.send({message: result})
})



// delete

  app.delete("/delete/:id", async (req,res)=>{
         const result = await Register.deleteOne({_id:req.params.id})
      
         if(result.length>0){
            res.send({message: "Deleted"})
         }
         else{
            res.send({message: "No data"})
         }
  })


// UPDATE

app.put("/update/:id", async(req,res)=>{
    const {name,email,mobile,password, conpassword,address, subject, message} = req.body
    const passHash = await bcrypt.hash(password, saltRounds)
    const conpassHash = await bcrypt.hash(conpassword, saltRounds)
    const result= await Register.updateOne({_id:req.params.id},{$set:{name,email,mobile,password:passHash, conpassword:conpassHash,address, message,subject}})
    res.send({message: "Update Success", UpdateData: result })
})

/// admin Registration ///

app.post("/admin-register", upload.single('profile'), async (req,res)=>{

    const {name,email,password, conpassword} = req.body
     const preUser= await adminRegister.findOne({email})
     console.log(preUser)
 
     if(!preUser){
         if(password===conpassword){
             const passHash = await bcrypt.hash(password, saltRounds)
             const conpassHash = await bcrypt.hash(conpassword, saltRounds)
             const photo= typeof req.file != 'undefined' ? req.file.filename : null;
             const preResult = await new adminRegister({name,email,password:passHash, conpassword:conpassHash,profile:photo })
         const result= await preResult.save()
         res.send({message:" Admin Register Suceessfully"})
 
         }
         else{
             res.send({message:"Your password and conpassword not match"})
         }
         
     }
     else{
         res.send({message:"Already register in our Database"})
     }
 })


//////  Admin user login /////

app.post("/admin-login", async (req, res) => {
    const { email, password } = req.body
    if (email && password) {
        const userEmail = await adminRegister.findOne({ email })
        // console.log(userEmail)
        if (userEmail !== null) {
            const passMatch = await bcrypt.compare(password, userEmail.password)
            if (userEmail.email == email && passMatch) {
                var token = jwt.sign( {userEmail}, process.env.JWTKEY);
                res.send({ message: "Login Sucessfully", userEmail,token })
              
            }
            else {
                res.send({ message: "Your email and password not match" })
            }
        }
        else {
            res.send({ message: "You are not register user" })
        }
    }
    else {
        res.send({ message: "All field are Require" })
    }
})


/// Contact /////////

app.post("/contact", async (req,res)=>{

    const {name,email, subject, message} = req.body
     const preUser= await Contact.findOne({email})
     console.log(preUser)
 
     if(!preUser){
         
         const preResult = await new Contact({name,email, message,subject })
         const result= await preResult.save()
         res.send({message:"Thank you for contact Us"})
 
     }
     else{
         res.send({message:"All ready register in our Database"})
     }
 })

/// Contact Fetch

 app.get("/contactfetch", async (req,res)=>{
      const result = await Contact.find()
      res.send({message:result})

 })

 ///Contact delete 

 app.delete("/contactdelete/:id",async (req,res)=>{
    const result= await Contact.deleteOne()
    res.send({message: "Deleted"})


 } )



//// Book appointment ////

app.post("/bookappointment", async (req,res)=>{

    const {name,email,service, date, message} = req.body
     const preUser= await Bookappointment.findOne({email})
     console.log(preUser)
 
     if(!preUser){
        
        
             const preResult = await new Bookappointment({name,email,service, date, message })
         const result= await preResult.save()
         res.send({message:"Thank your for Book an appointment"})
         
     }
     else{
         res.send({message:"All ready register in our Database"})
     }
 })
 
 /// Appointment Fetch ///


 app.get("/appointfetch", async (req,res)=>{
    const result = await Bookappointment.find()
    res.send({message:result})

})

/// Appointment delete  /////

app.delete("/appointdelete/:id",async (req,res)=>{
  const result= await Bookappointment.deleteOne()
  res.send({message: "Deleted"})


} )



const connectDB = require('./db/connection.js')

const startServer = async () => {
    try {
      connectDB();
      app.listen(8000, () => console.log("Server started on port 8000"));
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer();