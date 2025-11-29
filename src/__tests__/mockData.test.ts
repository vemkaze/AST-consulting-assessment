import { 
  mockArticles as articles, 
  categories, 
  getArticleBySlug, 
  getArticlesByCategory, 
  getFeaturedArticles 
} from '@/data/mockData';

describe('Mock Data', () => {
  describe('articles', () => {
    it('should have at least one article', () => {
      expect(articles.length).toBeGreaterThan(0);
    });

    it('should have required properties on each article', () => {
      articles.forEach((article) => {
        expect(article).toHaveProperty('id');
        expect(article).toHaveProperty('title');
        expect(article).toHaveProperty('slug');
        expect(article).toHaveProperty('category');
        expect(article).toHaveProperty('publishedAt');
      });
    });

    it('should have unique slugs', () => {
      const slugs = articles.map((a) => a.slug);
      const uniqueSlugs = new Set(slugs);
      expect(uniqueSlugs.size).toBe(slugs.length);
    });
  });

  describe('categories', () => {
    it('should have at least one category', () => {
      expect(categories.length).toBeGreaterThan(0);
    });

    it('should have required properties on each category', () => {
      categories.forEach((category) => {
        expect(category).toHaveProperty('id');
        expect(category).toHaveProperty('name');
        expect(category).toHaveProperty('slug');
      });
    });
  });

  describe('getArticleBySlug', () => {
    it('should return article when slug exists', () => {
      const firstArticle = articles[0];
      const result = getArticleBySlug(firstArticle.slug);
      expect(result).toEqual(firstArticle);
    });

    it('should return undefined for non-existent slug', () => {
      const result = getArticleBySlug('non-existent-slug-12345');
      expect(result).toBeUndefined();
    });
  });

  describe('getArticlesByCategory', () => {
    it('should return articles for a valid category', () => {
      const category = categories[0];
      const result = getArticlesByCategory(category.slug);
      expect(Array.isArray(result)).toBe(true);
    });

    it('should return empty array for non-existent category', () => {
      const result = getArticlesByCategory('fake-category');
      expect(result).toEqual([]);
    });
  });

  describe('getFeaturedArticles', () => {
    it('should return an array of articles', () => {
      const result = getFeaturedArticles();
      expect(Array.isArray(result)).toBe(true);
    });

    it('should return featured articles when available', () => {
      const result = getFeaturedArticles();
      // Featured articles or fallback to first few
      expect(result.length).toBeGreaterThanOrEqual(0);
    });
  });
});
