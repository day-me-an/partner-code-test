import getUserHandler from "./handlers/getUser";
import getUsersHandler from "./handlers/getUsers";
import postUserHandler from "./handlers/postUser";
import deleteUserHandler from "./handlers/deleteUser";

const routes = {
  getUser: getUserHandler,
  postUser: postUserHandler,
  deleteUser: deleteUserHandler,

  getUsers: getUsersHandler,
};

export default routes;
