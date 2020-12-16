export const EmailValidator = (email: string) => /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi.test(email);
export const AccountValidator = (account: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/gi.test(account);
export const PasswordValidator = (password: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/gi.test(password);