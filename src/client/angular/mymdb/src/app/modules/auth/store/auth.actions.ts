import { createAction, props } from '@ngrx/store';

import { User } from '../../shared/models/user.model';
import { IHttpError } from '../../shared/models/http-error.model';

/**
 * SIGN_UP_START
 */
interface ISignUpStartProps {
  email: string;
  password: string;
};

export const signUpStart = createAction(
  '[Auth] Sign Up Start',
  props<ISignUpStartProps>()
);

/**
 * AUTO_SIGN_IN
 */
export const autoSignIn = createAction(
  '[Auth] Auto Sign In'
);

/**
 * SIGN_IN_START
 */
interface ISignInStartProps {
  email: string;
  password: string;
};

export const signInStart = createAction(
  '[Auth] Sign In Start',
  props<ISignInStartProps>()
);

/**
 * AUTHENTICATE_SUCCESS
 */
interface IAuthenticateSuccessProps {
  user: User;
  redirect: boolean;
};

export const authenticateSuccess = createAction(
  '[Auth] Authenticate Success',
  props<IAuthenticateSuccessProps>()
);

/**
 * AUTHENTICATE_ERROR
 */
interface IAuthenticateErrorProps {
  error: IHttpError;
};

export const authenticateError = createAction(
  '[Auth] Authenticate Error',
  props<IAuthenticateErrorProps>()
);

/**
 * SIGN_OUT
 */
export const signOut = createAction(
  '[Auth] Sign Out'
);

/**
 * RESET_ERROR
 */

export const resetError = createAction(
  '[Auth] Reset Error'
);
