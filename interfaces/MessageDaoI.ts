import Message from "../models/Message";

/**
 * @file message related data access object methods
 */
export default interface MessageDaoI {
    findAllMessagesSentByUser (from: string): Promise<Message[]>;
    findAllMessagesSentToUser (to: string): Promise<Message[]>;
    userUnsendsMessage (from: string, to: string): Promise<any>;
    userSendsMessage (from: string, to: string, message: Message): Promise<Message>;
};