export const ENV = {
  PORT: Number(import.meta.env.VITE_PORT || "3000"),
  HOST: import.meta.env.VITE_HOST || "0.0.0.0",
  API_URL: import.meta.env.VITE_API_URL || "http://localhost:5000",
};
