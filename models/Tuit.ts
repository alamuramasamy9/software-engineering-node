/**
 * @file tuit model with tuit and user id
 */
 import User from "./User";

/**
 * @typedef Tuit is the tweet
 * @property  tuit is the tuit id of tuit
 * @property  postedBy is the user id of user posting tuit
 */

export default interface Tuit {
    tuit: string,
    postedBy?: User,
    postedOn?: Date,
};