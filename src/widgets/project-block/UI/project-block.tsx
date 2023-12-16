import styles from './project-block.module.scss';

interface ProjectBlockProps {
  language?: string;
}

const contentRU = `Приложение - интерактивная среда тестирования запросов с их гибким редактированием. 
Оно предоставляет удобный веб-интерфейс с возможностью ввода и отображения результатов запросов в реальном времени. 
Этот инструмент позволяет редактировать endpoint, query, а также просматривать документацию выбранного API`;

const contentEN = `The application is an interactive query testing environment with flexible editing. 
It provides a user-friendly web interface with the ability to enter and display query results in real time. 
This tool allows you to edit endpoint, query, and view the documentation of the selected API.`;

export function ProjectBlock({ language }: ProjectBlockProps) {
  const isEn = language === 'EN';
  const content = isEn ? contentEN : contentRU;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h4 className={styles.name}>GRAPHI QL</h4>
        <div className={styles.text} style={isEn ? { fontSize: 25 } : { fontSize: 20, letterSpacing: 1.5 }}>
          {content}
        </div>
      </div>
    </div>
  );
}
