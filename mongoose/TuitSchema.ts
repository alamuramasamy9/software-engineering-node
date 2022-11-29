/**
 * @file CRUD operations using
 * mongoose schema in the tuit collection
 */

import mongoose, {Schema} from "mongoose";
import Tuit from "../models/Tuit";
/**
* @typedef Tuit is the tweet
* @property {ObjectId[]} tuit is the tuit id of tuit
* @property {ObjectId[]} postedBy is the user id of user posting tuit
*/

const TuitSchema = new mongoose.Schema<Tuit>({
    tuit: {type: String, required: true},
    postedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
    postedOn: {type: Date, default: Date.now}
}, {collection: "tuits"});
export default TuitSchema;