/**
 * @file CRUD operations using
 * mongoose model in the follow collection
 */


 import mongoose from "mongoose";
 import FollowSchema from "./FollowSchema";
 const FollowModel = mongoose.model("FollowModel", FollowSchema);
 export default FollowModel;