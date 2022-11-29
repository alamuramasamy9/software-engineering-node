/**
 * @file data access object implementation managing data of likes.
 * like model is used to pass data
 */

import LikeDaoI from "../interfaces/LikeDaoI";
import LikeModel from "../mongoose/LikeModel";
import Like from "../models/Likes";
/**
 * @class LikeDao  data access object implementation managing like data.
 * @property likeDao instance
 */

export default class LikeDao implements LikeDaoI {
    private static likeDao: LikeDao | null = null;
    public static getInstance = (): LikeDao => {
        if(LikeDao.likeDao === null) {
            LikeDao.likeDao = new LikeDao();
        }
        return LikeDao.likeDao;
    }
    private constructor() {}

    /**
      * all users that liked a particular tuit
      * @param tid tuit id
      */

    findAllUsersThatLikedTuit = async (tid: string): Promise<Like[]> =>
        LikeModel
            .find({tuit: tid})
            .populate("likedBy")
            .exec();

    /**
      * all tuits liked by a user
      * @param uid user id
      */

    findAllTuitsLikedByUser = async (uid: string): Promise<Like[]> =>
        LikeModel
            .find({likedBy: uid})
            .populate("tuit")
            .exec();

    /**
      * like a tuit
      * @param uid user id
      * @param tid tuit id
      */

    userLikesTuit = async (uid: string, tid: string): Promise<any> =>
        LikeModel.create({tuit: tid, likedBy: uid});

    /**
      * inlike a tuit that was liked
      * @param  uid user id
      * @param  tid tuit id
    */

    userUnlikesTuit = async (uid: string, tid: string): Promise<any> =>
        LikeModel.deleteOne({tuit: tid, likedBy: uid});
}