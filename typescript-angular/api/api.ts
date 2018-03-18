export * from './admins.service';
import { AdminsService } from './admins.service';
export * from './default.service';
import { DefaultService } from './default.service';
export * from './developers.service';
import { DevelopersService } from './developers.service';
export const APIS = [AdminsService, DefaultService, DevelopersService];
