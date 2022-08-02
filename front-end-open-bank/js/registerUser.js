const form = document.querySelector("main div div form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formObject = new FormData(form);
  const body = {
    name: formObject.get("name"),
    email: formObject.get("email"),
    password: formObject.get("password"),
  };
  console.log(body);
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
      window.location.replace("user-area.html");
    })
    .catch((error) => console.log(error));
});
