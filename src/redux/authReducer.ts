import { ResultCodeForCaptchaEnum, ResultCodesEnum } from '../api/api';
import { stopSubmit } from 'redux-form';
import { securityAPI } from '../api/security-api';
import { authAPI } from '../api/auth-api';
import { InferActionsTypes, BaseThunkType } from './redux-store';

const SET_USER_DATA = 'authReducer/SET_USER_DATA';
const SET_CAPTCHA = 'authReducer/SET_CAPTCHA';

const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null
};

type initialStateType = typeof initialState;
type ActionType = InferActionsTypes<typeof authActions>;
export type ThunkType = BaseThunkType<
  ActionType | ReturnType<typeof stopSubmit>
>;

const authReducer = (
  state = initialState,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        captchaUrl: null
      };
    case SET_CAPTCHA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export const authActions = {
  setAuthUserData: (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) =>
    ({
      type: SET_USER_DATA,
      payload: { id, email, login, isAuth }
    } as const),
  setCaptcha: (captchaUrl: string) =>
    ({
      type: SET_CAPTCHA,
      payload: { captchaUrl }
    } as const)
};

export default authReducer;
