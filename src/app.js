// Import node_modules
import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// Import All Router
import RootRoute from './routes/rootRouter';

// Import Config
import ConnectServer from './configs/connectServer';
import ConnectDb from './configs/connectDB';

dotenv.config();

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;
const hostName = process.env.HOSTNAME || 'localhost';

const dbConnect = process.env.DB_CONNECT;
const dbHost = process.env.DB_HOST;
const dbUserName = process.env.DB_USER;
const dbPassWord = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// All Route
RootRoute(app);

// Config DB
ConnectDb(dbConnect, dbHost, dbUserName, dbPassWord, dbName);

// Config Server
ConnectServer(server, hostName, port);
