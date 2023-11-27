import { createSchema, createYoga } from "graphql-yoga";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchema } from "@graphql-tools/load";

import resolvers from "./resolvers";
import createContext from "./context";
import config from "./config";

const typeDefs = await loadSchema("src/schema/**/*.graphql", {
  loaders: [new GraphQLFileLoader()],
});

const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  context: createContext(config),
});

// I don't know why there's a type error here, and more importantly
// I'm a bit uneasy that it's not causing a build failure.
const server = Bun.serve(yoga);

console.info(
  `Server is running on ${new URL(
    yoga.graphqlEndpoint,
    `http://${server.hostname}:${server.port}`,
  )}`,
);
