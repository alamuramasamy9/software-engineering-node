/**
 * @file message model with content and both user ids
 */
 import User from "./User";

/**
 * @typedef Message is the message being sent
 * @property  message content of the messsage
 * @property  to user id sending the message
 * @property  from user id getting message
 */
 
 export default interface Bookmark {
     message: String,
     to: User,
     from: User,
     sentOn: Date
 };
