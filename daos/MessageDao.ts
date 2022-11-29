/**
 * @file data access object implementation managing data of message.
 * message model is used to pass data
 */

import MessageDaoI from "../interfaces/MessageDaoI";
import MessageModel from "../mongoose/MessageModel";
import Message from "../models/Message";

/**
 * @class MessageDao  data access object implementation managing me3ssage data.
 * @property messageDao instance
 */

export default class MessageDao implements MessageDaoI {
    private static messageDao: MessageDao | null = null;
    public static getInstance = (): MessageDao => {
        if(MessageDao.messageDao === null) {
            MessageDao.messageDao = new MessageDao();
        }
        return MessageDao.messageDao;
    }
    private constructor() {}

    /**
      * all messages sent by one user fetched
      * @param  uid user id
      */

    findAllMessagesSentByUser = async (uid: string): Promise<Message[]> =>
        MessageModel.find({from: uid})

    /**
      * all messages sent to one user fetched
      * @param uid user id
      */

    findAllMessagesSentToUser = async (uid: string): Promise<Message[]> =>
        MessageModel.find({to: uid})

    /**
     * send a message
      * @param uidFrom user id sending the message
      * @param uidTo user id getting the message
      * @param message data
    */

    userSendsMessage = async (uidFrom: string, uidTo: string,message: Message): Promise<any> =>
        MessageModel.create({...message,from: uidFrom, to: uidTo});

    /**
     * unsend message
      * @param _id message id
      * @param from user id
      */

    userUnsendsMessage = async (_id: string, from: string): Promise<any> =>
        MessageModel.deleteOne({_id: _id, from: from});
}