import * as uuid from "uuid";
import * as Joi from "joi";

import { NextApiRequest, NextApiResponse } from "next";

import repository from "../repository";
import { UserAccess, UserState, User } from "../types";

const validateRequestBody = (requestBody: NextApiRequest["body"]) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    access: Joi.string()
      .valid(UserAccess.ADMIN, UserAccess.READ, UserAccess.WRITE)
      .required(),
  }).required();

  return schema.validate(requestBody);
};

const postUserHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // verify headers?
    await validateRequestBody(req.body);
    const { body } = req;

    const id = uuid.v5(body.email, uuid.v5.URL);
    const user: User = {
      uuid: id,
      access: body.access,
      email: body.email,
      state: UserState.INVITED,
    };

    await repository.set(id, JSON.stringify(user));

    res.status(200).end(JSON.stringify({ id }));
  } catch (error) {
    console.log(error);
    res.status(500).json(JSON.stringify(error?.details))
  }
};

export default postUserHandler;
