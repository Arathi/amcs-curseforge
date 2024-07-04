import CurseForgeApi from './curseforge-api';
import AbstractCurseForgeApi from './abstract-curseforge-api';
import DefaultCurseForgeApi from './default-curseforge-api';

import { GetCategoriesParameters } from './schemas/requests/categories';
import { SearchModsParameters } from './schemas/requests/mods';
import { GetModFilesParameters } from './schemas/requests/files';

import Category from './schemas/responses/category';
import Mod from './schemas/responses/mod';
import File from './schemas/responses/file';
import DataResponse, {
  ListResponse,
  PaginationResponse,
} from './schemas/responses/data-response';

export { type CurseForgeApi, AbstractCurseForgeApi };
export type {
  GetCategoriesParameters,
  SearchModsParameters,
  GetModFilesParameters,
};
export type { Category, Mod, File };
export type { DataResponse, ListResponse, PaginationResponse };
export default DefaultCurseForgeApi;
