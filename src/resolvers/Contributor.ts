import { ContributorResolvers } from "../generated/resolverTypes";
import { Party } from "./Party";

const Contributor: ContributorResolvers = {
  ...Party,
  contributorType: async ({ contributorType }) => contributorType,
  role: async ({ role }) => role,
};

export default Contributor;
