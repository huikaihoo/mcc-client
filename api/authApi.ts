import axios from "axios";

const signinApi = async (data: { email: string; password: string }) => {
  return await axios.post<{ accessToken: string }>(
    "http://localhost:3000/v1/signin",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

const signupApi = async (data: {
  email: string;
  password: string;
  clinicName: string;
  phone: string;
  address: string;
}) => {
  return await axios.post("http://localhost:3000/v1/user", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export { signinApi, signupApi };
