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


export function getJwtToken() {
  return sessionStorage.getItem("jwt")
}

export function setJwtToken(token) {
  sessionStorage.setItem("jwt", token)
}

// Longer duration refresh token (30-60 min)
export function getRefreshToken() {
  return sessionStorage.getItem("refreshToken")
}

export function setRefreshToken(token) {
  sessionStorage.setItem("refreshToken", token)
}

function handleLogin({ email, password }) {
  const { jwtToken, refreshToken } = await login({ email, password })
  setJwtToken(jwtToken)
  setRefreshToken(refreshToken)

  Router.push("/some-url")
}