import mongoose, {Schema} from "mongoose";
import BookMark from "../models/BookMark";

const BookMarkSchema = new mongoose.Schema<BookMark>({
    bookMarkedTuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
    bookMarkedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "bookmark"});

export default BookMarkSchema;