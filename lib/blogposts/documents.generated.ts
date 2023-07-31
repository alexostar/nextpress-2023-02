import * as Types from '@/components/types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type AllBlogpostsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type AllBlogpostsQuery = {
  __typename?: 'RootQuery';
  blogposts?: {
    __typename?: 'RootQueryToBlogpostConnection';
    edges: Array<{
      __typename?: 'RootQueryToBlogpostConnectionEdge';
      node: {
        __typename?: 'Blogpost';
        id: string;
        slug?: string | null;
        title?: string | null;
        date?: string | null;
        postLabel?: string | null;
        postExcerpt?: string | null;
        name?: string | null;
        author?: {
          __typename?: 'NodeWithAuthorToUserConnectionEdge';
          node: { __typename?: 'User'; username?: string | null };
        } | null;
      };
    }>;
  } | null;
};

export type BlogpostBySlugQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  idType: Types.BlogpostIdType;
}>;

export type BlogpostBySlugQuery = {
  __typename?: 'RootQuery';
  blogpost?: {
    __typename?: 'Blogpost';
    id: string;
    slug?: string | null;
    title?: string | null;
    date?: string | null;
    postLabel?: string | null;
    postExcerpt?: string | null;
    name?: string | null;
    markdown?: string | null;
    author?: {
      __typename?: 'NodeWithAuthorToUserConnectionEdge';
      node: { __typename?: 'User'; username?: string | null };
    } | null;
  } | null;
};

export const AllBlogpostsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AllBlogposts' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blogposts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: { kind: 'IntValue', value: '100' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'date' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'postLabel' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'postExcerpt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'author' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'node' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'username',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AllBlogpostsQuery, AllBlogpostsQueryVariables>;
export const BlogpostBySlugDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'BlogpostBySlug' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'idType' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'BlogpostIdType' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blogpost' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'idType' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'idType' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                { kind: 'Field', name: { kind: 'Name', value: 'postLabel' } },
                { kind: 'Field', name: { kind: 'Name', value: 'postExcerpt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'author' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'username' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'markdown' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlogpostBySlugQuery, BlogpostBySlugQueryVariables>;
