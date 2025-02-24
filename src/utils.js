export function isActivePath(href) {
  const currentPath = window.location.pathname;
  return (
    currentPath === href ||
    (currentPath === "/" && href === "/index.html") ||
    (currentPath === "/index.html" && href === "/") ||
    currentPath.includes(href)
  );
}

export function getUserName() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.name : null;
}
