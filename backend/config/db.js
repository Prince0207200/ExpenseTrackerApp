const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{});
        console.log("mongodb connected");
    }catch{
        console.log("Error while connecting mongodb",err);
        process.exit(1);
    }
};
module.exports=connectDB;
  