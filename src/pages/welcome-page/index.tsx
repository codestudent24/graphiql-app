import { useLanguage } from '../../features/language/use-language';
import { CourseBlock } from '../../widgets/course-block';
import { DevBlock } from '../../widgets/dev-block/UI/dev-block';
import { ProjectBlock } from '../../widgets/project-block';
import { WelcomeBlock } from '../../widgets/welcome-block';

import styles from './welcome-page.module.scss';
import commonStyles from '../../shared/common.module.scss';

export default function WelcomePage() {
  const { language } = useLanguage();

  return (
    <div className={`${commonStyles.wrapper} ${styles.container}`}>
      <WelcomeBlock language={language} />
      <div className={styles.text}>
        <ProjectBlock language={language} />
        <CourseBlock language={language} />
      </div>
      <DevBlock language={language} />
    </div>
  );
}
