/**
 * @file follow model with both user ids
 */
 
 import User from "./User";
 
 /**
  * @typedef Follow Represents follow relationship between two users,
  * as in user follows another user
  * @property follow User follows another user
  */
 
 export default interface Follow {
     userFollowed: User,
     userFollowing: User
 };
