/**
 * @file data access object implementation managing data of user.
 * user model is used to pass data
 */


import UserModel from "../mongoose/UserModel";
import User from "../models/User";
import UserDaoI from "../interfaces/UserDaoI";

/**
 * @class UserDao  data access object implementation managing user data.
 * @property userDao instance
 */

export default class UserDao implements UserDaoI {
    private static userDao: UserDao | null = null;
    public static getInstance = (): UserDao => {
        if(UserDao.userDao === null) {
            UserDao.userDao = new UserDao();
        }
        return UserDao.userDao;
    }
    private constructor() {}

    /**
      * fetch all users from database
      */

    findAllUsers = async (): Promise<User[]> =>
        UserModel.find().exec();

    /**
      * get particular user by the user id
      * @param  uid user id
      */

    findUserById = async (uid: string): Promise<any> =>
        UserModel.findById(uid);

    /** 
      * create a new  user
      * @param user user object
      */

    createUser = async (user: User): Promise<User> =>
        UserModel.create(user);


    /**
      * update the user
      * @param uid user id
      * @param user user object
      */

    updateUser = async (uid: string, user: User): Promise<any> =>
        UserModel.updateOne(
            {_id: uid},
            {$set: user});

    /**
      *  delete the user
      * @param uid user id
    **/

    deleteUser = async (uid: string): Promise<any> =>
        UserModel.deleteOne({_id: uid});

    deleteAllUsers = async (): Promise<any> =>
        UserModel.deleteMany({});

    deleteUsersByUsername = async (username: string): Promise<any> =>
        UserModel.deleteMany({username});

    findUserByCredentials = async (username: string, password: string): Promise<any> =>
        UserModel.findOne({username: username, password: password});

    findUserByUsername = async (username: string): Promise<any> =>
        UserModel.findOne({username});
};