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
const BookmarkModel_1 = __importDefault(require("../mongoose/BookmarkModel"));
/**
  * @class BookmarkDao Implements Data Access Object managing data storage
  * of Bookmark
  * @property {BookmarkDao} bookmarkDao Private single instance of BookmarkDao
  */
class BookmarkDao {
    constructor() {
        /**
          * Retrieves all tuits that are bookmarked by the user
          * @param {String} uid uid representing the user
          */
        this.findAllTuitsBookmarkedByUser = (uid) => __awaiter(this, void 0, void 0, function* () {
            return BookmarkModel_1.default.find({ bookmarkedBy: uid })
                .populate("bookmarkedTuit")
                .exec();
        });
        /**
          * @param {String} uid  user id
           * @param {String} tid  tuit id
          */
        this.userBookmarksTuit = (uid, tid) => __awaiter(this, void 0, void 0, function* () { return BookmarkModel_1.default.create({ bookmarkedTuit: tid, bookmarkedBy: uid }); });
        /**
          * @param {String} uid user id
          * @param {String} uid tuit id that needs to deleted
          */
        this.userUnbookmarksTuit = (uid, tid) => __awaiter(this, void 0, void 0, function* () { return BookmarkModel_1.default.deleteOne({ bookmarkedTuit: tid, bookmarkedBy: uid }); });
    }
}
exports.default = BookmarkDao;
BookmarkDao.bookmarkDao = null;
BookmarkDao.getInstance = () => {
    if (BookmarkDao.bookmarkDao === null) {
        BookmarkDao.bookmarkDao = new BookmarkDao();
    }
    return BookmarkDao.bookmarkDao;
};
