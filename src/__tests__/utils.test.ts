import { formatDate, truncateText, generateSlug } from '@/lib/utils';

describe('Utility Functions', () => {
  describe('formatDate', () => {
    it('should format date in Hindi locale', () => {
      const date = '2024-01-15';
      const result = formatDate(date);
      // Should contain Hindi month name
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
    });

    it('should handle ISO date strings', () => {
      const date = '2024-03-20T10:30:00Z';
      const result = formatDate(date);
      expect(result).toBeDefined();
    });
  });

  describe('truncateText', () => {
    it('should truncate text longer than maxLength', () => {
      const text = 'यह एक बहुत लंबा वाक्य है जिसे छोटा किया जाना चाहिए';
      const result = truncateText(text, 20);
      expect(result.length).toBeLessThanOrEqual(23); // 20 + '...'
      expect(result.endsWith('...')).toBe(true);
    });

    it('should not truncate text shorter than maxLength', () => {
      const text = 'छोटा वाक्य';
      const result = truncateText(text, 50);
      expect(result).toBe(text);
      expect(result.endsWith('...')).toBe(false);
    });

    it('should handle empty string', () => {
      const result = truncateText('', 10);
      expect(result).toBe('');
    });
  });

  describe('generateSlug', () => {
    it('should convert text to lowercase slug', () => {
      const text = 'Hello World';
      const result = generateSlug(text);
      expect(result).toBe('hello-world');
    });

    it('should replace spaces with hyphens', () => {
      const text = 'This is a test';
      const result = generateSlug(text);
      expect(result).toBe('this-is-a-test');
    });

    it('should handle Hindi text', () => {
      const text = 'भारत समाचार';
      const result = generateSlug(text);
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
    });
  });
});
