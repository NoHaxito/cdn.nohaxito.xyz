const register = async (event) => {
  const request = await fetch(
    "https://3001-nohaxito-cdnnohaxitoxyz-1hdp7hpopo6.ws-us69.gitpod.io/auth/register",
    {
      method: "post",
      body: JSON.stringify({
        username: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value,
        confirmPassword: event.target.c_password.value,
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

export default register;
