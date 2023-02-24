import { Request, Response } from 'express';

export class SampleController {
  public static getSample(req: Request, res: Response) {
    console.log('getSample start');
    
    return res.status(200).send('Hello World!');
  }
}