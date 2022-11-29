/**
 * @file CRUD operations using
 * mongoose model in the message collection
 */
import mongoose, {Schema} from "mongoose";
import Message from "../models/Message";
/**
* @typedef Message is the message being sent
* @property {String} message content of the messsage
* @property {ObjectId[]} to user id sending the message
* @property {ObjectId[]} from user id getting message
*/
const MessageSchema = new mongoose.Schema<Message>({
    message: String,
    to: {type: Schema.Types.ObjectId, ref: "UserModel"},
    from: {type: Schema.Types.ObjectId, ref: "UserModel"},
    sentOn: Date
}, {collection: "message"});
export default MessageSchema;