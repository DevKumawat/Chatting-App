const { connect } = require("getstream")
const bcrypt  = require("bcrypt");
const crypto = require("crypto");
// const {error, log    } = require("console")
const StreamChat = require('stream-chat').StreamChat;

require("dotenv").config();


const api_key =process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const api_id = process.env.STREAM_APP_ID;

// console.log(api_id , api_key , api_secret);


const signup = async( req , res)=>{
    try {
        const {fullName , userName , password , phoneNumber} = req.body
        
        const userId = crypto.randomBytes(16).toString("hex")

        const serverClient = connect(api_key,api_secret,api_id)

         const hashedPassword =await bcrypt.hash(password , 10)
         const token = serverClient.createUserToken(userId) 
        
         res.status(200).json({token , fullName , userName , userId , hashedPassword , phoneNumber})
        
    } catch (error) {
      
        res.status(500).json({message : error})
    }
}
const login = async ( req,res)=>{
    try {

        const {userName, password} = req.body;
        const serverClient = connect(api_key,api_secret, api_id)

        const client = new StreamChat.getInstance(api_key , api_secret)

        const { users } = await client.queryUsers({ name : userName });
        // console.log(users);
        // console.log("hello");
        
        if(!users.length){
            return res.status(400).json({message:"User does not exists"})
        }
        
        const success = await bcrypt.compare(password , users[0].hashedPassword)

        const token = serverClient.createUserToken(users[0].id)

        if(success){
            res.status(200).json({token , fullName:users[0].fullName , userName , userId : users[0].id})
        }else{
            res.status(500).json({message : "invalid credentials"})
        }

    } catch (error) {
        res.status(500).json({message : error})
    }

}

module.exports = {signup , login}
