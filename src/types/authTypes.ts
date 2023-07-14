export type TypeLoginParams = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: null | string;
};

export type TypeLoginFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};
