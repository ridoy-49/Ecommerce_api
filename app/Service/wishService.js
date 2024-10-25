import wishlistModel from "../model/wishlistModel.js";
import mongoose from "mongoose";
const ObjectId=mongoose.Types.ObjectId;

export const CreateWishService = async (req)=>{
    try {
        let user_id=new ObjectId(req.headers["user_id"]);
        let {productID}=req.body
        let postJSON={
            productID:productID,
            userID:user_id
        }
        let data=await wishlistModel.updateOne(
            {userID: user_id,productID:productID},
            {$set:postJSON},
            {upsert:true}
        )
        return {status:"Success",message:"Wish successfully Created",data:data};
    }
    catch (err){
        return {status:"ERROR",msg:err.toString()};
    }

}

export const ReadWishService= async (req)=>{
    try {
        let user_id=new ObjectId(req.headers["user_id"]);
        let {productID}=req.body
        let matchStage={$match:{userID:user_id}}
        let joinStageWithDetails={$lookup:{from:"productdetails",localField:"productID",foreignField:"productID",as:"detail"}}
        let data=await wishlistModel.aggregate([
            matchStage,
            joinStageWithDetails
        ])
        return {status:"Success",message:"Read successfully",data:data};
    }
    catch (err){
        return {status:"ERROR",msg:err.toString()};
    }

}

export const DeleteWishService= async (req)=>{
    try {
        let user_id=new ObjectId(req.headers["user_id"]);
        let {productID}=req.body
        let postJSON={
            productID:productID,
            userID:user_id
        }
        let data=await wishlistModel.deleteOne(postJSON)
        return {status:"Success",message:"Delete successfully",data:data};
    }
    catch (err){
        return {status:"ERROR",msg:err.toString()};
    }

}