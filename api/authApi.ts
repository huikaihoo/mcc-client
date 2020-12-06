import axios from "axios";

import config from "../config";

const signinApi = async (data: { email: string; password: string }) => {
  return await axios.post<{ accessToken: string }>(
    `${config.host}/v1/signin`,
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
  return await axios.post(`${config.host}/v1/user`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export { signinApi, signupApi };
