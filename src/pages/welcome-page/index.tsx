import { useLanguage } from '../../features/language/language-context';
import { CourseBlock } from '../../widgets/course-block';
import { DevBlock } from '../../widgets/dev-block/UI/dev-block';
import { ProjectBlock } from '../../widgets/project-block';
import { WelcomeBlock } from '../../widgets/welcome-block';

import styles from './welcome-page.module.scss';

export default function WelcomePage() {
  const { language } = useLanguage();

  return (
    <div className={styles.container}>
      <WelcomeBlock language={language} />
      <div className={styles.text}>
        <ProjectBlock language={language} />
        <CourseBlock language={language} />
      </div>
      <DevBlock language={language} />
    </div>
  );
}
