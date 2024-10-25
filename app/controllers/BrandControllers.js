import {brandListService} from "../Service/Productservice.js";

export const BrandList=async (req,res)=>{
    let data= await brandListService()
    return res.json(data)
}