import { APIResponseType, instance } from './api';

type GetCaptchaUrlResponseType = {
  url: string;
};

export const securityAPI = {
  getCaptcha() {
    return instance
      .get<GetCaptchaUrlResponseType>('/security/get-captcha-url')
      .then((resp) => resp.data);
  }
};
