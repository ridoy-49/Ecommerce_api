import {CreatecartService, ReadcartService, RemovecartService, UpdatecartService} from "../Service/cartService.js";

export const addCart=async (req,res)=>{
    let result=await CreatecartService(req)
    return res.json(result)
}
export const readCart=async (req,res)=>{
    let result=await ReadcartService(req)
    return res.json(result)
}
export const updateCart=async (req,res)=>{
    let result=await UpdatecartService(req)
    return res.json(result)
}
export const removeCart=async (req,res)=>{
    let result=await RemovecartService(req)
    return res.json(result)
}
