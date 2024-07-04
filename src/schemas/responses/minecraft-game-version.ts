import { GameVersionTypeStatus } from "./game-version";

export interface MinecraftGameVersion {
  id: number;
  gameVersionId: number;
  versionString: string;
  jarDownloadUrl: string;
  jsonDownloadUrl: string;
  approved: boolean;
  dateModified: string;
  gameVersionTypeId: number;
  gameVersionStatus: GameVersionStatus;
  gameVersionTypeStatus: GameVersionTypeStatus;
}

enum GameVersionStatus {
  Approved = 1,
  Deleted = 2,
  New = 3,
}
