# CurseForge API

查看[官方文档](https://docs.curseforge.com/)。

## 使用方法

### 查找模组

```typescript
import CurseForgeApi, { ModLoaderType } from '@amcs/curseforge';

const apiKey = process.env.CURSE_FORGE_API_KEY ?? '';
const api = new CurseForgeApi({ apiKey });

const resp = api.searchMods({
  gameId: 432,
  classId: 6,
  gameVersion: '1.20.1',
  modLoaderType: ModLoaderType.Forge,
  searchFilter: 'jei',
});

const { data: mods, pagination } = resp;
const { totalCount } = pagination;

console.info(`获取到 ${mods.length} 个模组，总共 ${totalCount} 个`);
```
