// Import node_modules
import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// Import All Router
import RootRoute from './routes/rootRouter';

// Import Config
import ConnectServer from './configs/connectServer';
import ConectDB from './configs/connectDB';

dotenv.config();

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;
const hostName = process.env.HOSTNAME || 'localhost';

const dbconect = process.env.DB_CONNECT;
const dbhost = process.env.DB_HOST;
const dbname = process.env.DB_NAME;
const dbusername = process.env.DB_USER;
const dbpassword = process.env.DB_PASSWORD;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// All Route
RootRoute(app);

// Config DB
ConectDB(dbconect, dbhost, dbname, dbusername, dbpassword);

// Config Server
ConnectServer(server, hostName, port);
