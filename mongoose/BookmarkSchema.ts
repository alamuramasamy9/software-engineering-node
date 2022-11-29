/**
 * @file CRUD operations using
 * mongoose schema in the bookmark collection
 */

import mongoose, {Schema} from "mongoose";
import Bookmark from "../models/Bookmark";
/**
* @typedef Bookmark is the bookmark being placed
* @property {ObjectId[]} bookmarkedTuit id of tuit being passed
* @property {ObjectId[]} bookmarkedBy id of user being passed
*/

const BookmarkSchema = new mongoose.Schema<Bookmark>({
    bookmarkedTuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
    bookmarkedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "bookmark"});
export default BookmarkSchema;