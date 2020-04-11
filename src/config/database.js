module.exports = {
    dialect: 'postgres',
    host: process.env.ELEPHANTSQL_HOST || 'localhost',
    username: process.env.ELEPHANTSQL_USERNAME || 'postgres',
    password: process.env.ELEPHANTSQL_PASSWORD || 'docker',
    database: process.env.ELEPHANTSQL_DATABASE || 'fastfeet',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
