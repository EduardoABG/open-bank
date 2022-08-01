import "dotenv/config";

const ENV = {
  MONGO_URL: process.env.MONGO_URL as string,
  SECRET: process.env.SECRET as string,
};

export default ENV;
