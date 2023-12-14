import { CourseBlock } from '../../widgets/course-block';
import { DevBlock } from '../../widgets/dev-block/UI/dev-block';
import { ProjectBlock } from '../../widgets/project-block';
import { WelcomeBlock } from '../../widgets/welcome-block';

import styles from './welcome-page.module.scss';

export default function WelcomePage() {
  return (
    <div className={styles.container}>
      <WelcomeBlock />
      <div className={styles.text}>
        <ProjectBlock />
        <CourseBlock />
      </div>
      <DevBlock />
    </div>
  );
}
