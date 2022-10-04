const login = async (event) => {
  const request = await fetch(
    "https://3001-nohaxito-cdnnohaxitoxyz-1hdp7hpopo6.ws-us69.gitpod.io/auth/login",
    {
      method: "post",
      body: JSON.stringify({
        email: event.target.email.value,
        password: event.target.password.value,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  const response = await request.json();
  return response;
};

export default login;
