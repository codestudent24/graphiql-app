import styles from './UI/errors.module.scss';

type Props = {
  errors: string[];
};

export default function ErrorList({ errors }: Props) {
  return (
    <ul className={styles.errors}>
      {errors.map((error, index) => (
        <li key={index}>{error}</li>
      ))}
    </ul>
  );
}
