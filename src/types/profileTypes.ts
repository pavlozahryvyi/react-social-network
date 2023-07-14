export type PostElementType = {
  id: number;
  text: string;
  likesCount: number;
};
export type TypePhotos = {
  small: string | null;
  large: string | null;
};
export type TypeProfile = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  aboutMe: string;
  contacts: TypeContacts;
  photos: TypePhotos;
};
export type TypeStatus = {
  status: string;
};
export type TypeContacts = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};
