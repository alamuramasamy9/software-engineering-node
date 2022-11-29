import {Request, Response} from "express";
/**
 * @file BookmarkController interface with CRUD operations
 */
export default interface BookmarkController {
    findAllTuitsBookmarkedByUser (req: Request, res: Response): void;
    userUnbookmarksTuit (req: Request, res: Response): void;
    userBookmarksTuit (req: Request, res: Response): void;
};