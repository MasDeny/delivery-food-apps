import { Container } from 'inversify';
import { IDatabaseService } from './interface/database.interface';
import { DatabaseService } from './service/database.service';
import { Logger } from '../shared/services/logger.service';
import { TYPES } from './type.core';
const container = new Container();
container.bind<IDatabaseService>(TYPES.IDatabaseService).to(DatabaseService);
container.bind(TYPES.Logger).to(Logger);
export default container;
