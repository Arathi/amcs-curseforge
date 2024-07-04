import Category from './category';
import File from './file';

export default interface Mod {
  id: number;
  gameId: number;
  name: string;
  slug: string;
  links: ModLinks;
  summary: string;
  status: ModStatus;
  downloadCount: BigInt;
  isFeatured: boolean;
  primaryCategoryId: number;
  categories: Category[];
  classId?: number;
  authors: Author[];
  logo: ModAsset;
  screenshots: ModAsset[];
  mainFileId: number;
  latestFiles: File[];
  latestFilesIndexes: FileIndex[];
  latestEarlyAccessFilesIndexes: FileIndex[];
  dateCreated: string;
  dateModified: string;
  dateReleased: string;
  allowModDistribution?: boolean;
  gamePopularityRank: number;
  isAvailable: boolean;
  thumbsUpCount: number;
  rating?: number;
}

interface ModLinks {
  websiteUrl: string;
  wikiUrl: string;
  issuesUrl: string;
  sourceUrl: string;
}

enum ModStatus {
  New = 1,
  ChangesRequired = 2,
  UnderSoftReview = 3,
  Approved = 4,
  Rejected = 5,
  ChangesMade = 6,
  Inactive = 7,
  Abandoned = 8,
  Deleted = 9,
  UnderReview = 10,
}

export interface Author {
  id: number;
  name: string;
  url: string;
}

export interface ModAsset {
  id: number;
  modId: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  url: string;
}

export interface FileIndex {
  gameVersion: string;
  fileId: number;
  filename: string;
  releaseType: number;
  gameVersionTypeId: number;
  modLoader: number;
}
