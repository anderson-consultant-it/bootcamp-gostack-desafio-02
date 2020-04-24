module.exports = {
    development: {
        dialect: 'postgres',
        host: 'localhost',
        username: 'postgres',
        password: 'docker',
        database: 'gobarber',
        define: {
            timestamps: true,
            underscored: true,
            underscoredAll: true,
        },
    },
    test: {
        dialect: 'postgres',
        host: process.env.AWS_RDS_HOST || 'localhost',
        username: process.env.AWS_RDS_USERNAME || 'postgres',
        password: process.env.AWS_RDS_PASSWORD || 'docker',
        database: process.env.AWS_RDS_DATABASE || 'gobarber',
        define: {
            timestamps: true,
            underscored: true,
            underscoredAll: true,
        },
    },
    production: {
        dialect: 'postgres',
        host: process.env.AWS_RDS_HOST || 'localhost',
        username: process.env.AWS_RDS_USERNAME || 'postgres',
        password: process.env.AWS_RDS_PASSWORD || 'docker',
        database: process.env.AWS_RDS_DATABASE || 'gobarber',
        define: {
            timestamps: true,
            underscored: true,
            underscoredAll: true,
        },
    },
};
