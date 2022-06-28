import 'reflect-metadata';
import { server } from './src/server';

const port: number = Number(process.env.APP_PORT) || 3000
server.build().listen(port, () => console.log(`Listening on http://localhost:${port} 🚀`));
