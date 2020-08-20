import * as express from 'express';
import routes from './routes';
import * as path from 'path'

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(routes);
app.get( "*", (req, res) =>{res.sendFile(path.join (__dirname, "../public/index.html"))})
app.use((err:Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
 res.status(err.status || 500);
 res.json({
     errors: {
         err: err.message
     }
 })
})

type Error = {
status?:number;
message?: string;
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));