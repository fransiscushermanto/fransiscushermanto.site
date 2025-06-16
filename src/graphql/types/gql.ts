/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query RepositoryQuery($owner: String = \"fransiscushermanto\", $name: String!) {\n    repository(owner: $owner, name: $name) {\n      isArchived\n      url\n      homepageUrl\n      description\n      descriptionHTML\n      name\n      id\n      openGraphImageUrl\n    }\n  }\n": typeof types.RepositoryQueryDocument,
};
const documents: Documents = {
    "\n  query RepositoryQuery($owner: String = \"fransiscushermanto\", $name: String!) {\n    repository(owner: $owner, name: $name) {\n      isArchived\n      url\n      homepageUrl\n      description\n      descriptionHTML\n      name\n      id\n      openGraphImageUrl\n    }\n  }\n": types.RepositoryQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query RepositoryQuery($owner: String = \"fransiscushermanto\", $name: String!) {\n    repository(owner: $owner, name: $name) {\n      isArchived\n      url\n      homepageUrl\n      description\n      descriptionHTML\n      name\n      id\n      openGraphImageUrl\n    }\n  }\n"): (typeof documents)["\n  query RepositoryQuery($owner: String = \"fransiscushermanto\", $name: String!) {\n    repository(owner: $owner, name: $name) {\n      isArchived\n      url\n      homepageUrl\n      description\n      descriptionHTML\n      name\n      id\n      openGraphImageUrl\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;