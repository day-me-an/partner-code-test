import { NextApiResponse, NextApiRequest } from "next";
import * as Joi from "joi";

import repository from "../repository";

const validateRequestQuery = (query: NextApiRequest["query"]) => {
  const schema = Joi.object({
    id: Joi.string().required(),
  }).required();

  return schema.validate(query);
};

const userHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await validateRequestQuery(req.query);
    const { query } = req;

    const user = await repository.get(query.id as string);
    console.log({ user });
    if (!user) {
      return res.status(404).end("user not found");
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error.details);
    res.status(500).end(JSON.stringify(error?.details));
  }
};

export default userHandler;
