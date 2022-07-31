import { Request, Response } from 'express';

export const notFoundHandler = function (_req: Request, res: Response) {
  res.status(404).send({
    message: 'Oops, route not found!',
  });
};
