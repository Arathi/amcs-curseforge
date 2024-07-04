import Category from './schemas/responses/category';
import DataResponse, {
  ListResponse,
  PaginationResponse,
} from './schemas/responses/data-response';
import Game from './schemas/responses/game';
import {
  GameVersionsByType,
  GameVersionsByType2,
  GameVersionType,
} from './schemas/responses/game-version';
import Mod from './schemas/responses/mod';
import File from './schemas/responses/file';
import { MinecraftGameVersion } from './schemas/responses/minecraft-game-version';
import { GetCategoriesParameters } from './schemas/requests/categories';
import { SearchModsParameters } from './schemas/requests/mods';
import {
  GetFeaturedModsRequestBody,
  GetModFilesRequestBody,
  GetModsByIdsListRequestBody,
} from './schemas/requests/bodies';
import {
  GetMinecraftModLoadersParameters,
  GetModDescriptionParameters,
} from './schemas/requests/parameters';
import { GetModFilesParameters } from './schemas/requests/files';

export const DEFAULT_BASE_URL = 'https://api.curseforge.com';
export const GAME_ID_MINECRAFT = 432;
export const CLASS_ID_MODS = 6;

export interface Options {
  apiKey: string;
  baseURL?: string;
}

export default interface CurseForgeApi {
  apiKey: string;
  baseURL: string;

  // #region Games
  /**
   * @deprecated
   */
  getGames(): Promise<PaginationResponse<Game>>;

  /**
   * 获取游戏信息
   *
   * @param gameId A game unique id
   */
  getGame(gameId: number): Promise<Game>;

  /**
   * 获取游戏版本列表
   *
   * @param gameId A game unique id
   */
  getVersions(gameId: number): Promise<ListResponse<GameVersionsByType>>;

  /**
   * 获取版本类型列表
   *
   * @param gameId A game unique id
   */
  getVersionTypes(gameId: number): Promise<ListResponse<GameVersionType>>;

  /**
   * 获取版本（V2）
   *
   * @param gameId A game unique id
   */
  getVersionsV2(gameId: number): Promise<ListResponse<GameVersionsByType2>>;
  // #endregion

  // #region Categories
  /**
   * 获取分类
   *
   * @param param 分类参数
   */
  getCategories(
    params: GetCategoriesParameters,
  ): Promise<ListResponse<Category>>;
  // #endregion

  // #region Mods
  /**
   * 搜索模组
   *
   * @param params 搜索条件
   */
  searchMods(params: SearchModsParameters): Promise<PaginationResponse<Mod>>;

  /**
   * 获取指定模组
   *
   * @param modId 模组ID
   */
  getMod(modId: number): Promise<DataResponse<Mod>>;

  /**
   * @deprecated
   */
  getMods(payload: GetModsByIdsListRequestBody): Promise<ListResponse<Mod>>;

  /**
   * @deprecated
   */
  getFeaturedMods(payload: GetFeaturedModsRequestBody): Promise<void>;

  /**
   * @deprecated
   */
  getModDescription(params: GetModDescriptionParameters): Promise<void>;
  // #endregion

  // #region Files
  /**
   * 获取指定模组文件
   *
   * @param modId 模组ID
   * @param fileId 文件ID
   */
  getModFile(modId: number, fileId: number): Promise<DataResponse<File>>;

  /**
   * 搜索指定模组的文件
   *
   * @param modId 模组ID
   * @param params 搜索条件
   */
  getModFiles(
    modId: number,
    params: GetModFilesParameters,
  ): Promise<PaginationResponse<File>>;

  /**
   * @deprecated
   */
  getFiles(payload: GetModFilesRequestBody): Promise<ListResponse<File>>;

  /**
   * @deprecated
   */
  getModFileChangelog(modId: number, fileId: number): Promise<void>;

  /**
   * @deprecated
   */
  getModFileDownloadURL(modId: number, fileId: number): Promise<void>;
  // #endregion

  // #region Minecraft
  /**
   * 获取Minecraft版本列表
   *
   * @param sortDescending 倒序排列
   */
  getMinecraftVersions(
    sortDescending?: boolean,
  ): Promise<ListResponse<MinecraftGameVersion>>;

  /**
   * 获取特定Minecraft版本
   *
   * @param gameVersionString 版本号
   */
  getSpecificMinecraftVersion(
    gameVersionString: string,
  ): Promise<DataResponse<MinecraftGameVersion>>;

  /**
   * 获取Minecraft模组加载器列表
   *
   * @param params 搜索条件
   */
  getMinecraftModLoaders(
    params: GetMinecraftModLoadersParameters,
  ): Promise<ListResponse<MinecraftGameVersion>>;

  /**
   * 获取特定模组加载器
   *
   * @param modLoaderName 模组加载器名称
   */
  getSpecificMinecraftModLoader(
    modLoaderName: string,
  ): Promise<DataResponse<MinecraftGameVersion>>;
  // #endregion
}
