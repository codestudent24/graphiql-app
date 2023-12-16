import styles from './course-block.module.scss';

interface CourseBlockProps {
  language?: string;
}

const contentRU = `Данный курс ориентирован на разработку веб-приложений с использованием библиотеки React для создания современных пользовательских интерфейсов.
В нем нами были изучены такие технологии как: React-Router, ReduxTK, NextJs, Jest, GraphiQl`;
const contentEN = `This course focuses on the development of web applications using a library React to create modern user interfaces.
In it, we used technologies such as: React-Router, ReduxTK, Next js, Just, GraphiQL`;

export function CourseBlock({ language }: CourseBlockProps) {
  const isEn = language === 'EN';
  const content = isEn ? contentEN : contentRU;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h4 className={styles.name}>React 2023 Q4</h4>
        <div className={styles.text} style={isEn ? { fontSize: 25 } : { fontSize: 20, letterSpacing: 1.5 }}>
          {content}
        </div>
      </div>
    </div>
  );
}
