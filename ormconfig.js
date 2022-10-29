"use strict";
const config = {
    type: 'mysql',
    host: 'db-c7uqk.pub-cdb.ntruss.com',
    port: 3306,
    username: 'snaps',
    password: 'snaps123!',
    database: 'DobbyTestA',
    entities: [`${__dirname}/./entities/**.entity.{ts,js}`],
    synchronize: false,
    autoLoadEntities: true,
    charset: 'utf8mb4',
    logging: true,
    keepConnectionAlive: true,
};
module.exports = config;
//# sourceMappingURL=ormconfig.js.map