import mongoose from "mongoose"
const UserSchema = new mongoose.Schema(
    {
        email:{type:String,unique:true,required:true,lowercase:true},
        otp:{type:String,required:true}
    },
    {
        timestamps: true,
        versionKey:false
    }
)
const usersModel=mongoose.model("users",UserSchema);
export default usersModel;