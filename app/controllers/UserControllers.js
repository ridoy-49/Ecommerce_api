import {
    CreateProfileService,
    loginService,
    ReadProfileService,
    UpdateProfileService,
    VerifyLoginService
} from "../Service/userService.js";
import {CreateReviewService} from "../Service/ReviewService.js";

export const Login=async (req,res)=>{
    let result=await loginService(req);
    console.log(result);
    return  res.json(result);
}
export const VerifyLogin=async (req,res)=> {
    let result = await VerifyLoginService(req)
    return res.json(result);
}
export const CreateUserProfile= async (req,res)=>{
    let result=await CreateProfileService(req)
    return res.json(result);
}
export const UpdateUserProfile=async (req,res)=>{
    let result=await UpdateProfileService(req)
    return res.json(result);
}
export const ReadUserProfile=async (req,res)=>{
    let result=await ReadProfileService(req)
    return res.json(result);
}


export const CreateProductReview=async (req,res)=>{
    let result=await CreateReviewService(req)
    return res.json(result);
}
export const UpdateProductReview=async (req,res)=>{
    let result=await CreateReviewService(req)
    return res.json(result);
}

