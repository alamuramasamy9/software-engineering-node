"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MessageModel_1 = __importDefault(require("../mongoose/MessageModel"));
/**
 * Implements Data Access Object managing data storage
 * of Messages
 * @implements {MessageDaoI} MessageDaoI
 * @property {MessageDao} messageDao Private single instance of MessageDao
 */
class MessageDao {
    constructor() {
        /**
          * Retrieves all messages sent by a user
          * @param {String} uid uid representing user
          */
        this.findAllMessagesSentByUser = (uid) => __awaiter(this, void 0, void 0, function* () { return MessageModel_1.default.find({ from: uid }); });
        /**
          * Retrieves all messages sent to user
          * @param {Request} uid user id
          */
        this.findAllMessagesSentToUser = (uid) => __awaiter(this, void 0, void 0, function* () { return MessageModel_1.default.find({ to: uid }); });
        /**
          * @param {String} uidFrom user id sending message
          * @param {String} uidTo user id receiving message
          * @param {String} message message
        */
        this.userSendsMessage = (uidFrom, uidTo, message) => __awaiter(this, void 0, void 0, function* () { return MessageModel_1.default.create(Object.assign(Object.assign({}, message), { from: uidFrom, to: uidTo })); });
        /**
          * @param {String} _id message id
          * @param {String} from user id
          */
        this.userUnsendsMessage = (_id, from) => __awaiter(this, void 0, void 0, function* () { return MessageModel_1.default.deleteOne({ _id: _id, from: from }); });
    }
}
exports.default = MessageDao;
MessageDao.messageDao = null;
MessageDao.getInstance = () => {
    if (MessageDao.messageDao === null) {
        MessageDao.messageDao = new MessageDao();
    }
    return MessageDao.messageDao;
};
