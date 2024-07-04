import { Options, DEFAULT_BASE_URL } from './curseforge-api';
import CurseForgeApiAdapter from './curseforge-api-adapter';
import { GetCategoriesParameters } from './schemas/requests/categories';
import { GetModFilesParameters } from './schemas/requests/files';
import { SearchModsParameters } from './schemas/requests/mods';
import { GetMinecraftModLoadersParameters } from './schemas/requests/parameters';
import Category from './schemas/responses/category';
import DataResponse, {
  ListResponse,
  PaginationResponse,
} from './schemas/responses/data-response';
import File from './schemas/responses/file';
import { MinecraftGameVersion } from './schemas/responses/minecraft-game-version';
import Mod from './schemas/responses/mod';

export default abstract class AbstractCurseForgeApi extends CurseForgeApiAdapter {
  constructor({ apiKey, baseURL = DEFAULT_BASE_URL }: Options) {
    super({
      apiKey,
      baseURL,
    });
  }

  // #region getters
  get apiKeyHeader(): Record<string, any> {
    return {
      'x-api-key': this.apiKey,
    };
  }
  // #endregion

  // #region Categories
  /**
   * 获取分类
   *
   * @param param 分类参数
   */
  getCategories(
    params: GetCategoriesParameters,
  ): Promise<ListResponse<Category>> {
    return this.get(`/v1/categories`, params);
  }
  // #endregion

  // #region Mods
  /**
   * 搜索模组
   *
   * @param params 搜索条件
   */
  searchMods(params: SearchModsParameters): Promise<PaginationResponse<Mod>> {
    return this.get(`/v1/mods/search`, params);
  }

  /**
   * 获取指定模组
   *
   * @param modId 模组ID
   */
  getMod(modId: number): Promise<DataResponse<Mod>> {
    return this.get(`/v1/mods/${modId}`);
  }
  // #endregion

  // #region Files
  /**
   * 获取指定模组文件
   *
   * @param modId 模组ID
   * @param fileId 文件ID
   */
  getModFile(modId: number, fileId: number): Promise<DataResponse<File>> {
    return this.get(`/v1/mods/${modId}/files/${fileId}`);
  }

  /**
   * 搜索指定模组的文件
   *
   * @param modId 模组ID
   * @param params 搜索条件
   */
  getModFiles(
    modId: number,
    params: GetModFilesParameters,
  ): Promise<PaginationResponse<File>> {
    return this.get(`/v1/mods/${modId}/files`, params);
  }
  // #endregion

  // #region Minecraft
  /**
   * 获取Minecraft版本列表
   *
   * @param sortDescending 倒序排列
   */
  getMinecraftVersions(
    sortDescending?: boolean,
  ): Promise<ListResponse<MinecraftGameVersion>> {
    const params = { sortDescending };
    return this.get(`/v1/minecraft/version`, params);
  }

  /**
   * 获取特定Minecraft版本
   *
   * @param gameVersionString 版本号
   */
  getSpecificMinecraftVersion(
    gameVersionString: string,
  ): Promise<DataResponse<MinecraftGameVersion>> {
    return this.get(`/v1/minecraft/version/${gameVersionString}`);
  }

  /**
   * 获取Minecraft模组加载器列表
   *
   * @param params 搜索条件
   */
  getMinecraftModLoaders(
    params: GetMinecraftModLoadersParameters,
  ): Promise<ListResponse<MinecraftGameVersion>> {
    return this.get(`/v1/minecraft/modloader`, params);
  }

  /**
   * 获取特定模组加载器
   *
   * @param modLoaderName 模组加载器名称
   */
  getSpecificMinecraftModLoader(
    modLoaderName: string,
  ): Promise<DataResponse<MinecraftGameVersion>> {
    return this.get(`/v1/minecraft/modloader/${modLoaderName}`);
  }
  // #endregion

  /**
   * 发送GET请求
   *
   * @param uri URI
   * @param params 参数
   */
  abstract get<T>(uri: string, params?: Record<string, any>): Promise<T>;

  /**
   * 发送POST请求
   * @param uri URI
   * @param payload 报文体
   */
  abstract post<T>(uri: string, payload?: any): Promise<T>;
}
