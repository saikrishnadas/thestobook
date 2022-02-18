export type BookProps = {
    _id: string;
    name: string;
    slug: string;
    author: string;
    authorId:string;
    img: string;
    category?:string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
  };

export type AuthorProps = {
  _id: string;
  name: string;
  slug: string;
  authorId:string;
  img: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
  
export type HomeProps = {
    books?: BookProps[];
    authors?: AuthorProps[];
  };