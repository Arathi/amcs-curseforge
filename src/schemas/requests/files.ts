import { ModLoaderType } from './mod-loader';

export interface GetModFilesParameters {
  gameVersion?: string;
  modLoaderType?: ModLoaderType;
  gameVersionTypeId?: number;
  index?: number;
  pageSize?: number;
}
