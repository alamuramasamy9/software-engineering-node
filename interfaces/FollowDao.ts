import Follow from "../models/Follow";

export default interface FollowI {
    findAllUsersThatUserFollows (uid: string): Promise<Follow[]>;
    findAllFollowersOfUsers (uid: string): Promise<Follow[]>;
    userFollowsUser (userid: string, uid: string): Promise<any>;
    userUnfollowsUser (userid: string, uid: string): Promise<Follow>;
};