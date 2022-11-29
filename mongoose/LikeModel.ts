/**
 * @file CRUD operations using
 * mongoose model in the like collection
 */

 import mongoose from "mongoose";
 import LikeSchema from "./LikeSchema";
 const LikeModel = mongoose.model("LikeModel", LikeSchema);
 export default LikeModel;