/**
 * @file data access object implementation managing data bookmark.
 * bookmark model is used to pass data
 */
import BookmarkDaoI from "../interfaces/BookmarkDaoI";
import BookmarkModel from "../mongoose/BookmarkModel";
import Bookmark from "../models/Bookmark";
/**
 *
  * @class BookmarkDao data access object implementation managing bookmark data.
  * @property bookmarkDao instance
  */
export default class BookmarkDao implements BookmarkDaoI {
    private static bookmarkDao: BookmarkDao | null = null;
    public static getInstance = (): BookmarkDao => {
        if(BookmarkDao.bookmarkDao === null) {
            BookmarkDao.bookmarkDao = new BookmarkDao();
        }
        return BookmarkDao.bookmarkDao;
    }
    private constructor() {}
    /**
      * all tuits bookmarked by a user is retrieved
      * @param  uid user id representing the user
      */
    findAllTuitsBookmarkedByUser = async (uid: string): Promise<Bookmark[]> =>
        BookmarkModel.find({bookmarkedBy: uid})
            .populate("bookmarkedTuit")
            .exec();

    /**
     * bookmark a tuit
      * @param uid  user id
       * @param tid  tuit id
      */

    userBookmarksTuit = async (uid: string, tid: string): Promise<any> =>
        BookmarkModel.create({bookmarkedTuit: tid, bookmarkedBy: uid});

    /**
     * unbookmark a tuit that was bookmarked
      * @param uid user id
      * @param uid tuit id of particular tuit tfor deletion
      */

    userUnbookmarksTuit = async (uid: string, tid: string): Promise<any> =>
        BookmarkModel.deleteOne({bookmarkedTuit: tid, bookmarkedBy: uid});
}