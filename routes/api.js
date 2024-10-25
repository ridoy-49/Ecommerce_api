import express from 'express';
const router = express.Router();
import * as UserControllers from '../app/controllers/UserControllers.js';
import * as BrandControllers from '../app/controllers/BrandControllers.js';
import * as CartListControllers from '../app/controllers/CartListControllers.js';
import * as InvoiceControllers from '../app/controllers/InvoiceControllers.js';
import * as ProductControllers from '../app/controllers/ProductControllers.js';
import * as WishlistControllers from '../app/controllers/WishlistControllers.js';
import * as CategoryControllers from '../app/controllers/CategoryControllers.js';
import {BrandList} from "../app/controllers/BrandControllers.js";
import {Login} from "../app/controllers/UserControllers.js";
import {ProductdetailsByID, ProductListBySlider} from "../app/controllers/ProductControllers.js";
import Authentication from "../app/middleware/Authentication.js";

//users
router.post("/Login", UserControllers.Login);
router.post("/VerifyLogin",UserControllers.VerifyLogin);
router.post("/CreateUserProfile",Authentication,UserControllers.CreateUserProfile);
router.post("/UpdateUserProfile",Authentication,UserControllers.UpdateUserProfile);
router.get("/ReadUserProfile",Authentication,UserControllers.ReadUserProfile);

//Brands
router.get("/BrandList", BrandControllers.BrandList);

//Cart

router.post("/addCart",Authentication, CartListControllers.addCart);
router.get("/readCart",Authentication,CartListControllers.readCart);
router.post("/updateCart",Authentication,CartListControllers.updateCart);
router.delete("/removeCart",Authentication,CartListControllers.removeCart);
//Category

router.get("/CategoryList", CategoryControllers.CategoryList);

//InvoiceControllers

router.post("/CreateInvoice",Authentication, InvoiceControllers.CreateInvoice);
router.get("/ReadInvoiceDetails",Authentication,InvoiceControllers.ReadInvoiceDetails);
router.get("/ReadInvoiceList",Authentication,InvoiceControllers.ReadInvoiceList);

//Product
router.get("/ProductListBySlider", ProductControllers.ProductListBySlider);
router.get("/ProductListByCategory/:categoryID", ProductControllers.ProductListByCategory);
router.get("/ProductListByBrand/:brandID",ProductControllers.ProductListByBrand);
router.get("/ProductListByRemark/:remark",ProductControllers.ProductListByRemark);
router.get("/ProductdetailsByID/:ID",ProductControllers.ProductdetailsByID);
router.get("/ProductListByKeyword/:keywod",ProductControllers.ProductListByKeyword);
router.get("/ProductReviewListByID/:ID",ProductControllers.ProductReviewListByID);
//Review
router.post("/CreateProductReview",Authentication,UserControllers.CreateProductReview);
router.post("/UpdateProductReview",Authentication,UserControllers.UpdateProductReview);

//Wishlist
router.post("/CreateWish",Authentication, WishlistControllers.CreateWish);
router.get("/ReadWishList",Authentication,WishlistControllers.ReadWishList);
router.delete("/RemoveWish",Authentication,WishlistControllers.RemoveWish);

export default router;





