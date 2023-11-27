import { DataSourceConfig, DataSources } from "../types";
import Quansic from "./quansic";

const createDataSources = (config: DataSourceConfig): DataSources => ({
  quansic: new Quansic({
    apiKey: config.quansicApiKey,
    logLevel: config.logLevel,
  }),
});

export default createDataSources;
