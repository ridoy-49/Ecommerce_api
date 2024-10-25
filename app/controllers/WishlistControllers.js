import {CreateWishService, DeleteWishService, ReadWishService} from "../Service/wishService.js";

export const CreateWish=async (req,res)=>{
    let result=await CreateWishService(req);
    res.json(result);
}
export const ReadWishList=async (req,res)=>{
    let result=await ReadWishService(req);
    return res.json(result);
}
export const RemoveWish=async (req,res)=>{
    let result=await DeleteWishService(req);
    return res.json(result);
}

