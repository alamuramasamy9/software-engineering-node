import Tuit from "./Tuit";
import User from "./User";

export default interface BookMark {
    bookMarkedTuit: Tuit,
    bookMarkedBy: User
};