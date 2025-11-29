/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsCard from '@/components/NewsCard';
import { Article } from '@/types/article';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean }) => {
    const { fill, ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...rest} alt={rest.alt || ''} />;
  },
}));

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe('NewsCard Component', () => {
  const mockArticle: Article = {
    id: '1',
    title: 'टेस्ट समाचार शीर्षक',
    slug: 'test-news-slug',
    summary: 'यह एक टेस्ट सारांश है',
    content: 'पूर्ण सामग्री यहां है',
    image: 'https://example.com/image.jpg',
    category: 'देश',
    author: 'टेस्ट लेखक',
    publishedAt: '2024-01-15',
    isFeatured: false,
    isBreaking: false,
    readTime: 5,
  };

  it('should render article title', () => {
    render(<NewsCard article={mockArticle} />);
    expect(screen.getByText('टेस्ट समाचार शीर्षक')).toBeInTheDocument();
  });

  it('should render article category', () => {
    render(<NewsCard article={mockArticle} />);
    expect(screen.getByText('देश')).toBeInTheDocument();
  });

  it('should render article summary', () => {
    render(<NewsCard article={mockArticle} />);
    expect(screen.getByText('यह एक टेस्ट सारांश है')).toBeInTheDocument();
  });

  it('should link to article page', () => {
    render(<NewsCard article={mockArticle} />);
    const links = screen.getAllByRole('link');
    const articleLink = links.find(link => link.getAttribute('href') === '/article/test-news-slug');
    expect(articleLink).toBeInTheDocument();
  });

  it('should handle missing image gracefully', () => {
    const articleWithoutImage = { ...mockArticle, image: null };
    render(<NewsCard article={articleWithoutImage} />);
    // Should still render without crashing
    expect(screen.getByText('टेस्ट समाचार शीर्षक')).toBeInTheDocument();
  });

  it('should handle long titles', () => {
    const longTitle = 'यह एक बहुत लंबा शीर्षक है जो कई पंक्तियों में फैला हुआ है और इसे ठीक से प्रदर्शित किया जाना चाहिए';
    const articleWithLongTitle = { ...mockArticle, title: longTitle };
    render(<NewsCard article={articleWithLongTitle} />);
    // Should render the title (possibly truncated by CSS)
    expect(screen.getByText(longTitle)).toBeInTheDocument();
  });
});
