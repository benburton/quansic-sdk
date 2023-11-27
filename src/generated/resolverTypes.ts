import { GraphQLResolveInfo } from 'graphql';
import { ContributorKey } from '../resolvers/types.Contributor.ts';
import { PartyKey, PartyIds } from '../resolvers/types/Party.ts';
import { RecordingKey } from '../resolvers/types/Recording.ts';
import { ReleaseKey } from '../resolvers/types/Release.ts';
import { WorkKey } from '../resolvers/types/Work.ts';
import { Context } from '../types.ts';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Contributor = {
  __typename?: 'Contributor';
  ids: PartyIds;
  comment: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  firstName: Maybe<Scalars['String']['output']>;
  lastName: Maybe<Scalars['String']['output']>;
  visual: Maybe<Scalars['String']['output']>;
  nationality: Maybe<Scalars['String']['output']>;
  nationalitySource: Maybe<Scalars['String']['output']>;
  popularity: Maybe<Scalars['Int']['output']>;
  birthDate: Maybe<Scalars['String']['output']>;
  deathDate: Maybe<Scalars['String']['output']>;
  nameType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
  gender: Maybe<Scalars['String']['output']>;
  releases: Array<Release>;
  recordings: Array<Recording>;
  contributorType: Maybe<Scalars['String']['output']>;
  role: Maybe<Scalars['String']['output']>;
};


export type ContributorReleasesArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type ContributorRecordingsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};

/** A `Party` generally represents a band or person involved with production of a sound recording or musical work. */
export type Party = {
  __typename?: 'Party';
  /** Container for the identifiers on a `Party`. Internally `quansicId` is used a lot. */
  ids: PartyIds;
  /** Comment about the `Party`. This can sometimes be `null`, as it is not always returned from the Quansic API. */
  comment: Maybe<Scalars['String']['output']>;
  /** Name of the party. */
  name: Scalars['String']['output'];
  /** First name of the party. This is not always defined, although `name` always is. */
  firstName: Maybe<Scalars['String']['output']>;
  /** Last name of the party. This is not always defined, although `name` always is. */
  lastName: Maybe<Scalars['String']['output']>;
  /** A URL for an image of the `Party`. */
  visual: Maybe<Scalars['String']['output']>;
  /** Nationality of the `Party`. */
  nationality: Maybe<Scalars['String']['output']>;
  nationalitySource: Maybe<Scalars['String']['output']>;
  /** 0-100 popularity score for the `Party` (looks to be proprietary to Quansic) */
  popularity: Maybe<Scalars['Int']['output']>;
  /** Date of birth for the `Party` if it represents a person, year of formation of band if a band. */
  birthDate: Maybe<Scalars['String']['output']>;
  /** Date of detah for the `Party` if it represents a person, year of break up if a band. */
  deathDate: Maybe<Scalars['String']['output']>;
  /** Either `RealName` or `Pseudonym`.  */
  nameType: Maybe<Scalars['String']['output']>;
  /** Either `Band` or `Person`, this represents whether or not the `Party` represents an individual or a collective. */
  type: Maybe<Scalars['String']['output']>;
  /** The gender of the `Party`, if it represents a person. */
  gender: Maybe<Scalars['String']['output']>;
  /** The `Release`s associated with the `Party`. */
  releases: Array<Release>;
  /** The `Recording`s associated with the `Party`. */
  recordings: Array<Recording>;
};


/** A `Party` generally represents a band or person involved with production of a sound recording or musical work. */
export type PartyReleasesArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


/** A `Party` generally represents a band or person involved with production of a sound recording or musical work. */
export type PartyRecordingsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};

export type PartyIds = {
  __typename?: 'PartyIds';
  quansicId: Scalars['String']['output'];
  discogsIds: Array<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  recordingByISRC: Maybe<Recording>;
  releaseByUPC: Maybe<Release>;
  searchParties: Array<Party>;
};


export type QueryRecordingByIsrcArgs = {
  isrc: Scalars['String']['input'];
};


export type QueryReleaseByUpcArgs = {
  upc: Scalars['String']['input'];
};


export type QuerySearchPartiesArgs = {
  name: Scalars['String']['input'];
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};

export type Recording = {
  __typename?: 'Recording';
  isrc: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  works: Array<Work>;
  contributors: Array<Contributor>;
};


