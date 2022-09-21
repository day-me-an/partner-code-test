import { NextApiResponse, NextApiRequest } from "next";

import repository from "../repository";

const getUsersById = async (userIds: string[]) => {
  const asyncMap = userIds.map((userId) => {
    return repository.get(userId);
  });

  return Promise.all(asyncMap);
};

const usersHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const userIds = await repository.getUserIds("*");
    const users = await getUsersById(userIds);

    res.status(200).json(users);
  } catch (error) {
    console.log(error.details);
    res.status(500).end(JSON.stringify(error?.details));
  }
};

export default usersHandler;
