import { DataSource } from 'typeorm';
const appDataSource = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: true,
    entities: [
        process.cwd() + '/src/modules/**/entity/*.entity{.ts,.js}',
    ],
    migrations: [
        process.cwd() + '/src/migrations/**/*{.ts,.js}'
    ],
    migrationsTableName: 'deliveryfood_migrations',
});
export default appDataSource;
