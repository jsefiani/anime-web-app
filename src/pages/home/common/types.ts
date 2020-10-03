export type AnimeSerie = {
  id: number;
  title: { english: string };
  genres: string[];
  averageScore: number;
  episodes: number;
  coverImage: {
    extraLarge: string;
    large: string;
  };
};
