const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb://localhost:27017/cubes'
    },
    production: {
        port: process.env.PORT || 3000,
        dbURL: "mongodb+srv://cluster0-qdt5y.mongodb.net/rehabilitation"
    }
};

module.exports = config[env]