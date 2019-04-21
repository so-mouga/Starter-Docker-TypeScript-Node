'use strict';

import { Response, Request, NextFunction } from 'express';
import express from 'express';

const router = express.Router();

router.get('/', function(req: Request, res: Response) {
  return res.status(200).send('API work');
});

export default router;
