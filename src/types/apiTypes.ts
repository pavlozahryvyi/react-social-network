export enum EnumResultCodes {
  Success = 0,
  Error = 1
}

export enum EnumCaptchaResultCode {
  CaptchaIsRequired = 10
}

export type APIResponseType<
  D = object,
  RC = EnumResultCodes | EnumCaptchaResultCode
> = {
  data: D;
  resultCode: RC;
  messages: Array<string>;
};
