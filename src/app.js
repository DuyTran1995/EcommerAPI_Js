// Import node_modules
import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
// import fileUpload from 'express-fileupload';
// Import All Router
import { CustomerRoutes, ProductRoutes, CategoryRoutes } from './routes';

// Import Config
import ConnectServer from './configs/connectServer';
import ConnectDb from './configs/connectDB';
// import cloudinaryConfig from './configs/cloudinary';

dotenv.config();

const app = express();
const Server = http.createServer(app);

const port = process.env.PORT || 3000;
const hostName = process.env.HOSTNAME || 'localhost';

const dbConnect = process.env.DB_CONNECT;
const dbHost = process.env.DB_HOST;
const dbUserName = process.env.DB_USER;
const dbPassWord = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

// const cloudinary_name = process.env.cloudinary_name;
// const api_key = process.env.cloudinary_api_key;
// const api_secret = process.env.cloudinary_api_secret;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// All Route
CustomerRoutes.default(app);
ProductRoutes.default(app);
CategoryRoutes.default(app);

// Config DB
ConnectDb(dbConnect, dbHost, dbUserName, dbPassWord, dbName);

// Config Server
ConnectServer(Server, hostName, port);

// Config Cloudinary
// cloudinaryConfig(cloudinary_name, api_key, api_secret);
