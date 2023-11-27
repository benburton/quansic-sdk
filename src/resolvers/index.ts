import { Resolvers } from "../generated/resolverTypes";
import Contributor from "./Contributor";
import { Party, PartyIds } from "./Party";
import Query from "./Query";
import Release from "./Release";
import Recording from "./Recording";
import Work from "./Work";

const resolvers: Resolvers = {
  Contributor,
  Party,
  PartyIds,
  Query,
  Release,
  Recording,
  Work,
};

export default resolvers;
