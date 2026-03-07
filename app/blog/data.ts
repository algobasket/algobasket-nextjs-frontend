export const blogPosts = [
  {
    id: 1,
    slug: 'release-update-1',
    year: 2025,
    title: 'Release Update 1',
    excerpt: 'Latest updates and fixes across our open-source and premium products.',
    category: 'Releases',
    date: 'Mar 5, 2025',
    readTime: '4 min read',
    image: '/assets/_7d292370-0d52-48b9-bd58-125fb4ebea66.jpg',
  },
  {
    id: 2,
    slug: 'release-update-2',
    year: 2025,
    title: 'Release Update 2',
    excerpt: 'New features and improvements for AlgoSeek CRM and collaboration tools.',
    category: 'Features',
    date: 'Feb 28, 2025',
    readTime: '5 min read',
    image: '/assets/_ac27c117-f4ce-4fe1-b2fd-d55b3c7f790f.jpg',
  },
  {
    id: 3,
    slug: 'open-source-updates',
    year: 2025,
    title: 'Open Source Updates',
    excerpt: 'Community contributions and improvements to our free tier products.',
    category: 'Open Source',
    date: 'Feb 20, 2025',
    readTime: '3 min read',
    image: '/assets/_845d11f3-6f93-45dc-85c9-f4a4469afe79.jpg',
  },
  {
    id: 4,
    slug: 'premium-updates',
    year: 2025,
    title: 'Premium Updates',
    excerpt: 'Enterprise features and dedicated support enhancements.',
    category: 'Premium',
    date: 'Feb 15, 2025',
    readTime: '6 min read',
    image: '/assets/_7d292370-0d52-48b9-bd58-125fb4ebea66.jpg',
  },
  {
    id: 5,
    slug: 'community-issues',
    year: 2025,
    title: 'Community Issues Resolved',
    excerpt: 'Bug fixes and improvements based on community feedback.',
    category: 'Community',
    date: 'Feb 10, 2025',
    readTime: '4 min read',
    image: '/assets/_ac27c117-f4ce-4fe1-b2fd-d55b3c7f790f.jpg',
  },
  {
    id: 6,
    slug: 'api-improvements',
    year: 2024,
    title: 'API & Integration Improvements',
    excerpt: 'Faster APIs, better webhooks, and new integration options.',
    category: 'Technical',
    date: 'Dec 15, 2024',
    readTime: '7 min read',
    image: '/assets/_845d11f3-6f93-45dc-85c9-f4a4469afe79.jpg',
  },
]

export function getArchiveByYear() {
  const yearCounts = blogPosts.reduce<Record<number, number>>((acc, post) => {
    const year = post.year ?? new Date(post.date).getFullYear()
    acc[year] = (acc[year] ?? 0) + 1
    return acc
  }, {})
  return Object.entries(yearCounts)
    .map(([year, count]) => ({ year: parseInt(year, 10), count }))
    .sort((a, b) => b.year - a.year)
}
