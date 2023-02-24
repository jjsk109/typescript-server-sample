import { Request, Response, NextFunction } from 'express';

export class SampleMiddleware {
  public static sampleMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log('This is a sample middleware.');
    return next();
  }
}
