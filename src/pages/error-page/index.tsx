import styles from './error-page.module.scss';

export default function ErrorPage() {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <h3>Sorry, Something went wrong :)).</h3>

      <a className={styles.button} href="/">
        Return to the Main Page
      </a>
    </div>
  );
}
