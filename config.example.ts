export const config = {
  site: {
    name: 'My Bookshelf',
    author: 'Your Name',
    url: 'https://example.com',
  },
  footer: {
    copyrightStartYear: 2026,
    poweredBy: 'Powered by Astro',
  },
  pagination: {
    perPage: 18,
  },
  data: {
    booksPath: '/api/books.json',
  },
  amazon: {
    imageUrlTemplate: 'https://images-fe.ssl-images-amazon.com/images/P/{isbn10}.jpg',
    productUrlTemplate: 'https://www.amazon.co.jp/exec/obidos/ASIN/{isbn10}',
  },
  ui: {
    alertMessage: 'A list of books I have read. Sorted by date read in descending order.',
    labels: {
      year: 'Year',
      title: 'Title',
      genre: 'Genre',
      genreAll: 'All',
      bookCount: 'Total: {count} books',
      loadMore: 'Load more',
    },
    menuButton: 'Menu',
  },
  menu: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about/' },
    { label: 'Privacy Policy', href: '/privacy-policy/' },
    { label: 'Blog', href: 'https://example.com/blog', external: true },
    { label: 'Author', href: 'https://example.com/about', external: true },
  ],
  pages: {
    about: {
      title: 'About This Site',
      content: 'A personal bookshelf to track books I have read.',
    },
    privacyPolicy: {
      title: 'Privacy Policy',
      sections: [
        {
          heading: 'Disclaimer',
          content: 'The information on this site is provided as-is. I am not responsible for any damages arising from the use of this information.',
        },
        {
          heading: 'Analytics',
          content: 'This site does not use any analytics.',
        },
      ],
    },
  },
} as const;

export type Config = typeof config;
