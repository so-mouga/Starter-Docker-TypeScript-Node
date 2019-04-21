import express from 'express';
import { Request, Response } from 'express';

export default class Server {
  constructor(readonly port: number) {}

  start(): void {
    const app = express();
    app.get('/', (req: Request, res: Response) => {
      res.send('test');
    });
    app.listen(this.port, () => {
        console.log(`Server run on port: ${this.port}`);
    })
  }
}
