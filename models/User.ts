/**
 * @file user model with user details
 */
import AccountType from "./AccountType";
import MaritalStatus from "./MaritalStatus";
import Location from "./Location";
import mongoose from "mongoose";

/**
 * @typedef User is used for the user
 * @property  username  of the user being passed
 * @property  password  of the user being passed
 * @property firstName  of the user being passed
 * @property lastName  of the user being passed
 * @property email  of the user being passed
 * @property profilePhoto  of the user being passed
 * @property headerImage of the user being passed
 * @property biography  of the user being passed
 * @property dateOfBirth  of the user being passed
 * @property accountType of the user being passed
 * @property maritalStatus of the user being passed
 * @property location (latitude and longitude) of the user being passed
 * @property salary  of the user being passed
 */

export default interface User {
    _id?: mongoose.Schema.Types.ObjectId,
    username: string,
    password: string,
    firstName?: string,
    lastName?: string,
    email: string,
    profilePhoto?: string,
    headerImage?: string,
    biography?: string,
    dateOfBirth?: Date,
    accountType?: AccountType,
    maritalStatus?: MaritalStatus,
    location?: Location,
    salary?: number
};