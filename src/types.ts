import Quansic from "./connectors/quansic";

export interface DataSources {
  quansic: Quansic;
}

export interface Context {
  dataSources: DataSources;
}

export interface DataSourceConfig {
  quansicApiKey: string;
  logLevel?: string;
}
