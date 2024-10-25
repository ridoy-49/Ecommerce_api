import brandsModel from "../model/brandsModel.js";
import productsModel from "../model/productsModel.js";
import categoriesModel from "../model/categoriesmodel.js";
import ProductSliderModel from "../model/slidersModel.js"
import mongoose from "mongoose";
import reviewsModel from "../model/reviewsModel.js";
const ObjectId = mongoose.Types.ObjectId;


export const brandListService= async ()=>{
    try{
        const data=await brandsModel.find()
        return {status:"SUCCESS",data:data}
    }
    catch (err){
        return {status:"ERROR",msg:err.toString()}
    }
}

export const catlistService= async ()=>{
    try{
        const data=await categoriesModel.find()
        return {status:"SUCCESS",data:data}
    }
    catch (err){
        return {status:"ERROR",msg:err.toString()}
    }
}

export const sliderService= async ()=>{
    try{
        const data=await ProductSliderModel.find()
        return {status:"SUCCESS",data:data}
    }
    catch (err){
        return {status:"ERROR",msg:err.toString()}
    }
}

export const productlistByCatService= async (req)=>{
    try{
        let categoryID=new ObjectId(req.params.categoryID)
        let matchStage={$match:{categoryID:categoryID}}

        let joinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let joinWithBrandStage={$lookup: {from: "brands",localField:"brandID",foreignField:"_id",as:"brand"}}

        let unwindBrandStage={$unwind:"$brand"}
        let unwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data=await productsModel.aggregate([
            matchStage,
            joinWithCategoryStage,
           joinWithBrandStage,
            unwindBrandStage,
            unwindCategoryStage,
            ProjectionStage
        ])
        return {status:"SUCCESS",data:data}
    }
    catch (err){
        return {status:"ERROR",msg:err.toString()}
    }
}

export const productlistBybrandService= async (req)=>{
    try{
        let brandID=new ObjectId(req.params.brandID);
        let matchStage={$match:{brandID:brandID}}

        let joinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let joinWithBrandStage={$lookup: {from: "brands",localField:"brandID",foreignField:"_id",as:"brand"}}

        let unwindBrandStage={$unwind:"$brand"}
        let unwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data=await productsModel.aggregate([
            matchStage,
            joinWithBrandStage,
            joinWithCategoryStage,
           unwindBrandStage,
           unwindCategoryStage,
          ProjectionStage
        ])
        return {status:"SUCCESS",data:data}
    }
    catch (err){
        return {status:"ERROR",msg:err.toString()}
    }
}

export const productlistByremarkService= async (req)=>{
    try{
        let remark=req.params.remark;
        let matchStage={$match:{remark:remark}}

        let joinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let joinWithBrandStage={$lookup: {from: "brands",localField:"brandID",foreignField:"_id",as:"brand"}}

        let unwindBrandStage={$unwind:"$brand"}
        let unwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data=await productsModel.aggregate([
            matchStage,
            joinWithBrandStage,
            joinWithCategoryStage,
            unwindBrandStage,
            unwindCategoryStage,
            ProjectionStage
        ])
        return {status:"SUCCESS",data:data}
    }
    catch (err){
        return {status:"ERROR",msg:err.toString()}
    }
}

export const productDetailsbyIdService= async (req)=>{
    try{
        let ID=new ObjectId(req.params.ID);
        let matchStage={$match:{_id:ID}}

        let joinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let joinWithBrandStage={$lookup: {from: "brands",localField:"brandID",foreignField:"_id",as:"brand"}}
        let joinWithDetailsStage={$lookup: {from: "productdetails",localField:"_id",foreignField:"productID",as:"detail"}}

        let unwindBrandStage={$unwind:"$brand"}
        let unwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}
        let data=await productsModel.aggregate([
            matchStage,
            joinWithBrandStage,
            joinWithCategoryStage,
            joinWithDetailsStage,
            unwindCategoryStage,
            unwindBrandStage,
            ProjectionStage
        ])
        return {status:"SUCCESS",data:data}
    }
    catch (err){
        return {status:"ERROR",msg:err.toString()}
    }
}

export const productListByKerwordService=async (req)=>{
    try {
        let keywod=req.params.keywod
        let regex={"$regex":keywod,"$options":"i"}
        let searchParams=[{title:regex},{shortDes:regex}]
        let matchStage={$match:{$or:searchParams}}
        let joinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let joinWithBrandStage={$lookup: {from: "brands",localField:"brandID",foreignField:"_id",as:"brand"}}
        let unwindBrandStage={$unwind:"$brand"}
        let unwindCategoryStage={$unwind:"$category"}
        let data=await productsModel.aggregate([
            matchStage,
            joinWithCategoryStage,
            joinWithBrandStage,
            unwindBrandStage,
            unwindCategoryStage
        ])
        return {status:"SUCCESS",data:data}
    }catch (err){
        return {status:"ERROR",msg:err.toString()}
    }
}

export const productListByReviewService=async (req)=>{
    try {
        let ID=new ObjectId(req.params.ID);
        let matchStage={$match:{productID:ID}}
        let joinWithProfilesStage={$lookup:{from:"profiles",localField:"userID",foreignField:"userID",as:"profile"}};
        let unwindProfilesStage={$unwind:"$profile"}
        let projectionStage={$project:{'productID':1,'profile.cus_name':1,rating:1}}
        let data=await reviewsModel.aggregate([
            matchStage,
            joinWithProfilesStage,
            unwindProfilesStage,
            projectionStage
        ])
        return {status:"SUCCESS",data:data}
    }
    catch (err){
        return {status:"ERROR",msg:err.toString()}
    }
}

