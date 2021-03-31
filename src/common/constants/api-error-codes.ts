export const APP_ERROR_CODES = {
  REGISTRATION: {
    EMAIL_ALREADY_EXISTS: {
      errorCode: 101,
      error: 'ERROR.REGISTRATION.EMAIL_ALREADY_EXISTS',
      message: '',
    },
    EMAIL_NOT_SENT: {
      errorCode: 102,
      error: 'ERROR.REGISTRATION.EMAIL_NOT_SENT',
      message: '',
    },
    GENERIC_ERROR: {
      errorCode: 103,
      error: 'ERROR.REGISTRATION.GENERIC_ERROR',
      message: '',
    },
    EMAIL_OTP_NOT_VALID: {
      errorCode: 104,
      error: 'ERROR.REGISTRATION.EMAIL_OTP_NOT_VALID',
      message: '',
    },
    EMAIL_SENDED_RECENTLY: {
      errorCode: 105,
      error: 'ERROR.REGISTRATION.EMAIL_SENDED_RECENTLY',
      message: '',
    },
  },

  LOGIN: {
    INVALID_CREDENTIALS: {
      errorCode: 201,
      error: 'ERROR.LOGIN.INVALID_CREDENTIALS',
      message: '',
      status: 401,
    },
    USER_NOT_FOUND: {
      errorCode: 202,
      error: 'ERROR.LOGIN.USER_NOT_FOUND',
      message: '',
    },
    EMAIL_NOT_VERIFIED: {
      errorCode: 203,
      error: 'ERROR.LOGIN.EMAIL_NOT_VERIFIED',
      message: '',
    },
  },

  NOTIFICATION: {
    EMAIL_NOT_SENT: {
      errorCode: 801,
      error: 'ERROR.NOTIFICATION.EMAIL_NOT_SENT',
      message: '',
    },
  },
};
