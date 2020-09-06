# NodeApp

Nodeapp is application API use Nodejs in Backend and ReactJs in Frontend

## Backend

- [ExpressJS](https://expressjs.com/)
- [MongoDb](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [JWT](https://jwt.io/)
- [Redis](https://redis.io/)

## Frontend

-
-
-
-

## Installation

Use the package manager package.json

```bash
npm install
```

## Setup ENV

- From the <App_root> directory, copy and paste the content of the following files
- .env.sample to .env or use touch .env (cli) and add content under here
- HOSTNAME (default is localhost)
- PORT (default is 3000)
- DB_CONNECT = (mongodb)
- DB_HOST = (host database)
- DB_NAME = (name database)
- DB_USER = (user has verify in mongodb atlas)
- DB_PASSWORD = (password user)
- SECRET_JWT = (secret key generate jwt token)

## Usage App

- For Development

```bash
npm run dev
```

- For Debugger

```bash
npm run debug
```

- For Testing

```bash
npm run test
```
