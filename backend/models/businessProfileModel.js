import mongoose from "mongoose";

const businessProfileSchema = new mongoose.Schema({
    owner :{type:String , required:true, index:true},
    businessName :{type:String , required:true},
    email :{type:String , required:false, default: "", trim:true, lowercase:true},
    phone :{type:String , required:false, default: ""},
    address :{type:String , required:false, default: ""},
    gst:{type:String , required:false, default: ""}

    //for images
    
})