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
const FollowModel_1 = __importDefault(require("../mongoose/FollowModel"));
/**
  * @class FollowDao Implements Data Access Object managing data storage
  * of follow
  * @property {FollowDao} followDao Private single instance of UserDao
  */
class FollowDao {
    constructor() {
        /**
          * Retrieves all users that follow a particular user
          * @param {String} uid uid representing user
        **/
        this.findAllUsersThatFollowUser = (uid) => __awaiter(this, void 0, void 0, function* () {
            return FollowModel_1.default
                .find({ userFollowing: uid })
                .populate("userFollowed")
                .exec();
        });
        /**
          * Retrieves all users followed by user from the database
          * @param {String} uid user liked the tuits
        */
        this.findAllUsersFollowedByUser = (uid) => __awaiter(this, void 0, void 0, function* () {
            return FollowModel_1.default
                .find({ userFollowed: uid })
                .populate("userFollowing")
                .exec();
        });
        /**
          * @param {Request} uid user id
          * @param {Response} uidFollowing user id following
        */
        this.userFollowsUser = (uid, uidFollowing) => __awaiter(this, void 0, void 0, function* () { return FollowModel_1.default.create({ userFollowed: uid, userFollowing: uidFollowing }); });
        this.userUnfollowsUser = (uid, uidFollowing) => __awaiter(this, void 0, void 0, function* () { return FollowModel_1.default.deleteOne({ userFollowed: uid, userFollowing: uidFollowing }); });
    }
}
exports.default = FollowDao;
FollowDao.followDao = null;
FollowDao.getInstance = () => {
    if (FollowDao.followDao === null) {
        FollowDao.followDao = new FollowDao();
    }
    return FollowDao.followDao;
};
