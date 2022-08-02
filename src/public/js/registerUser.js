const form = document.querySelector("main div div form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formObject = new FormData(form);
  const body = {
    name: formObject.get("name"),
    email: formObject.get("email"),
    password: formObject.get("password"),
  };

  fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(error));
});
