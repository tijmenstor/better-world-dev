import styles from './game.module.css';

/* eslint-disable-next-line */
export interface GameProps {}

export function Game(props: GameProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Game 6!</h1>
    </div>
  );
}

export default Game;