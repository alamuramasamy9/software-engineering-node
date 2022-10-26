import BookMark from "../models/BookMark";

export default interface BookMarkI {
    findAllUsersThatBookMarkedTuit (tid: string): Promise<BookMark[]>;
    findAllTuitsBookmarkedByUser (uid: string): Promise<BookMark[]>;
    userUnBookMarksTuit (tid: string, uid: string): Promise<any>;
    userBookmarkedTuit (tid: string, uid: string): Promise<BookMark>;
};