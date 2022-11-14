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
/**
 * @file Implements DAO managing data storage of tuits. Uses mongoose TuitModel
 * to integrate with MongoDB
 */
const TuitModel_1 = __importDefault(require("../mongoose/TuitModel"));
/**
 * @class UserDao Implements Data Access Object managing data storage
 * of Users
 * @property {UserDao} userDao Private single instance of UserDao
 */
class TuitDao {
    constructor() {
        /**
         * Retrieves all tuits from the database and returns an array of tuits.
         */
        this.findAllTuits = () => __awaiter(this, void 0, void 0, function* () { return TuitModel_1.default.find(); });
        /**
         * Retrieves all tuits from the database for a particular user and returns
         * an array of tuits.
         * @param {String} uid user id
         */
        this.findAllTuitsByUser = (uid) => __awaiter(this, void 0, void 0, function* () { return TuitModel_1.default.find({ postedBy: uid }); });
        /**
         * Retrieves all tuits from the database for a particular tuit id and returns
         * an array of tuits.
         * @param {String} uid tuit id
         */
        this.findTuitById = (uid) => __awaiter(this, void 0, void 0, function* () {
            return TuitModel_1.default.findById(uid)
                .populate("postedBy")
                .exec();
        });
        /**
        * @param {String} uid user id
        * @param {Tuit} tuit tuit json body
        */
        this.createTuitByUser = (uid, tuit) => __awaiter(this, void 0, void 0, function* () { return TuitModel_1.default.create(Object.assign(Object.assign({}, tuit), { postedBy: uid })); });
        /**
         * @param {String} uid user id
         * @param {Tuit} tuit tuit json body
         */
        this.updateTuit = (uid, tuit) => __awaiter(this, void 0, void 0, function* () {
            return TuitModel_1.default.updateOne({ _id: uid }, { $set: tuit });
        });
        /**
         * @param {String} uid user id
         */
        this.deleteTuit = (uid) => __awaiter(this, void 0, void 0, function* () { return TuitModel_1.default.deleteOne({ _id: uid }); });
    }
}
exports.default = TuitDao;
TuitDao.tuitDao = null;
TuitDao.getInstance = () => {
    if (TuitDao.tuitDao === null) {
        TuitDao.tuitDao = new TuitDao();
    }
    return TuitDao.tuitDao;
};
