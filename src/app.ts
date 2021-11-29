import express from 'express';
import cors from 'cors';

import countriesRouter from './router/map';

const app: express.Application = express();

app.use(express.json());

app.use(cors());

app.get(
    '/alive',
    (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
    ) => res.status(200).send('Data server is alive'),
);

app.use('/countries', countriesRouter);

export default app;