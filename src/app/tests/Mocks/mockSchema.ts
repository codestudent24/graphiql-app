import { IntrospectionQuery } from 'graphql';
import { docsFieldsType } from '../../../features/graphiql/Documentation';

export const mockSchema: IntrospectionQuery = {
  __schema: {
    queryType: {
      kind: 'OBJECT',
      name: 'Query',
    },
    mutationType: null,
    subscriptionType: null,
    types: [
      {
        kind: 'OBJECT',
        name: 'Query',
        description: '',
        fields: [
          {
            name: 'character',
            description: 'Get a specific character by ID',
            args: [
              {
                name: 'id',
                description: '',
                type: {
                  kind: 'SCALAR',
                  name: 'ID',
                },
                defaultValue: null,
              },
            ],
            type: {
              kind: 'OBJECT',
              name: 'Character',
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'characters',
            description: 'Get the list of all characters',
            args: [
              {
                name: 'page',
                description: '',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                },
                defaultValue: null,
              },
              {
                name: 'filter',
                description: '',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'FilterCharacter',
                },
                defaultValue: null,
              },
            ],
            type: {
              kind: 'OBJECT',
              name: 'Characters',
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'charactersByIds',
            description: 'Get a list of characters selected by ids',
            args: [
              {
                name: 'ids',
                description: '',
                type: {
                  kind: 'SCALAR',
                  name: 'ID',
                },
                defaultValue: null,
              },
            ],
            type: {
              kind: 'SCALAR',
              name: 'Character',
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],

        interfaces: [],
      },
      {
        kind: 'SCALAR',
        name: 'Character',
        description: '',
      },
    ],
    directives: [],
  },
};

export const mockLevel: docsFieldsType = {
  kind: 'OBJECT',
  name: 'Query',
  description: '',
  fields: [
    {
      name: 'character',
      description: 'Get a specific character by ID',
      args: [
        {
          name: 'id',
          description: '',
          type: {
            kind: 'SCALAR',
            name: 'ID',
          },
          defaultValue: null,
        },
      ],
      type: {
        kind: 'OBJECT',
        name: 'Character',
      },
      isDeprecated: false,
      deprecationReason: null,
    },
    {
      name: 'characters',
      description: 'Get the list of all characters',
      args: [
        {
          name: 'page',
          description: '',
          type: {
            kind: 'SCALAR',
            name: 'Int',
          },
          defaultValue: null,
        },
        {
          name: 'filter',
          description: '',
          type: {
            kind: 'INPUT_OBJECT',
            name: 'FilterCharacter',
          },
          defaultValue: null,
        },
      ],
      type: {
        kind: 'OBJECT',
        name: 'Characters',
      },
      isDeprecated: false,
      deprecationReason: null,
    },
    {
      name: 'charactersByIds',
      description: 'Get a list of characters selected by ids',
      args: [
        {
          name: 'ids',
          description: '',
          type: {
            kind: 'SCALAR',
            name: 'ID',
          },
          defaultValue: null,
        },
      ],
      type: {
        kind: 'SCALAR',
        name: 'Character',
      },
      isDeprecated: false,
      deprecationReason: null,
    },
  ],

  interfaces: [],
};

export const mockScalarLevel = {
  kind: 'SCALAR',
  name: 'String',
  description:
    'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
};
