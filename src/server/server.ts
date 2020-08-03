import * as Express from 'express';
import { applyMiddlewares } from './middlewares';
import { StaticRoutes } from './routes/StaticRoutes';
import { SSRRoutes } from './routes/SSRRoutes';

export const app: Express.Application = Express();

app.disable('x-powered-by');

applyMiddlewares(app);

/**
 * application routes live here
 */

/**
 * core routes, don't delete these
 */
StaticRoutes(app);
SSRRoutes(app);
