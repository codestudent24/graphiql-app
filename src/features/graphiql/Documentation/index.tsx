import { useEffect, useState } from 'react';
import getTypes from './model/getTypes';
import styles from './styles.module.scss';

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
import { useAppSelector } from '../../../app/appHooks';

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
  const schema = useAppSelector((state) => state.root.schema);
  const [prevLevels, setPrevLevels] = useState<docsFieldsType[]>([null]);
  const [currDocLevel, setCurrDocLevel] = useState<docsFieldsType | null>(schema);

  useEffect(() => {
    setPrevLevels((prevLevels) => {
      prevLevels.push(schema);
      return [...prevLevels];
    });
    setCurrDocLevel(schema);
  }, [schema]);

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

  return (
    <div className={styles.docsContainer}>
      {currDocLevel && getTypes(schema, prevLevels[prevLevels.length - 1], currDocLevel, handleClick)}
    </div>
  );
};

export default DocumentationContainer;
