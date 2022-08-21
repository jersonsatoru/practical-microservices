import { NextFunction, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

export async function primeRequest(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  req.context = {
    traceId: uuid(),
  };
  next();
}
