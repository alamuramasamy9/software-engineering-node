"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Implements mongoose schema to CRUD
 * documents in the message collection
 */
const mongoose_1 = __importStar(require("mongoose"));
/**
* @typedef Message Represents Message
* @property {String} message message
* @property {ObjectId[]} to user id  sending message
* @property {ObjectId[]} from user id receiving message
* @property {Date} sentOn Date
*/
const MessageSchema = new mongoose_1.default.Schema({
    message: String,
    to: { type: mongoose_1.Schema.Types.ObjectId, ref: "UserModel" },
    from: { type: mongoose_1.Schema.Types.ObjectId, ref: "UserModel" },
    sentOn: Date
}, { collection: "message" });
exports.default = MessageSchema;
