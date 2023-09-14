const express= require('express')
const router = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const secretKey='ainan77'

router.get('/',(req,res)=>{
    res.send("from Api routes")
})

 router.post('/register',async (req,res)=>{
    try {
        let userData = req.body
        let user = await User.create(userData)
        let token =jwt.sign({_id:user._id },secretKey);
        console.log(`${user} is registered`)
        res.status(200).send({ message: "User registered successfully",user, token });
      } catch (error) {
        console.log(`Error in registering ${error}`)
        res.status(500).send(`Error in registering ${error}`)
    }
   
 })

 router.post('/login',async(req,res)=>{
    try {
        let userData = req.body
        let userDetails = await  User.findOne({email : userData.email})
        if(!userDetails){
            res.status(401).send({message:'Invalid Email'})
        }
        else if(userData.password!== userDetails.password ){
            res.status(401).send({message:"Incorrect Password"})
        }else{
          let token =jwt.sign({ _id:userDetails._id},secretKey );
            res.status(200).send({message:"User Logged-In Successfully",userDetails,token})
        }
     } catch (error) {
        console.log(`Error in login ${error}`)
        res.status(500).send(`Error in login ${error}`)
    }
})

const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized Request");
  }
  
  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).send("Unauthorized Request");
  }
  
  try {
    const payload = jwt.verify(token, secretKey);
    if (!payload) {
      return res.status(401).send("Unauthorized Request");
    }
    
    req.userId = payload.subject;
    next();
  } catch (error) {
    return res.status(401).send("Unauthorized Request");
  }
};



router.get('/events',(req,res)=>{
    let events=[
        {
          "id": 1,
          "name": "John",
          "age": 30
        },
        {
          "id": 2,
          "name": "Alice",
          "age": 25
        },
        {
          "id": 3,
          "name": "Bob",
          "age": 28
        },
        {
          "id": 4,
          "name": "Eve",
          "age": 22
        },
        {
          "id": 5,
          "name": "Charlie",
          "age": 35
        },
        {
          "id": 6,
          "name": "Grace",
          "age": 29
        },
        {
          "id": 7,
          "name": "David",
          "age": 26
        },
        {
          "id": 8,
          "name": "Emma",
          "age": 31
        },
        {
          "id": 9,
          "name": "Frank",
          "age": 23
        },
        {
          "id": 10,
          "name": "Helen",
          "age": 27
        }
      ]

      res.json(events)
})
router.get('/specials',verifyToken,(req,res)=>{
    let special=[
       
        {
          "id": 11,
          "name": "Isaac",
          "age": 32
        },
        {
          "id": 12,
          "name": "Linda",
          "age": 24
        },
        {
          "id": 13,
          "name": "Michael",
          "age": 34
        },
        {
          "id": 14,
          "name": "Olivia",
          "age": 20
        },
        {
          "id": 15,
          "name": "Paul",
          "age": 33
        },
        {
          "id": 16,
          "name": "Sarah",
          "age": 28
        },
        {
          "id": 17,
          "name": "Tom",
          "age": 29
        },
        {
          "id": 18,
          "name": "Victoria",
          "age": 26
        },
        {
          "id": 19,
          "name": "William",
          "age": 30
        },
        {
          "id": 20,
          "name": "Zoe",
          "age": 25
        }
      ]

      res.json(special)
})

module.exports= router