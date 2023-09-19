import express, { Express, Request, Response } from "express";
import productsController from "./controllers/products"
import productlistController  from "./controllers/productlist"

const app: Express = express();

app.use('/', productsController);
app.use('/', productlistController);

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});