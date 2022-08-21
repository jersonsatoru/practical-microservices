import { NextFunction, Request, Response } from 'express';
import { CreateHomePort } from './CreateHomePort';

export function createHomeHandler({ loadHomePage }: CreateHomePort): any {
  return {
    home: async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
      const data = await loadHomePage();
      return data;
    },
  };
}
