import axios from "axios";

const recordsApi = async (data: {
  accessToken: string;
  offset: number;
  limit: number;
  from: number;
  to: number;
}) => {
  const { accessToken, offset, limit, from, to } = data;
  return await axios.get<{ total: number; results: any[] }>(
    `http://localhost:3000/v1/consultations?offset=${offset}&limit=${limit}&from=${from}&to=${to}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

export { recordsApi };
