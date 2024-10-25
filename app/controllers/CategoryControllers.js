import {catlistService} from "../Service/Productservice.js";

export const CategoryList=async (req,res)=>{
    let data=await catlistService()
    return res.json(data)
}