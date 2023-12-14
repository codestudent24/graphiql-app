import { DevBlock } from '../../widgets/dev-block/UI/dev-block';
import { WelcomeBlock } from '../../widgets/welcome-block';

import styles from './welcome-page.module.scss';

export default function WelcomePage() {
  return (
    <div className={styles.container}>
      <WelcomeBlock />
      <DevBlock />
    </div>
  );
}
