"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Implements mongoose schema to CRUD
 * documents in the user collection
 */
const mongoose_1 = __importDefault(require("mongoose"));
/**
* @typedef User Represents User
* @property {String} username username of the user
* @property {String} password password of user
* @property {String} firstName firstName of the user
* @property {String} lastName lastName of user
* @property {String} email email of user
* @property {String} profilePhoto profile photo
* @property {String} headerImage header image
* @property {String} biography bio
* @property {Date} dateOfBirth date of birth
* @property {String} accountType account type
* @property {String} maritalStatus marital status
* @property {Number} location latitude and longitude
* @property {Number} salary salary
*/
const UserSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true, default: `testusername${Date.now()}` },
    password: { type: String, required: true, default: `testpassword${Date.now()}` },
    firstName: String,
    lastName: String,
    email: { type: String, required: true, default: `testemail${Date.now()}` },
    profilePhoto: String,
    headerImage: String,
    biography: String,
    dateOfBirth: Date,
    accountType: { type: String, enum: ["PERSONAL", "ACADEMIC", "PROFESSIONAL"] },
    maritalStatus: { type: String, enum: ["MARRIED", "SINGLE", "WIDOWED"] },
    location: {
        latitude: Number,
        longitude: Number
    },
    salary: { type: Number, default: 50000 }
}, { collection: "users" });
exports.default = UserSchema;
