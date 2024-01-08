import {
  IntrospectionEnumType,
  IntrospectionInputObjectType,
  IntrospectionObjectType,
  IntrospectionQuery,
  IntrospectionScalarType,
} from 'graphql';
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

export const mockScalarLevel: IntrospectionScalarType = {
  kind: 'SCALAR',
  name: 'String',
  description:
    'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
};

export const mockInputObjectType: IntrospectionInputObjectType = {
  kind: 'INPUT_OBJECT',
  name: 'FilterCharacter',
  description: '',
  inputFields: [
    {
      name: 'name',
      description: '',
      type: {
        kind: 'SCALAR',
        name: 'String',
      },
      defaultValue: null,
    },
    {
      name: 'status',
      description: '',
      type: {
        kind: 'SCALAR',
        name: 'String',
      },
      defaultValue: null,
    },
    {
      name: 'species',
      description: '',
      type: {
        kind: 'SCALAR',
        name: 'String',
      },
      defaultValue: null,
    },
    {
      name: 'type',
      description: '',
      type: {
        kind: 'SCALAR',
        name: 'String',
      },
      defaultValue: null,
    },
    {
      name: 'gender',
      description: '',
      type: {
        kind: 'SCALAR',
        name: 'String',
      },
      defaultValue: null,
    },
  ],
};

export const mockObjectType: IntrospectionObjectType = {
  kind: 'OBJECT',
  name: 'Episode',
  description: '',
  fields: [
    {
      name: 'id',
      description: 'The id of the episode.',
      args: [],
      type: {
        kind: 'SCALAR',
        name: 'ID',
      },
      isDeprecated: false,
      deprecationReason: null,
    },
    {
      name: 'name',
      description: 'The name of the episode.',
      args: [],
      type: {
        kind: 'SCALAR',
        name: 'String',
      },
      isDeprecated: false,
      deprecationReason: null,
    },
    {
      name: 'air_date',
      description: 'The air date of the episode.',
      args: [],
      type: {
        kind: 'SCALAR',
        name: 'String',
      },
      isDeprecated: false,
      deprecationReason: null,
    },
    {
      name: 'episode',
      description: 'The code of the episode.',
      args: [],
      type: {
        kind: 'SCALAR',
        name: 'String',
      },
      isDeprecated: false,
      deprecationReason: null,
    },
    {
      name: 'characters',
      description: 'List of characters who have been seen in the episode.',
      args: [],
      type: {
        kind: 'NON_NULL',

        ofType: {
          kind: 'LIST',

          ofType: {
            kind: 'OBJECT',
            name: 'Character',
          },
        },
      },
      isDeprecated: false,
      deprecationReason: null,
    },
    {
      name: 'created',
      description: 'Time at which the episode was created in the database.',
      args: [],
      type: {
        kind: 'SCALAR',
        name: 'String',
      },
      isDeprecated: false,
      deprecationReason: null,
    },
  ],

  interfaces: [],
};

export const mockENUMType: IntrospectionEnumType = {
  kind: 'ENUM',
  name: 'CacheControlScope',
  description: '',

  enumValues: [
    {
      name: 'PUBLIC',
      description: '',
      isDeprecated: false,
      deprecationReason: null,
    },
    {
      name: 'PRIVATE',
      description: '',
      isDeprecated: false,
      deprecationReason: null,
    },
  ],
};
