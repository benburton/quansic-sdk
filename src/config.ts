import { DataSourceConfig } from "./types";

const config: DataSourceConfig = {
  quansicApiKey: Bun.env.QUANSIC_API_KEY || "oopsie",
  logLevel: "INFO",
};

export default config;
