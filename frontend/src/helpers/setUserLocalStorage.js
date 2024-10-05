export function setUserToLocalStorage(
  name,
  email,
  role,
  isLoggedin,
  token = "",
) {
  localStorage.setItem("isLoggedIn", isLoggedin);
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("role", role);
  localStorage.setItem("token", token);
}

export function removeUserFromLocalStorage() {
  localStorage.clear();
}
