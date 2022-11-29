/**
 * @file bookmark model with tuit id and user id
 */
 import Tuit from "./Tuit";
 import User from "./User";

/**
 * @typedef Bookmark is the bookmark being placed
 * @property bookmarkedTuit id of tuit being passed
 * @property bookmarkedBy id of user being passed
 */

 
 export default interface Bookmark {
     bookmarkedTuit: Tuit,
     bookmarkedBy: User
 };
