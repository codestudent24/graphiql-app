import styles from './dev-block.module.scss';
import { DevCard } from '../../dev-card/UI/dev-card';

interface DevBlockProps {
  language?: string;
}

export function DevBlock({ language }: DevBlockProps) {
  const isEn = language === 'EN';

  const title = isEn ? 'ABOUT US' : 'О НАС';

  const developers = [
    { nick: 'asmat1k', name: isEn ? 'Tim Dobrov' : 'Тима Добров' },
    { nick: 'codestudent24', name: isEn ? 'Denis Goncharenko' : 'Денис Гончаренко' },
    { nick: 'Irina0313', name: isEn ? 'Iryna Kanavalchuk' : 'Ирина Кавальчук' },
    { nick: 'rolling-scopes-school', name: isEn ? 'React Course' : 'React курс' },
  ];

  return (
    <div className={styles.developers}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
        {developers.map((item, index) => {
          return <DevCard key={index} nick={item.nick} name={item.name} />;
        })}
      </div>
    </div>
  );
}
