/**
 * @file CRUD operations using
 * mongoose schema in the user collection
 */

import mongoose from "mongoose";
import User from "../models/User";
/**
* @typedef User is used for the user
* @property {String} username username of the user being passed
* @property {String} password password of the user being passed
* @property {String} firstName first name of the user being passed
* @property {String} lastName last name of the user b
* @property {String} email email of the user being passed
* @property {String} profilePhoto profile photo of the user being passed
* @property {String} headerImage header image of the user being passed
* @property {String} biography bio of the user being passed
* @property {Date} dateOfBirth date of birth of the user being passed
* @property {String} accountType account type of the user being passed
* @property {String} maritalStatus marital status of the user being passed
* @property {Number} location latitude and longitude of the user being passed
* @property {Number} salary salary of the user being passed
*/
const UserSchema = new mongoose.Schema<User>({
    username: {type: String, required: true, default: `testusername${Date.now()}`},
    password: {type: String, required: true, default: `testpassword${Date.now()}`},
    firstName: String,
    lastName: String,
    email: {type: String, required: true, default: `testemail${Date.now()}`},
    profilePhoto: String,
    headerImage: String,
    biography: String,
    dateOfBirth: Date,
    accountType: {type: String, enum: ["PERSONAL", "ACADEMIC", "PROFESSIONAL"]},
    maritalStatus: {type: String, enum: ["MARRIED", "SINGLE", "WIDOWED"]},
    location: {
        latitude: Number,
        longitude: Number
    },
    salary: {type: Number, default: 50000}
}, {collection: "users"});

export default UserSchema;