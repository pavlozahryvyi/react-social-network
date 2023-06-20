type UserType = {
  name: String;
  surName: String;
  age: Number;
};

type Photo = {
  width: number;
  height: number;
  src: string;
  author: string;
};

type ServerResponse<T> = {
  code: number;
  error: number | null;
  data: Array<T>;
};

const userResponse: ServerResponse<UserType> = {
  code: 200,
  error: null,
  data: [
    {
      name: 'Pavlel',
      surName: 'Zahryvyi',
      age: 26
    }
  ]
};

const photoResponse: ServerResponse<Photo> = {
  code: 200,
  error: null,
  data: [
    {
      width: 20,
      height: 30,
      src: 'www.google.com',
      author: 'Pavlo Zahryvyi'
    }
  ]
};
