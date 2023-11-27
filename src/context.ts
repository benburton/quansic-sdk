import createDataSources from "./connectors";
import { DataSourceConfig } from "./types";

const createContext = (config: DataSourceConfig) => ({
  dataSources: createDataSources(config),
});

export default createContext;
