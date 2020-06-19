const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb://localhost:27017/cubes'
    },
    production: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb+srv://Boogy:131311@boogy-xm4wc.mongodb.net/Boogy?retryWrites=true&w=majority'
    }
};

module.exports = config[env]