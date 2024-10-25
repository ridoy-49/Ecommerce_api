import {
    productDetailsbyIdService,
    productlistBybrandService,
    productlistByCatService, productListByKerwordService,
    productlistByremarkService, productListByReviewService,
    sliderService
} from "../Service/Productservice.js";



export const ProductListBySlider=async (req,res)=>{
    let data=await sliderService()
    res.json(data)
}
export const ProductListByCategory=async (req,res)=>{
    let result=await productlistByCatService(req)
    return res.json(result)
}
export const ProductListByBrand=async (req,res)=>{
    let result=await productlistBybrandService(req);
    return res.json(result);
}
export const ProductListByRemark=async (req,res)=>{
    let result=await productlistByremarkService(req)
    return res.json(result);
}
export const ProductdetailsByID=async (req,res)=>{
    let result=await productDetailsbyIdService(req)
    return res.json(result)
}
export const ProductListByKeyword=async (req,res)=>{
    let result =await productListByKerwordService(req)
    return res.json(result);
}



export const ProductReviewListByID=async (req,res)=>{
    let result= await productListByReviewService(req)
    return res.json(result)
}
