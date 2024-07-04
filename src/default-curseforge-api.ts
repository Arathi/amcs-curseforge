import AbstractCurseForgeApi from './abstract-curseforge-api';
import { Options, DEFAULT_BASE_URL } from './curseforge-api';

export default class DefaultCurseForgeApi extends AbstractCurseForgeApi {
  constructor({ apiKey, baseURL = DEFAULT_BASE_URL }: Options) {
    super({ apiKey, baseURL });
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
        ...this.apiKeyHeader,
      },
    });

    if (resp.status !== 200) {
      throw new Error(`发送GET请求出现错误，状态码：${resp.status}`);
    }

    return resp.json();
  }

  async post<T>(uri: string, payload: any): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
