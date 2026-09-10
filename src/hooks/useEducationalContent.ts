import { VIDEOS, ARTICLES } from '../domain/content/content';

export function useEducationalContent() {
  return {
    videos: VIDEOS,
    articles: ARTICLES,
  };
}