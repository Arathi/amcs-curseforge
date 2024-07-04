import { describe, test, expect } from '@jest/globals';

import AbstractCurseForgeApi from './abstract-curseforge-api';
import {
  CLASS_ID_MODS,
  DEFAULT_BASE_URL,
  GAME_ID_MINECRAFT,
} from './curseforge-api';
import fetch from 'node-fetch';
import { ModLoaderType } from './schemas/requests/parameters';

const MOD_ID_JEI = 238222;
const FILE_ID_JEI = 3040523;

class TestCurseForgeApi extends AbstractCurseForgeApi {
  constructor() {
    const apiKey = process.env.CURSE_FORGE_API_KEY ?? '';
    const baseURL = DEFAULT_BASE_URL;
    super({
      apiKey,
      baseURL,
    });
  }

  async get<T>(uri: string, params?: Record<string, any>): Promise<T> {
    const url = new URL(`${this.baseURL}${uri}`);
    if (params !== undefined) {
      for (let name in params) {
        const value = `${params[name]}`;
        url.searchParams.set(name, value);
      }
    }
    const resp = await fetch(url, {
      method: 'GET',
      headers: {
        'x-api-key': this.apiKey,
      },
    });
    if (resp.status !== 200) {
      throw new Error(`发送GET请求出现错误，状态码：${resp.status}`);
    }
    const respBody = await resp.json();
    return respBody as T;
  }

  async post<T>(uri: string, payload?: any): Promise<T> {
    throw new Error(`未实现POST请求`);
  }
}

describe('测试CurseForge客户端', () => {
  const api = new TestCurseForgeApi();

  test('测试获取分类', async () => {
    const resp = await api.getCategories({
      gameId: GAME_ID_MINECRAFT,
    });

    const categories = resp.data;
    console.info(`获取到分类数量：`, categories.length);

    const mods = categories.find(cat => cat.id === CLASS_ID_MODS);
    expect(mods).not.toBe(undefined);
    expect(mods!.id).toBe(CLASS_ID_MODS);
    expect(mods!.gameId).toBe(GAME_ID_MINECRAFT);
    expect(mods!.slug).toBe('mc-mods');

    console.info(`获取到mods分类：`, mods);
  });

  test('测试搜索模组', async () => {
    const resp = await api.searchMods({
      gameId: GAME_ID_MINECRAFT,
      classId: CLASS_ID_MODS,
      gameVersion: '1.20.1',
      searchFilter: 'jei',
    });

    const { data: mods, pagination } = resp;
    console.info(`获取到模组数量：`, mods.length);
    console.info(`获取到分页信息：`, pagination);

    const jei = mods.find(mod => mod.slug === 'jei');
    expect(jei).not.toBe(undefined);
    expect(jei!.id).toBe(238222);
    expect(jei!.gameId).toBe(GAME_ID_MINECRAFT);
    expect(jei!.name).toBe('Just Enough Items (JEI)');
    console.info(`获取到jei模组信息：`, jei);
  });

  test('测试模组文件获取', async () => {
    const resp = await api.getModFile(MOD_ID_JEI, FILE_ID_JEI);

    const jei = resp.data;
    expect(jei.gameId).toBe(GAME_ID_MINECRAFT);
    expect(jei.displayName).toBe('jei_1.12.2-4.16.1.301.jar');
    const [sha1, md5] = jei.hashes;
    expect(sha1.value).toBe('3045e8440ea44071d8b83c4e7b3c190348fdc527');
    expect(md5.value).toBe('1dee4be93d666e2228039c551e927b35');
    expect(jei.fileLength).toBe(653211);
    expect(jei.fileFingerprint).toBe(3089143260);

    console.info(`获取到jei文件信息：`, jei);
  });

  test('测试模组文件列表获取', async () => {
    const resp = await api.getModFiles(MOD_ID_JEI, {
      gameVersion: '1.21',
      modLoaderType: ModLoaderType.Forge,
    });

    const { data: files, pagination } = resp;
    console.info(`获取到文件数量：`, files.length);
    console.info(`获取到分页信息：`, pagination);

    const latest = files[0];
    expect(latest).not.toBe(undefined);
    expect(latest!.gameId).toBe(GAME_ID_MINECRAFT);

    console.info(`获取到最新jei文件信息：`, latest);
  });
});
