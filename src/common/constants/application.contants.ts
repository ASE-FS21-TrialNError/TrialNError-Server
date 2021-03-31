
// Order status ispired from stripe order api (for future integration with stripe orders api).
// https://stripe.com/docs/orders/guide#understanding-order-statuses

export const ENV_KEYS = {
  MONGODB_URI: 'MONGODB_URI',
  JWT_SECRET: 'JWT_SECRET',
  JWT_EXPIRES_IN: 'JWT_EXPIRES_IN',
  SMTP_HOST: 'SMTP_HOST',
  SMTP_PORT: 'SMTP_PORT',
  SMTP_USER: 'SMTP_USER',
  SMTP_PASSWORD: 'SMTP_PASSWORD'
};

export const EMAIL_TEMPLATES = {
  LOGIN_OTP_EMAIL: 'login_otp_email',
};
