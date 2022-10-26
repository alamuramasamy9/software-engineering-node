/**
 * @file Implements an Express Node HTTP server.
 */
import express, {Request, Response} from 'express';

import UserController from "./controllers/UserController";
import UserDao from "./daos/UserDao";
import TuitController from "./controllers/TuitController";
import TuitDao from "./daos/TuitDao";


import LikeController from "./controllers/LikeController";
import BookMarkController from "./controllers/BookMarkController"
import FollowController from './controllers/FollowController';
import MessageController from './controllers/MessageController';


const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/tuiter')
mongoose.connect('mongodb+srv://alamu:ramasamy@cluster0.ckorscg.mongodb.net/tuiter?retryWrites=true&w=majority');

const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) =>
    res.send('Welcome to Foundation of Software Engineering!!!!'));

app.get('/hello', (req: Request, res: Response) =>
    res.send('Welcome to Foundation of Software Engineering!'));

new UserController(app,new UserDao);
new TuitController(app,new TuitDao);

const likeController = LikeController.getInstance(app);
const bookmarkController = BookMarkController.getInstance(app);
const followController = FollowController.getInstance(app);
const messageController = MessageController.getInstance(app);

/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4000;
app.listen(process.env.PORT || PORT);
