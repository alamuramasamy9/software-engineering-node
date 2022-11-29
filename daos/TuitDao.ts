/**
 * @file data access object implementation managing data of tweet.
 * tweet model is used to pass data
 */


import TuitModel from "../mongoose/TuitModel";
 import Tuit from "../models/Tuit";
 import TuitDaoI from "../interfaces/TuitDaoI";

/**
 * @class TuitDao  data access object implementation managing tuit data.
 * @property tuitDao instance
 */

 export default class TuitDao implements TuitDaoI{
     private static tuitDao: TuitDao | null = null;
     public static getInstance = (): TuitDao => {
         if(TuitDao.tuitDao === null) {
             TuitDao.tuitDao = new TuitDao();
         }
         return TuitDao.tuitDao;
     }
     private constructor() {}

     /**
      * fetches all tuits from database
      */

     findAllTuits = async (): Promise<Tuit[]> =>
         TuitModel.find();

     /**
      * all tuits by a particular user
      * @param uid user id
      */

     findAllTuitsByUser = async (uid: string): Promise<Tuit[]> =>
         TuitModel.find({postedBy: uid});

     /**
      * tuit with a particular tuit id
      * @param tid tuit id
      */

     findTuitById = async (uid: string): Promise<any> =>
         TuitModel.findById(uid)
             .populate("postedBy")
             .exec();

      /**
       * creating a tuit
      * @param  uid user id
      * @param tuit tuit data
      */

     createTuitByUser = async (uid: string, tuit: Tuit): Promise<Tuit> =>
         TuitModel.create({...tuit, postedBy: uid});

     /**
      * tuit to be updated
      * @param uid user id
      * @param tuit tuit data
      */

     updateTuit = async (uid: string, tuit: Tuit): Promise<any> =>
         TuitModel.updateOne(
             {_id: uid},
             {$set: tuit});

     /**
      * tuit to be deleted
      * @param uid user id
      */

     deleteTuit = async (uid: string): Promise<any> =>
         TuitModel.deleteOne({_id: uid});
 }