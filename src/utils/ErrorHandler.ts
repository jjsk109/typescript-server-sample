import { Request, Response, NextFunction } from 'express';
import logger from './Logger';

export default class ErrorHandler {
    public static handle404Error(req: Request, res: Response, next: NextFunction) {
        logger.error(`app.js/404`);
        res.sendStatus(404);
    }
    public static handle500Error(error: any, req: Request, res: Response, next: NextFunction) {
        logger.error(`app.js/500`);
        res.sendStatus(500);
    }
}