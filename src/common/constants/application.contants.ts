export const ROLES = {
  ADMIN: 'ROLES.ADMIN',
  CUSTOMER: 'ROLES.CUSTOMER',
};



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
  RESET_PASSWORD_EMAIL: 'reset_password_email',
  RETURN_POLICY_EMAIL: 'return_policy_email',
  PRODUCT_CONDITION_EMAIL: 'product_condition_email',
  PURCHASE_CONFIRMATION_EMAIL: 'purchase_confirmation_email',
};
