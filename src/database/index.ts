import { createConnection } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const rootDir = process.env.NODE_ENV === 'development' ? 'src' : 'build'

const extensionFile = process.env.NODE_ENV === 'development' ? 'ts' : 'js'

const config: any = {
    //name: 'default',
    type: 'postgres',
    url: process.env.DATABASE_URL,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT || 5432,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHRONIZE,
    entities: [rootDir + `/modules/**/entities/*..${extensionFile}`],
    //migrations: [rootDir + `/database/migrations/*.${extensionFile}`],
    //cli: { migrationsDir: rootDir + '/database/migrations' },
    //ssl: process.env.DATABASE_URL ? true : false,
    extra: { ssl: true, rejectUnauthorized: false },
}
console.log(config)
createConnection(config).catch((error) => console.log(error))
