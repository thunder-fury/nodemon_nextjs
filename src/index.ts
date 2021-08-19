import express, { Request, Response } from 'express';
const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Worldddddddddd!');
    console.log(req);
});

app.listen(3000, () => {
    console.log('http server listen on :3000');
});