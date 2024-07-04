export default interface File {
  id: number;
  gameId: number;
  modId: number;
  isAvailable: boolean;
  displayName: string;
  fileName: string;
  releaseType: number;
  fileStatus: number;
  hashes: Hashes[];
  fileDate: string;
  fileLength: number;
  downloadCount: number;
  fileSizeOnDisk: number;
  downloadUrl: string;
  gameVersions: string[];
  sortableGameVersions: SortableGameVersion[];
  dependencies: FileDependency[];
  exposeAsAlternative: boolean;
  parentProjectFileId: number;
  alternateFileId: number;
  isServerPack: boolean;
  serverPackFileId: number;
  isEarlyAccessContent: boolean;
  earlyAccessEndDate: string;
  fileFingerprint: number;
  modules: Module[];
}

export interface Hashes {
  value: string;
  algo: number;
}

export interface SortableGameVersion {
  gameVersionName: string;
  gameVersionPadded: string;
  gameVersion: string;
  gameVersionReleaseDate: string;
  gameVersionTypeId: number;
}

export interface FileDependency {
  modId: number;
  relationType: FileRelationType;
}

export enum FileRelationType {
  EmbeddedLibrary = 1,
  OptionalDependency = 2,
  RequiredDependency = 3,
  Tool = 4,
  Incompatible = 5,
  Include = 6,
}

export interface Module {
  name: string;
  fingerprint: number;
}
