/**
 * @file CRUD operations using
 * mongoose model in the message collection
 */

 import mongoose from "mongoose";
 import MessageSchema from "./MessageSchema";
 const MessageModel = mongoose.model("MessageModel", MessageSchema);
 export default MessageModel;