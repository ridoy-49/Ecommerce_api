import usersModel from "../model/usersModel.js"
import SendEmail from "../utility/EmailUtility.js";
import {TokenEncode} from "../utility/tokenUtility.js";
import profilesModel from "../model/profilesModel.js";

export const loginService = async(req)=>{
    try{
        let {email}=req.body
        let code =Math.floor(1000000+Math.random()*9000000);
        let EmailText= `Your varification code is ${code}`
        let EmailSub="Email Verification"
       // await SendEmail(email,EmailText,EmailSub);
        await usersModel.updateOne({email:email},{$set:{otp:code},upsert:true});
        return {status:"Success",msg:"Code sent successfully."};
    }
    catch (err){
        return {status:"ERROR",msg:err.toString()};
    }
}

export const VerifyLoginService= async (req)=>{
    try{
        let {email,otp}=req.body
        let total=await usersModel.find({email: email,otp: otp})
        if (total.length===1){
            let user_id=await usersModel.find({email: email,otp: otp}).select("_id")
            let token=TokenEncode(email,user_id[0]["_id"].toString())
            await usersModel.updateOne({email:email},{$set:{token:0}})
            return {status:"success", message:"Valid OTP",token:token}
        }
    }catch (err){
        return {status:"ERROR",msg:err.toString()};
    }
}

export const CreateProfileService= async (req)=>{
    try{
        let user_id=req.headers.user_id;
        let reqBody=req.body
        reqBody.UserID=user_id;
        let data=await profilesModel.updateOne({userID:user_id},{$set:reqBody},{upsert:true});
        return {status:"Success",message:"Profile successfully Created",data:data};

    }catch (err){
        return {status:"ERROR",msg:err.toString()};
    }
}

export const UpdateProfileService= async (req)=>{
    try{
        let user_id=req.headers.user_id;
        let reqBody=req.body
        reqBody.UserID=user_id;
        let data=await profilesModel.updateOne({userID:user_id},{$set:reqBody},{upsert:true});
        return {status:"Success",message:"Profile Update successfully.",data:data};
    }catch (err){
        return {status:"ERROR",msg:err.toString()};
    }
}

export const ReadProfileService= async (req)=>{
    try{
        let user_id=req.headers.user_id;
        let data=await profilesModel.findOne({userID:user_id})
        return {status:"Success",message:"Profile find Successfull",data:data};
    }
    catch (err){
        return {status:"ERROR",msg:err.toString()};
    }

}
