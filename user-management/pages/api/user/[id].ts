import { NextApiRequest, NextApiResponse } from "next";

import routes from "../../../src/api/userAccount/routes";

const { getUser, deleteUser } = routes;

const userHandler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "DELETE":
      return deleteUser(req, res);
    default:
      return getUser(req, res);
  }
};

export default userHandler;
