import dotenv from 'dotenv';

dotenv.config();

export const config = {
    PROTOCOL: process.env.PROTOCOL,
    HOST: process.env.HOST,
    PORT: process.env.PORT || 5000,

    POSTGRES_URL: process.env.DB_URL,

    REDIS_URL: process.env.REDIS_URL,

    NODE_TTL: Number(process.env.NODE_TTL),
    REDIS_EX: Number(process.env.REDIS_EX),

    SWAGGER_PATH: process.env.SWAGGER_PATH,
};
