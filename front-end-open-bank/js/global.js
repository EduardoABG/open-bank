const BASE_URL = "https://open-bank-4cadia-test.herokuapp.com";

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");

const fieldPopulate = (data) => {
  const { name, email, password } = data;
  inputName.value = name;
  inputEmail.value = email;
  inputPassword.value = password;
};
