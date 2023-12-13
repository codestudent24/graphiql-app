import styles from './dev-block.module.scss';
import { DevCard } from '../../dev-card/UI/dev-card';

export function DevBlock() {
  const developers = [
    { nick: 'asmat1k', name: 'Tim Dobrov' },
    { nick: 'codestudent24', name: 'Denis Goncharenko' },
    { nick: 'Irina0313', name: 'Iryna Kanavalchuk' },
  ];

  return (
    <div className={styles.developers}>
      <h2 className={styles.title}>OUR TEAM</h2>
      <div className={styles.list}>
        {developers.map((item, index) => {
          return <DevCard key={index} nick={item.nick} name={item.name} />;
        })}
      </div>
    </div>
  );
}
