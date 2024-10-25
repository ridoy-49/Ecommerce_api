export const CreateInvoice=async (req,res)=>{
    try {
        return res.json({status:"Success",msg:"BrandList"});
    }
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}
export const ReadInvoiceDetails=async (req,res)=>{
    try {
        return res.json({status:"Success",msg:"BrandList"});
    }
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}
export const ReadInvoiceList=async (req,res)=>{
    try {
        return res.json({status:"Success",msg:"BrandList"});
    }
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}