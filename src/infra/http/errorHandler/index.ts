import { NextFunction, Request, Response } from 'express';

export async function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response> {
  return res.status(400).json('bad request');
}
