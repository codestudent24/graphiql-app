import { ReactNode } from 'react';
import { IntrospectionSchema } from 'graphql';
import { docsFieldsType } from '..';
import { handleButtonClick } from './getTypes';
import styles from '../styles.module.scss';

const getArgs = (
  schema: IntrospectionSchema | null,
  args: docsFieldsType,
  level: docsFieldsType,
  onButtonClick: (level: docsFieldsType, prevLevelsAction: string, parentLevel?: docsFieldsType) => void,
): ReactNode => {
  return (
    <>
      {Array.isArray(args) &&
        args.map((l) => (
          <div key={l.name} className={styles.string}>
            <span className={styles.redText}>{`${l.name}: `}</span>

            {l.type.kind === 'NON_NULL' && 'ofType' in l.type && (
              <div className={styles.string}>
                {getArgs(schema, l.type.ofType, level, onButtonClick)}
                <span>!</span>
              </div>
            )}
            {l.type.kind === 'LIST' && 'ofType' in l.type && (
              <>
                <span>&#91;</span>
                {getArgs(schema, l.type.ofType, level, onButtonClick)}
                <span>&#93;</span>
              </>
            )}
            {l.type.ofType === null && <>{getArgs(schema, l.type, level, onButtonClick)}</>}
            {l.defaultValue && <span>&#160;&#61;&#160;{`${l.defaultValue}`}</span>}
            {'description' in l && l.descripton && <p>{`${l.description}`}</p>}
          </div>
        ))}
      {!Array.isArray(args) &&
        args &&
        (('kind' in args && args.kind === 'LIST' && 'ofType' in args && (
          <>
            <span>&#91;</span>
            {getArgs(schema, args.ofType, level, onButtonClick)}
            <span>&#93;</span>
          </>
        )) ||
          ('type' in args && args.type.kind === 'LIST' && 'ofType' in args.type && (
            <>
              <span>&#91;</span>
              {getArgs(schema, args.type.ofType, level, onButtonClick)}
              <span>&#93;</span>
            </>
          )) ||
          ('kind' in args && args.kind === 'NON_NULL' && 'ofType' in args && (
            <div className={styles.string}>
              {getArgs(schema, args.ofType, level, onButtonClick)}
              <span>!</span>
            </div>
          )) ||
          ('ofType' in args && args.ofType === null && 'name' in args && (
            <button
              className={styles.link}
              onClick={() =>
                handleButtonClick(
                  onButtonClick,
                  schema && schema.types.filter((t) => t.name === args.name)[0],
                  'add',
                  level,
                )
              }
            >
              {`${args.name}`}
            </button>
          )) ||
          ('description' in args && args.description && <p>{`${args.description}`}</p>) ||
          ('type' in args && 'name' in args.type && args.type.kind === 'SCALAR' && (
            <button
              className={styles.link}
              onClick={() =>
                handleButtonClick(
                  onButtonClick,
                  schema && schema.types.filter((t) => t.name === args.type.kind)[0],
                  'add',
                  level,
                )
              }
            >
              {`${args.name}`}
            </button>
          )))}
    </>
  );
};

export default getArgs;