export type RecordingContributorsArgs = {
  type: InputMaybe<Scalars['String']['input']>;
};

export type Release = {
  __typename?: 'Release';
  upc: Scalars['ID']['output'];
  title: Maybe<Scalars['String']['output']>;
  year: Maybe<Scalars['String']['output']>;
  parties: Array<Party>;
};


export type ReleasePartiesArgs = {
  type: InputMaybe<Scalars['String']['input']>;
};

export type Work = {
  __typename?: 'Work';
  iswc: Scalars['String']['output'];
  title: Scalars['String']['output'];
  recordings: Array<Recording>;
};


export type WorkRecordingsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Contributor: ResolverTypeWrapper<ContributorKey>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Party: ResolverTypeWrapper<PartyKey>;
  PartyIds: ResolverTypeWrapper<PartyIds>;
  Query: ResolverTypeWrapper<{}>;
  Recording: ResolverTypeWrapper<RecordingKey>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Release: ResolverTypeWrapper<ReleaseKey>;
  Work: ResolverTypeWrapper<WorkKey>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Contributor: ContributorKey;
  String: Scalars['String']['output'];
  Int: Scalars['Int']['output'];
  Party: PartyKey;
  PartyIds: PartyIds;
  Query: {};
  Recording: RecordingKey;
  ID: Scalars['ID']['output'];
  Release: ReleaseKey;
  Work: WorkKey;
  Boolean: Scalars['Boolean']['output'];
};

export type ContributorResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Contributor'] = ResolversParentTypes['Contributor']> = {
  ids: Resolver<ResolversTypes['PartyIds'], ParentType, ContextType>;
  comment: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  visual: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nationality: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nationalitySource: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  popularity: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  birthDate: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deathDate: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameType: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  releases: Resolver<Array<ResolversTypes['Release']>, ParentType, ContextType, Partial<ContributorReleasesArgs>>;
  recordings: Resolver<Array<ResolversTypes['Recording']>, ParentType, ContextType, Partial<ContributorRecordingsArgs>>;
  contributorType: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PartyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Party'] = ResolversParentTypes['Party']> = {
  ids: Resolver<ResolversTypes['PartyIds'], ParentType, ContextType>;
  comment: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  visual: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nationality: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nationalitySource: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  popularity: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  birthDate: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deathDate: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameType: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  releases: Resolver<Array<ResolversTypes['Release']>, ParentType, ContextType, Partial<PartyReleasesArgs>>;
  recordings: Resolver<Array<ResolversTypes['Recording']>, ParentType, ContextType, Partial<PartyRecordingsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PartyIdsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PartyIds'] = ResolversParentTypes['PartyIds']> = {
  quansicId: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  discogsIds: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  recordingByISRC: Resolver<Maybe<ResolversTypes['Recording']>, ParentType, ContextType, RequireFields<QueryRecordingByIsrcArgs, 'isrc'>>;
  releaseByUPC: Resolver<Maybe<ResolversTypes['Release']>, ParentType, ContextType, RequireFields<QueryReleaseByUpcArgs, 'upc'>>;
  searchParties: Resolver<Array<ResolversTypes['Party']>, ParentType, ContextType, RequireFields<QuerySearchPartiesArgs, 'name'>>;
};

export type RecordingResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Recording'] = ResolversParentTypes['Recording']> = {
  isrc: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  works: Resolver<Array<ResolversTypes['Work']>, ParentType, ContextType>;
  contributors: Resolver<Array<ResolversTypes['Contributor']>, ParentType, ContextType, Partial<RecordingContributorsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReleaseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Release'] = ResolversParentTypes['Release']> = {
  upc: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  year: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parties: Resolver<Array<ResolversTypes['Party']>, ParentType, ContextType, Partial<ReleasePartiesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Work'] = ResolversParentTypes['Work']> = {
  iswc: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recordings: Resolver<Array<ResolversTypes['Recording']>, ParentType, ContextType, Partial<WorkRecordingsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Contributor: ContributorResolvers<ContextType>;
  Party: PartyResolvers<ContextType>;
  PartyIds: PartyIdsResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Recording: RecordingResolvers<ContextType>;
  Release: ReleaseResolvers<ContextType>;
  Work: WorkResolvers<ContextType>;
};

