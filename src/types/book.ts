export interface IBook {
  asin?: string;
  isbn10?: string;
  isbn13?: string;
  title: string;
  genre: string;
  publisher?: string;
  readAt: number;
  imageUrl?: string;
  productUrl?: string;
}
