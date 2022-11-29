/**
 * @file CRUD operations using
 * mongoose schema in the like collection
 */

import mongoose, {Schema} from "mongoose";
import Like from "../models/Likes";
/**
* @typedef Like is the like being posted
* @property {ObjectId[]} tuit tuit id of tuit being liked
* @property {ObjectId[]} likedBy user id of user liking tuit
*/
const LikeSchema = new mongoose.Schema<Like>({
    tuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
    likedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "likes"});
export default LikeSchema;