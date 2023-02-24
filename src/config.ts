import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  dbUrl: process.env.DB_URL,
  apiKeys: {
    weather: process.env.WEATHER_API_KEY,
    news: process.env.NEWS_API_KEY,
  },
};

export default config;
