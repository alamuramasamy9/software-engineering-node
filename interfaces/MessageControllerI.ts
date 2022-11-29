import {Request, Response} from "express";
/**
 * @file MessageController interface with CRUD operations
 */
export default interface MessageController {
    findAllMessagesSentByUser (req: Request, res: Response): void;
    findAllMessagesSentToUser (req: Request, res: Response): void;
    userUnsendsMessage (req: Request, res: Response): void;
    userSendsMessage (req: Request, res: Response): void;
};