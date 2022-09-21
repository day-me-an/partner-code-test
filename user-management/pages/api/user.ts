import { NextApiRequest, NextApiResponse } from "next";

import routes from "../../src/api/userAccount/routes";

const { getUser, postUser } = routes;

const userHandler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      return postUser(req, res);
    default:
      return getUser(req, res);
  }
};

export default userHandler;
