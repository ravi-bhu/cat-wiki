import { Cat, Rating } from './cat.model';

const getRating = (cat: any): Rating => ({
  adaptability: cat.adaptability,
  affectionLevel: cat.affection_level,
  childFriendly: cat.child_friendly,
  grooming: cat.grooming,
  intelligence: cat.intelligence,
  healthIssues: cat.health_issues,
  socialNeeds: cat.social_needs,
  strangerFriendly: cat.stranger_friendly,
});

export const toCat = (cat: any, url: string): Cat => ({
  breed: cat.id,
  name: cat.name,
  thumbnailUrl: url,
  description: cat.description,
  temperament: cat.temperament,
  origin: cat.origin,
  lifeSpan: cat.life_span,
  rating: getRating(cat),
});
