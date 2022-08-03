const form = document.querySelector("div form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formObject = new FormData(form);
  const body = {
    email: formObject.get("email"),
    password: formObject.get("password"),
  };
  async function handleSubmit() {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).catch((error) => console.error(error));

    const { token } = await response.json();
  }
  handleSubmit();
});
