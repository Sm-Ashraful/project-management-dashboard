const login = (username, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (username === "ashraful" && password === "demo") {
        resolve({ success: true });
      } else {
        resolve({ success: false, message: "Invalid username or password" });
      }
    }, 1000);
  });
};

export { login };
