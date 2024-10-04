export function setUserToLocalStorage(name, email, role, isLoggedin) {
  localStorage.setItem("isLoggedIn", isLoggedin);
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("role", role);
}

export function removeUserFromLocalStorage() {
  localStorage.clear();
}
