export * from './default.service';
import { DefaultService } from './default.service';
export * from './public.service';
import { PublicService } from './public.service';
export const APIS = [DefaultService, PublicService];
