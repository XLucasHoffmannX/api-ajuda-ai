// .env
import dotenv from 'dotenv';
dotenv.config();
// dependencies externs
import express, { json, urlencoded } from 'express';
import cors from 'cors';

// dependencies interns
import connectDb from './db/connectDB';
import { getResult } from './app/controllers/BestSearchController';
import { ProviderController } from './app/controllers/ProviderController';

// @ app
const app = express();

// @ middlewares
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors());

// @ routes
app.get('/', (req, res)=>{ res.json({ msg: "Api rodando!" }) });
app.post('/api/best', getResult);
app.get('/api/provider', ProviderController.get);
app.post('/api/provider', ProviderController.post);
app.post('/api/getclient', ProviderController.getClient);

// @db
connectDb(); 

// @listen server
const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server in on port ${PORT}`));