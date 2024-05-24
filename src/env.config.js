const PRODUCTION = {
  API_BASE_URL: "https://fair-tan-gosling-wear.cyclic.cloud",
};

const LOCAL = {
  API_BASE_URL: "https://fair-tan-gosling-wear.cyclic.cloud",
};

const config =
  process.env.NEXT_PUBLIC_ENV === "production" ? PRODUCTION : LOCAL;

export default config;
