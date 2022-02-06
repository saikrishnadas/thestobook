export type BookProps = {
    _id: string;
    name: string;
    slug: string;
    author: string;
    img: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
  };
  
export type HomeProps = {
    books: BookProps[];
  };