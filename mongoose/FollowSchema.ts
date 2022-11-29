/**
 * @file CRUD operations using
 * mongoose schema in the follow collection
 */

import mongoose, {Schema} from "mongoose";
import Follow from "../models/Follow";
/**
* @typedef Follow is the follow operation done
* @property {ObjectId[]} userFollowed is the user id of being followed
* @property {ObjectId[]} userFollowing is the user id of user following
*/
const FollowSchema = new mongoose.Schema<Follow>({
    userFollowed: {type: Schema.Types.ObjectId, ref: "UserModel"},
    userFollowing: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "follow"});
export default FollowSchema;