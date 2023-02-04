export type CatSummary = {
  id: string;
  breed: string;
  name: string;
  imageUrl: string;
  description: string;
};

export type Cat = {
  breed: string;
  name: string;
  thumbnailUrl: string;
  description: string;
  temperament: string;
  origin: string;
  lifeSpan: string;
  rating: Rating;
};

export type Rating = {
  adaptability: number;
  affectionLevel: number;
  childFriendly: number;
  grooming: number;
  intelligence: number;
  healthIssues: number;
  socialNeeds: number;
  strangerFriendly: number;
};
