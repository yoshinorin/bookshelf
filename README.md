# Bookshelf

A website to display a list of books.

## Architecture

This application runs in SSR (Server-Side Rendering) mode with a Node.js server. This design allows the application to run behind a reverse proxy. Book data (`books.json`) is fetched client-side to keep the architecture simple and enable client-side filtering/search.

## Prerequisites

- Node.js 24 LTS or later

## Setup

```sh
$ npm install
$ cp config.example.ts src/config.ts
$ mkdir -p data
$ touch data/books.json  # Add your book data (see "Book Data" section)
```

## Development

```sh
$ npm run dev
```

Open http://localhost:4321 in your browser. Files are automatically reloaded on save.

## Production

### Build

```sh
$ npm run build
```

### Run (Node.js)

```sh
$ node dist/server/entry.mjs
```

Or with a custom port:

```sh
$ PORT=3000 node dist/server/entry.mjs
```

### Run (pm2)

Start the server as a pm2 managed process using the `ecosystem.config.js` configuration:

```sh
$ npm run pm2:start      # Start (pm2 start ecosystem.config.js)
$ npm run pm2:stop       # Stop  (pm2 stop ecosystem.config.js)
$ npm run pm2:restart    # Restart (pm2 restart ecosystem.config.js)
```

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `4321` | Server port |

## Configuration

1. Copy `config.example.ts` to `src/config.ts`
2. Edit `src/config.ts` to customize the site

```sh
cp config.example.ts src/config.ts
```

| Category | Settings |
|----------|----------|
| `site` | Site name, author name |
| `footer` | Copyright start year, "Powered by" text |
| `pagination` | Items per page |
| `data` | Path to books.json API |
| `amazon` | Image/product URL templates |
| `ui` | Alert message, form labels, menu button text |
| `menu` | Navigation menu items (label, href, external) |
| `pages` | Page content (about, privacyPolicy) |

## Book Data

Place your book data in `data/books.json`. The file should contain an array of book objects:

```json
[
  {
    "isbn10": "1234567890",
    "isbn13": "9781234567890",
    "title": "Example Book Title",
    "genre": "Programming",
    "readAt": 1704067200000,
    "imageUrl": "https://example.com/cover.jpg",
    "productUrl": "https://example.com/book"
  },
  {
    "isbn10": "0987654321",
    "title": "Another Book",
    "genre": "Fiction",
    "readAt": 1701388800000
  }
]
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `isbn10` | string | No | ISBN-10 (used for Amazon image/link if no custom URL) |
| `isbn13` | string | No | ISBN-13 |
| `title` | string | Yes | Book title |
| `genre` | string | Yes | Genre for filtering |
| `readAt` | number | Yes | Read date as Unix timestamp (milliseconds) |
| `imageUrl` | string | No | Custom cover image URL |
| `productUrl` | string | No | Custom product page URL |

## Directory Structure

```
├── config.example.ts   # Configuration template
├── data/
│   └── books.json      # Book data (not committed)
└── src/
    ├── config.ts       # Site configuration (not committed)
    ├── components/     # Reusable components
    ├── layouts/        # Page layouts
    ├── pages/          # Pages (file-based routing)
    │   └── api/        # API endpoints
    ├── styles/         # Global CSS
    └── types/          # TypeScript type definitions
```
