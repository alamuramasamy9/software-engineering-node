/**
 * @file CRUD operations using
 * mongoose model in the user collection
 */

 import mongoose from "mongoose";
 import UserSchema from "./UserSchema";
 const UserModel = mongoose.model("UserModel", UserSchema);
 export default UserModel;