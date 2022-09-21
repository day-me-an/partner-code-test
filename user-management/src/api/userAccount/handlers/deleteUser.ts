import * as uuid from "uuid";
import * as Joi from "joi";

import { NextApiRequest, NextApiResponse } from "next";

import repository from "../repository";

const validateRequestBody = (query: NextApiRequest["query"]) => {
  const schema = Joi.object({
    id: Joi.string().guid().required(),
  }).required();

  return schema.validate(query);
};

const deleteUserHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await validateRequestBody(req.query);
    const { query } = req;

    await repository.del(query.id as string);

    res.status(200).end(JSON.stringify({ id: query.id, status: "deleted" }));
  } catch (error) {
    console.log(error.details);
    res.status(500).end(JSON.stringify(error?.details));
  }
};

export default deleteUserHandler;
