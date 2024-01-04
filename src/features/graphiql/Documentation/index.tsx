import { useState, useEffect } from 'react';
import { schemaFetcher } from './model/getShema';
import { useAppDispatch } from '../../../app/appHooks';
import getTypes from './model/getTypes';
import {
  IntrospectionField,
  IntrospectionInputValue,
  IntrospectionListTypeRef,
  IntrospectionNamedTypeRef,
  IntrospectionNonNullTypeRef,
  IntrospectionOutputTypeRef,
  IntrospectionSchema,
  IntrospectionType,
} from 'graphql';

export type docsFieldsType =
  | IntrospectionSchema
  | IntrospectionType
  | IntrospectionField
  | IntrospectionListTypeRef
  | IntrospectionNonNullTypeRef
  | IntrospectionOutputTypeRef
  | IntrospectionNamedTypeRef
  | IntrospectionInputValue
  | readonly IntrospectionInputValue[]
  | readonly IntrospectionField[]
  | readonly IntrospectionType[]
  | null;

const DocumentationContainer = () => {
  const dispatch = useAppDispatch();
  const [schema, setSchema] = useState<IntrospectionSchema | null>(null);

  const [prevLevels, setPrevLevels] = useState<docsFieldsType[]>([schema]);

  const [currDocLevel, setCurrDocLevel] = useState<docsFieldsType | null>(null);
  const url = 'https://rickandmortyapi.com/graphql';
  //const url = 'https://graphqlzero.almansi.me/api';
  //const url = 'https://countries.trevorblades.com/graphql';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await schemaFetcher(url);
        setSchema(result);
        setCurrDocLevel(result);
      } catch (error) {
        console.error('Error fetching schema:', error);
      }
    };

    fetchData();
  }, [url, dispatch]);

  const handleClick = (level: docsFieldsType, prevLevelsAction: string = 'delete', prevLevel?: docsFieldsType) => {
    if (prevLevelsAction === 'add' && prevLevel) {
      setPrevLevels((prevLevels) => {
        prevLevels.push(prevLevel);
        return [...prevLevels];
      });
      setCurrDocLevel(level);
    } else {
      setPrevLevels((prevLevels) => {
        setCurrDocLevel(prevLevels[prevLevels.length - 1]);
        prevLevels.pop();
        return [...prevLevels];
      });
    }
  };

  if (!schema) {
    return <div>Loading...</div>;
  }

  return <div>{currDocLevel && getTypes(schema, prevLevels[prevLevels.length - 1], currDocLevel, handleClick)}</div>;
};

export default DocumentationContainer;
