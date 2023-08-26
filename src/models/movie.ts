
export interface Movie {
  adult?: boolean,
  backdrop_path?: string,
  genre_ids?: number[],
  id: number,
  original_language?: string,
  original_title?: string,
  overview?: string,
  popularity?: 3413.036,
  poster_path?: string,
  release_date?: string,
  title?: string,
  video?: boolean,
  vote_average?: number,
  vote_count?: number,
}

export interface MovieProps {
  movie: Movie
}
