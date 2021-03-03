import mongoose from 'mongoose';

/**
 *
 * @param {String} dbConnect
 * @param {String} dbHost
 * @param {String} dbUserName
 * @param {String} dbPassWord
 * @param {String} dbName
 */

const ConnectDb = (dbConnect, dbHost, dbUserName, dbPassWord, dbName) => {
    const dbURL = `${dbConnect}+${dbHost}://${dbUserName}:${dbPassWord}@cluster-0.mvj4p.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    mongoose.connect(
        dbURL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        },
        () => {
            console.log('DB Connect Done !');
        }
    );
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
};

export default ConnectDb;
