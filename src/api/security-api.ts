import { securityEndpoints } from '../spec/endpoints';
import { instance } from './api';

type GetCaptchaUrlResponseType = {
  url: string;
};

export const securityAPI = {
  getCaptcha() {
    return instance
      .get<GetCaptchaUrlResponseType>(securityEndpoints.getCaptcha())
      .then((resp) => resp.data);
  }
};
