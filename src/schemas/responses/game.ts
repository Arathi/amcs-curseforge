export default interface Game {
  id: number;
  name: string;
  slug: string;
  dateModified: string;
  assets: GameAssets;
  status: CoreStatus;
  apiStatus: CoreApiStatus;
}

interface GameAssets {
  iconUrl: string;
  tileUrl: string;
  coverUrl: string;
}

enum CoreStatus {
  Draft = 1,
  Test = 2,
  PendingReview = 3,
  Rejected = 4,
  Approved = 5,
  Live = 6,
}

enum CoreApiStatus {
  Private = 1,
  Public = 2,
}
