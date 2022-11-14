"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MessageDao_1 = __importDefault(require("../daos/MessageDao"));
/**
 * @class MessageController Implements RESTful Web service API for Message resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /api/users/:uid/messages/sent to retrieve all the message sent by user
 *     </li>
 *     <li>GET /api/users/:uid/messages/received to retrieve all message sent to user
 *     </li>
 *     <li>POST /api/users/:from/messages/:to to record that a user sent message to another user
 *     </li>
 *     <li>DELETE /api/users/:from/messages/:id to record that a user
 *     unsent a message</li>
 * </ul>
 * @property {MessageDao} messageDao Singleton DAO implementing message CRUD operations
 * @property {MessageController} MessageController Singleton controller implementing
 * RESTful Web service API
 */
class MessageController {
    constructor() {
        /**
         * Retrieves all messages sent by a user
         * @param {Request} req Represents request from client, including the path
         * parameter uid representing user
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the messages sent by user
         */
        this.findAllMessagesSentByUser = (req, res) => MessageController.messageDao.findAllMessagesSentByUser(req.params.uid)
            .then(message => res.json(message));
        /**
         * Retrieves all messages sent to user
         * @param {Request} req Represents request from client, including the path
         * parameter uid representing the user liked the tuits
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the messages that are sent to the user
         */
        this.findAllMessagesSentToUser = (req, res) => MessageController.messageDao.findAllMessagesSentToUser(req.params.uid)
            .then(message => res.json(message));
        /**
         * @param {Request} req Represents request from client, including the
         * path parameters uid and uidFollowing representing the user that is following another user
         * and other user is being followed.
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON containing the new message that was inserted in the
         * database
         */
        this.userSendsMessage = (req, res) => MessageController.messageDao.userSendsMessage(req.params.from, req.params.to, req.body)
            .then(message => res.json(message));
        /**
         * @param {Request} req Represents request from client, including the
         * path parameters uid and uidFollowing representing the user that is unfollowing
         * another user and the other user being unfollowed
         * @param {Response} res Represents response to client, including status
         * on whether deleting the message was successful or not
         */
        this.userUnsendsMessage = (req, res) => MessageController.messageDao.userUnsendsMessage(req.params.from, req.params._id)
            .then(status => res.send(status));
    }
}
exports.default = MessageController;
MessageController.messageDao = MessageDao_1.default.getInstance();
MessageController.messageController = null;
/**
 * Creates singleton controller instance
 * @param {Express} app Express instance to declare the RESTful Web service
 * API
 * @return MessageController
 */
MessageController.getInstance = (app) => {
    if (MessageController.messageController === null) {
        MessageController.messageController = new MessageController();
        app.get("/api/users/:uid/messages/sent", MessageController.messageController.findAllMessagesSentByUser);
        app.get("/api/users/:uid/messages/received", MessageController.messageController.findAllMessagesSentToUser);
        app.post("/api/users/:from/messages/:to", MessageController.messageController.userSendsMessage);
        app.delete("/api/users/:from/messages/:id", MessageController.messageController.userUnsendsMessage);
    }
    return MessageController.messageController;
};
;
