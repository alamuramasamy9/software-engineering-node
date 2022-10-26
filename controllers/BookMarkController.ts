import {Express, Request, Response} from "express";
import BookMarkDao from "../daos/BookMarkDao";
import BookMarkControllerI from "../interfaces/BookMarkController";

export default class BookMarkController implements BookMarkControllerI {
    private static bookmarkDao: BookMarkDao = BookMarkDao.getInstance();
    private static bookmarkController: BookMarkController | null = null;

    public static getInstance = (app: Express): BookMarkController => {
        if(BookMarkController.bookmarkController === null) {
            BookMarkController.bookmarkController = new BookMarkController();
            app.get("/api/tuits/:tid/bookmark", BookMarkController.bookmarkController.findAllUsersThatBookMarkedTuit);
            app.get("/api/users/:uid/bookmark", BookMarkController.bookmarkController.findAllTuitsBookmarkedByUser);
            app.post("/api/users/:uid/bookmarks/:tid", BookMarkController.bookmarkController.userBookmarkedTuit);
            app.delete("/api/users/:uid/unbookmark/:tid", BookMarkController.bookmarkController.userUnBookMarksTuit);
        }
        return BookMarkController.bookmarkController;
    }

    private constructor() {}

    findAllUsersThatBookMarkedTuit = (req: Request, res: Response) =>
        BookMarkController.bookmarkDao.findAllUsersThatBookMarkedTuit(req.params.tid)
            .then(bookmark => res.json(bookmark));


    findAllTuitsBookmarkedByUser = (req: Request, res: Response) =>
        BookMarkController.bookmarkDao.findAllTuitsBookmarkedByUser(req.params.uid)
            .then(bookmark => res.json(bookmark));

    userBookmarkedTuit = (req: Request, res: Response) =>
        BookMarkController.bookmarkDao.userBookmarkedTuit(req.params.uid, req.params.tid)
            .then(bookmark => res.json(bookmark));

    userUnBookMarksTuit = (req: Request, res: Response) =>
        BookMarkController.bookmarkDao.userUnBookMarksTuit(req.params.uid, req.params.tid)
            .then(status => res.send(status));
};