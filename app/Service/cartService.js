import cartsModel from "../model/cartsModel.js";
import mongoose from "mongoose";
import wishlistModel from "../model/wishlistModel.js";
const ObjectId=mongoose.Types.ObjectId;


export const CreatecartService = async (req)=>{
    try {
        let user_id=new ObjectId(req.headers["user_id"]);
        let {productID,color,qty,size}=req.body
        let postJSON={
            productID:productID,
            userID:user_id,
            color:color,
            qty:qty,
            size:size
        }
        let data=await cartsModel.create(postJSON)
        return {status:"Success",message:"Cart successfully Created",data:data};
    }
    catch (err){
        return {status:"ERROR",msg:err.toString()};
    }

}
export const ReadcartService = async (req)=>{
    try {
        let user_id=new ObjectId(req.headers["user_id"]);
        let matchStage={$match:{userID:user_id}};
        let JoinWithProduct={$lookup:{from:"products",localField:"productID",foreignField:"_id",as:"product"}};
        let data=await cartsModel.aggregate([
            matchStage,
            JoinWithProduct
        ]);
        return {status:"Success",message:"Cart successfully read",data:data};
    }
    catch (err){
        return {status:"ERROR",msg:err.toString()};
    }

}
export const UpdatecartService = async (req)=>{
    try {
        let user_id=new ObjectId(req.headers["user_id"]);
        let {ID,color,qty,size}=req.body
        let postJSON={
            color:color,
            qty:qty,
            size:size
        }
        let data=await cartsModel.updateOne({"_id":ID},postJSON)
        return {status:"Success",message:"Cart successfully Updated",data:data};
    }
    catch (err){
        return {status:"ERROR",msg:err.toString()};
    }

}
export const RemovecartService = async (req)=>{
    try {
        let user_id=new ObjectId(req.headers["user_id"]);
        let {ID}=new ObjectId(req.body.ID)
        let data=await cartsModel.deleteOne(ID)
        return {status:"Success",message:"Cart successfully Deleted",data:data};
    }
    catch (err){
        return {status:"ERROR",msg:err.toString()};
    }

}