export const validateData = (email, password) => {
  const isEmailValid = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

  if (!isEmailValid) return "Email is invalid";
  if (!isPasswordValid)
    return "Invalid Password!! It must contains a capital letter, a special character and a number";

  return null;
};
