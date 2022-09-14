import express, { Request, Response } from 'express'
import dotenv from "dotenv"
import axios from 'axios'

dotenv.config()
const app = express()
const port =  process.env.port

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req: Request, res: Response) => {
    try {
        const url = process.env.uri_server_2 + '/server_2'
        const resData = await axios.get(url)
        res.send(resData.data)
    } catch (error) {
     console.log(error);
     res.send('error')
    }
})

app.listen(port, async () => {
    console.log('[server_1] Status OK');
    console.log('[server_1] Run on port:', port);
});