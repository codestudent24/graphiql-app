import styles from './project-block.module.scss';

export function ProjectBlock() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h4 className={styles.name}>GRAPHI QL</h4>
        <div className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus dolores nostrum quibusdam iusto velit
          alias quidem ipsam delectus possimus saepe distinctio id corrupti provident suscipit itaque laudantium,
          tempora aliquam vel.
        </div>
      </div>
    </div>
  );
}
