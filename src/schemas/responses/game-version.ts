export default interface GameVersion {
  id: number;
  slug: string;
  name: string;
}

export interface GameVersionType {
  id: number;
  gameId: number;
  name: string;
  slug: string;
  isSyncable: boolean;
  status: GameVersionTypeStatus;
}

export enum GameVersionTypeStatus {
  Normal = 1,
  Deleted = 2,
}

export interface GameVersionsByType {
  type: number;
  versions: Array<string>;
}

export interface GameVersionsByType2 {
  type: number;
  versions: Array<GameVersion>;
}
