import dotenv from "dotenv";

dotenv.config();

export interface IConfig {
  host: string;
}

const config: IConfig = {
  host: process.env.HOST || "http://localhost:3000",
};

export default config;
