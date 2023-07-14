import { TypePhotos } from './profileTypes';

export type TypeUser = {
  name: string;
  id: number;
  uniqueUrlName: string | null;
  photos: TypePhotos;
  status: string;
  followed: boolean;
};

export type TypeUserItems = {
  items: Array<TypeUser>;
  totalCount: number;
  error: string | null;
};
