"use strict";
/**
 * @file Implements an Express Node HTTP server. Declares RESTful Web services
 * enabling CRUD operations on the following resources:
 * <ul>
 *     <li>users</li>
 *     <li>tuits</li>
 *     <li>likes</li>
 *     <li>follow<li>
 *     <li>bookmark<li>
 *     <li>message<li>
 * </ul>
 *
 * Connects to a remote MongoDB instance hosted on the Atlas cloud database
 * service
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const UserController_1 = __importDefault(require("./controllers/UserController"));
const TuitController_1 = __importDefault(require("./controllers/TuitController"));
const LikeController_1 = __importDefault(require("./controllers/LikeController"));
const FollowController_1 = __importDefault(require("./controllers/FollowController"));
const BookmarkController_1 = __importDefault(require("./controllers/BookmarkController"));
const MessageController_1 = __importDefault(require("./controllers/MessageController"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// connect to the database
mongoose_1.default.connect('mongodb+srv://alamu:ramasamy@cluster0.ckorscg.mongodb.net/tuiter?retryWrites=true&w=majority');
//mongoose.connect('mongodb+srv://tuiteradmin:'+process.env.DB_PASSWORD +'@cluster0.yj2qt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'); // connect to the movie-db database
app.use(express_1.default.json());
app.get('/', (req, res) => res.send('Welcome!'));
app.get('/add/:a/:b', (req, res) => res.send(req.params.a + req.params.b));
// create RESTful Web service API
const userController = UserController_1.default.getInstance(app);
const tuitController = TuitController_1.default.getInstance(app);
const likesController = LikeController_1.default.getInstance(app);
const followController = FollowController_1.default.getInstance(app);
const bookmarkController = BookmarkController_1.default.getInstance(app);
const messageController = MessageController_1.default.getInstance(app);
/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4000;
app.listen(process.env.PORT || PORT);
