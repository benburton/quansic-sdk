import { codegen } from "@graphql-codegen/core";
import { GraphQLSchema, parse, printSchema } from "graphql";
import { loadSchema } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import * as typescriptPlugin from "@graphql-codegen/typescript";
import * as typescriptResolversPlugin from "@graphql-codegen/typescript-resolvers";

const schema: GraphQLSchema = await loadSchema("src/schema/**/*.graphql", {
  loaders: [new GraphQLFileLoader()],
});

const outputFile = "./src/generated/resolverTypes.ts";
const config: Parameters<typeof codegen>[0] = {
  documents: [],
  config: {
    avoidOptionals: true,
    contextType: "../types.ts#Context",
    mappers: {
      Contributor: "../resolvers/types.Contributor.ts#ContributorKey",
      Party: "../resolvers/types/Party.ts#PartyKey",
      PartyIds: "../resolvers/types/Party.ts#PartyIds",
      Recording: "../resolvers/types/Recording.ts#RecordingKey",
      Release: "../resolvers/types/Release.ts#ReleaseKey",
      Work: "../resolvers/types/Work.ts#WorkKey",
    },
  },
  filename: outputFile,
  schema: parse(printSchema(schema)),
  plugins: [
    {
      typescript: {},
    },
    {
      typescriptResolvers: {},
    },
  ],
  pluginMap: {
    typescript: typescriptPlugin,
    typescriptResolvers: typescriptResolversPlugin,
  },
};

const output = await codegen(config);
await Bun.write(outputFile, new TextEncoder().encode(output));
console.log("🚀 Resolver types generated");
