export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const MIN_PASSWORD_LENGTH = 6;

export const validatePassword = (password: string): boolean => {
  return password.length >= MIN_PASSWORD_LENGTH;
};

const MIN_NAME_LENGTH = 2;

export const validateName = (name: string): boolean => {
  return name.length >= MIN_NAME_LENGTH;
};

export const validateOTP = (otp: string): boolean => {
  return /^\d{6}$/.test(otp);
};