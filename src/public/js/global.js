const BASE_URL = "https://open-bank-4cadia-test.herokuapp.com";

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");

const fieldPopulate = (data) => {
  const { name, email, password } = data;
  inputName.value = name;
  inputEmail.value = email;
};
