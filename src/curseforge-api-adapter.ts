import CurseForgeApi, { DEFAULT_BASE_URL, Options } from './curseforge-api';
import {
  GetFeaturedModsRequestBody,
  GetModFilesRequestBody,
  GetModsByIdsListRequestBody,
} from './schemas/requests/bodies';
import { GetCategoriesParameters } from './schemas/requests/categories';
import { GetModFilesParameters } from './schemas/requests/files';
import { SearchModsParameters } from './schemas/requests/mods';
import {
  GetMinecraftModLoadersParameters,
  GetModDescriptionParameters,
} from './schemas/requests/parameters';
import Category from './schemas/responses/category';
import DataResponse, {
  ListResponse,
  PaginationResponse,
} from './schemas/responses/data-response';
import Game from './schemas/responses/game';
import {
  GameVersionsByType,
  GameVersionType,
  GameVersionsByType2,
} from './schemas/responses/game-version';
import { MinecraftGameVersion } from './schemas/responses/minecraft-game-version';
import Mod from './schemas/responses/mod';
import File from './schemas/responses/file';

export default abstract class CurseForgeApiAdapter implements CurseForgeApi {
  apiKey: string;
  baseURL: string;

  constructor({ apiKey, baseURL = DEFAULT_BASE_URL }: Options) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
  }

  // #region Games
  getGames(): Promise<PaginationResponse<Game>> {
    throw new Error('Method not implemented.');
  }
  getGame(gameId: number): Promise<Game> {
    throw new Error('Method not implemented.');
  }
  getVersions(gameId: number): Promise<ListResponse<GameVersionsByType>> {
    throw new Error('Method not implemented.');
  }
  getVersionTypes(gameId: number): Promise<ListResponse<GameVersionType>> {
    throw new Error('Method not implemented.');
  }
  getVersionsV2(gameId: number): Promise<ListResponse<GameVersionsByType2>> {
    throw new Error('Method not implemented.');
  }
  // #endregion

  // #region Categories
  getCategories(
    params: GetCategoriesParameters,
  ): Promise<ListResponse<Category>> {
    throw new Error('Method not implemented.');
  }
  // #endregion

  // #region Mods
  searchMods(params: SearchModsParameters): Promise<PaginationResponse<Mod>> {
    throw new Error('Method not implemented.');
  }
  getMod(modId: number): Promise<DataResponse<Mod>> {
    throw new Error('Method not implemented.');
  }
  getMods(payload: GetModsByIdsListRequestBody): Promise<ListResponse<Mod>> {
    throw new Error('Method not implemented.');
  }
  getFeaturedMods(payload: GetFeaturedModsRequestBody): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getModDescription(params: GetModDescriptionParameters): Promise<void> {
    throw new Error('Method not implemented.');
  }
  // #endregion

  // #region Files
  getModFile(modId: number, fileId: number): Promise<DataResponse<File>> {
    throw new Error('Method not implemented.');
  }
  getModFiles(
    modId: number,
    params: GetModFilesParameters,
  ): Promise<PaginationResponse<File>> {
    throw new Error('Method not implemented.');
  }
  getFiles(payload: GetModFilesRequestBody): Promise<ListResponse<File>> {
    throw new Error('Method not implemented.');
  }
  getModFileChangelog(modId: number, fileId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getModFileDownloadURL(modId: number, fileId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  // #endregion

  // #region Minecraft
  getMinecraftVersions(
    sortDescending?: boolean,
  ): Promise<ListResponse<MinecraftGameVersion>> {
    throw new Error('Method not implemented.');
  }
  getSpecificMinecraftVersion(
    gameVersionString: string,
  ): Promise<DataResponse<MinecraftGameVersion>> {
    throw new Error('Method not implemented.');
  }
  getMinecraftModLoaders(
    params: GetMinecraftModLoadersParameters,
  ): Promise<ListResponse<MinecraftGameVersion>> {
    throw new Error('Method not implemented.');
  }
  getSpecificMinecraftModLoader(
    modLoaderName: string,
  ): Promise<DataResponse<MinecraftGameVersion>> {
    throw new Error('Method not implemented.');
  }
  // #endregion
}
