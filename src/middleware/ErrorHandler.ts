import { Request, Response, NextFunction } from 'express';

export const errorLogger = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // adding some color to our logs
  console.error('\x1b[31m', err);
  // calling next middleware
  next(err);
};

export const invalidPathHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.redirect('/error');
};
