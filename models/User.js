import mongoose, { mongo } from "mongoose";

const Userschema= new mongoose.Schema(
    {
        firstname:{
            type:String,
            min:2,
            max:50
        },
        lastname:{
            type:String,
          
            min:2,
            max:50
        },
        email:{
            type:String,
            required:true,
            max:50,
            unique: true
        },
        password:{
            type:String,
            required:true,
            min:5,
        },
        picturePath:{
            type: String,
            default:""
        },
        friends:{
            type: Array,
            default:[],
        },
        location:String,
        occupation:String,
        viewedProfile:Number,
        impressions:Number
    },
    {timestamps:true}
)

const User= mongoose.model('User',Userschema);

export default User