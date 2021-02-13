import { Router } from 'express';

/**
 * api route: /api
 */
export const ApiRootRouter = Router();

ApiRootRouter.get('/', (req, res) => {
  res.json({ message: 'Hello World!' })
});