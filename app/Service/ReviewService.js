import reviewsModel from "../model/reviewsModel.js";
import mongoose from "mongoose";
import wishlistModel from "../model/wishlistModel.js";
let ObjectId=mongoose.Types.ObjectId;

export const CreateReviewService = async (req)=>{
    try {
        let user_id=new ObjectId(req.headers["user_id"]);
        let {productID,des,rating}=req.body
        let postJSON={
            des:des,
            rating:rating
        }
        let data=await reviewsModel.updateOne(
            {userID: user_id,productID:productID},
            {$set:postJSON},
            {upsert:true}
        )
        return {status:"Success",message:"Review successfully Created",data:data};
    }
    catch (err){
        return {status:"ERROR",msg:err.toString()};
    }

}

