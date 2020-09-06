import mongoose from 'mongoose';

/**
 *
 * @param {String} dbconect
 * @param {String} dbhost
 * @param {String} dbname
 * @param {String} dbusername
 * @param {String} dbpassword
 */

const ConectDB = (dbconect, dbhost, dbname, dbusername, dbpassword) => {
    const dbURL = `${dbconect}+${dbhost}://${dbusername}:${dbpassword}@cluster-0.mvj4p.gcp.mongodb.net/${dbname}?retryWrites=true&w=majority`;
    mongoose.connect(
        dbURL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        },
        () => {
            console.log('DB Conect Done !');
        }
    );
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
};

export default ConectDB;
