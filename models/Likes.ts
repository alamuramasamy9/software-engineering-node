/**
 * @file like model with tuit id and user id
 */
 import Tuit from "./Tuit";
 import User from "./User";
/**
 * @typedef Like is the like being posted
 * @property tuit tuit id of tuit being liked
 * @property likedBy user id of user liking tuit
 */
 
 export default interface Like {
     tuit: Tuit,
     likedBy: User
 };