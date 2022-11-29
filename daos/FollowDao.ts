/**
 * @file data access object implementation managing data of follows.
 * follow model is used to pass data
 */

import FollowDaoI from "../interfaces/FollowDaoI";
import FollowModel from "../mongoose/FollowModel";
import Follow from "../models/Follow";
/**
  * @class FollowDao  data access object implementation managing follow data.
  * @property followDao instance
  */

export default class FollowDao implements FollowDaoI {
    private static followDao: FollowDao | null = null;
    public static getInstance = (): FollowDao => {
        if(FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao();
        }
        return FollowDao.followDao;
    }
    private constructor() {}
    /**
      * all users followed by one user fetched
      * @param  uid user id
    **/
    findAllUsersThatFollowUser = async (uid: string): Promise<Follow[]> =>
        FollowModel
            .find({userFollowing: uid})
            .populate("userFollowed")
            .exec();

    /**
      * all users folloing one user fetched
      * @param uid user id
    */

    findAllUsersFollowedByUser = async (uid: string): Promise<Follow[]> =>
    FollowModel
            .find({userFollowed: uid})
            .populate("userFollowing")
            .exec();

    /**
     * unfollow a user that was followed
      * @param  uid user id who follows
      * @param  uidFollowing user who is being followed
    */

    userFollowsUser = async (uid: string, uidFollowing: string): Promise<any> =>
        FollowModel.create({userFollowed: uid, userFollowing: uidFollowing});
    userUnfollowsUser = async (uid: string, uidFollowing: string): Promise<any> =>
        FollowModel.deleteOne({userFollowed: uid, userFollowing: uidFollowing});
}