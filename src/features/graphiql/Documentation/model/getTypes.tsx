import { IntrospectionSchema } from 'graphql';
import { docsFieldsType } from '..';
import styles from '../styles.module.css';
import { ReactNode } from 'react';

const handleButtonClick = (
  onButtonClick: (level: docsFieldsType, prevLevelsAction: string, prevLevel?: docsFieldsType) => void,
  currLevel: docsFieldsType,
  prevLevelsAction: string,
  prevLevel?: docsFieldsType,
) => {
  onButtonClick(currLevel, prevLevelsAction, prevLevel);
};

const getTypes = (
  schema: IntrospectionSchema | null,
  parentLevel: docsFieldsType,
  level: docsFieldsType,
  onButtonClick: (level: docsFieldsType, prevLevelsAction: string, prevLevel?: docsFieldsType) => void,
) => {
  return (
    <>
      {level && 'queryType' in level && (
        <>
          <h2>Docs</h2>
          <p>A GraphQL schema provides a root type for each kind of operation.</p>
          <p>Root Types</p>
          <span>query: </span>
          <button
            className={styles.link}
            onClick={() =>
              handleButtonClick(
                onButtonClick,
                level.types.filter((t) => t.name === level.queryType.name)[0],
                'add',
                schema,
              )
            }
          >
            {level.queryType.name}
          </button>
          <p>All Schema Types</p>
          <div className={styles.typesContainer}>
            {level.types.map(
              (type) =>
                !type.name.startsWith('__') &&
                type.name !== 'Query' && (
                  <>
                    <button
                      className={styles.link}
                      key={type.name}
                      onClick={() => handleButtonClick(onButtonClick, type, 'add', level)}
                    >
                      {type.name}
                    </button>
                  </>
                ),
            )}
          </div>
        </>
      )}
      {level && 'name' in level && level.name === 'Query' && (
        <>
          <button className={styles.linkBack} onClick={() => handleButtonClick(onButtonClick, level, 'delete')}>
            &#10229; Docs
          </button>
          <h3>{level.name}</h3>
          <p>Fields</p>
          <div className={styles.typesContainer}>
            {'fields' in level &&
              level.fields.map((type) => (
                <div key={type.name}>
                  <div className={type.args.length === 1 ? styles.string : undefined}>
                    <button
                      className={styles.fieldLink}
                      onClick={() => handleButtonClick(onButtonClick, type, 'add', level)}
                    >
                      {type.name}
                    </button>
                    <span>&#40;</span>
                    {getArgs(schema, type.args, level, onButtonClick)}
                    <span>&#41;</span>
                    <span>&#58;&#160;</span>
                    {getArgs(schema, type.type, level, onButtonClick)}
                  </div>

                  {type.description && <p>{type.description}</p>}
                </div>
              ))}
          </div>
        </>
      )}
      {level && 'type' in level && (
        <>
          <button className={styles.linkBack} onClick={() => handleButtonClick(onButtonClick, level, 'delete')}>
            &#10229; {(parentLevel && 'name' in parentLevel && parentLevel.name) || 'Docs'}
          </button>
          <h3>{level.name}</h3>
          {'description' in level && level.description && <p>{level.description}</p>}
          {'type' in level && (
            <>
              <p>Type</p>
              {getArgs(schema, level.type, level, onButtonClick)}
            </>
          )}
          {'args' in level && level.args.length > 0 && (
            <>
              <p>Arguments</p>
              {getArgs(schema, level.args, level, onButtonClick)}
            </>
          )}
        </>
      )}
      {level && 'kind' in level && level.kind === 'SCALAR' && 'description' in level && (
        <>
          <button className={styles.linkBack} onClick={() => handleButtonClick(onButtonClick, level, 'delete')}>
            {' '}
            &#10229; {(parentLevel && 'name' in parentLevel && parentLevel.name) || 'Docs'}
          </button>
          <h3>{level.name}</h3>
          {level.description && <p>{level.description}</p>}
        </>
      )}
      {level &&
        'kind' in level &&
        'name' in level &&
        level.name !== 'Query' &&
        (level.kind === 'INPUT_OBJECT' || level.kind === 'OBJECT' || level.kind === 'ENUM') &&
        ('inputFields' in level || 'fields' in level || 'enumValues' in level) && (
          <>
            <button className={styles.linkBack} onClick={() => handleButtonClick(onButtonClick, level, 'delete')}>
              &#10229; {(parentLevel && 'name' in parentLevel && parentLevel.name) || 'Docs'}
            </button>
            <h3>{level.name}</h3>
            <p>Fields</p>

            {'inputFields' in level &&
              level.inputFields !== null &&
              level.inputFields.map((f) => (
                <div key={f.name}>
                  <button
                    className={styles.fieldLink}
                    onClick={() => handleButtonClick(onButtonClick, f, 'add', level)}
                  >
                    {f.name}
                  </button>
                  <span>: </span>
                  {getArgs(schema, f.type, level, onButtonClick)}
                </div>
              ))}
            {'fields' in level &&
              level.fields !== null &&
              level.fields.map((f) => (
                <div key={f.name}>
                  <button
                    className={styles.fieldLink}
                    onClick={() => handleButtonClick(onButtonClick, f, 'add', level)}
                  >
                    {f.name}
                  </button>
                  <span>: </span>
                  {getArgs(schema, f.type, level, onButtonClick)}
                  {f.description && <p>{f.description}</p>}
                </div>
              ))}
            {'enumValues' in level &&
              level.enumValues !== null &&
              level.enumValues.map((f) => (
                <>
                  <div key={f.name}>
                    <p className={styles.redText}>{f.name}</p>
                  </div>
                  {f.description && <p>{f.description}</p>}
                </>
              ))}
          </>
        )}
    </>
  );
};

export default getTypes;

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
              <>
                {getArgs(schema, l.type.ofType, level, onButtonClick)}
                <span>!</span>
              </>
            )}
            {l.type.kind === 'LIST' && 'ofType' in l.type && (
              <>
                <span>&#91;</span>
                {getArgs(schema, l.type.ofType, level, onButtonClick)}
                <span>&#93;</span>
              </>
            )}
            {l.type.ofType === null && <>{getArgs(schema, l.type, level, onButtonClick)}</>}
            {l.defaultValue && <span>{` = ${l.defaultValue}`}</span>}
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
            <>
              {getArgs(schema, args.ofType, level, onButtonClick)}
              <span>!</span>
            </>
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
