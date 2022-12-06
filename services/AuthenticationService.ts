import UserDao from "../daos/UserDao";
import mongoose from "mongoose";

const userDao: UserDao = UserDao.getInstance();

mongoose.connect('mongodb+srv://alamu:ramasamy@cluster0.ckorscg.mongodb.net/tuiter?retryWrites=true&w=majority');

export const login = (u: string, p: string) =>
  userDao.findUserByCredentials(u, p)
    .then(user => {
      if (user) {
        return user;
      } else {
        throw "Unknown user"
      }
    })
    .then(user => user)
    .catch(e => e)

export const register = (u: string, p: string, e: string) =>
  userDao.findUserByUsername(u)
    .then(user => {
      if (user) {
        throw 'User already exists';
      } else {
        return userDao.createUser({
          username: u, password: p, email: e
        });
      }
    })
    .then(newUser => newUser)
    .catch(e => e);

login('alice008', 'alice234')
  .then(user => console.log(user))
  .then(users => console.log(users));
