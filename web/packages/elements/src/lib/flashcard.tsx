import styles from './flashcard.module.css';

/* eslint-disable-next-line */
export type FlashcardProps = {}

const Flashcard = (props: FlashcardProps) => {
  return (
    <div className={styles['container']}>
      <h1>Nicaragua</h1>
    </div>
  );
};


export { Flashcard };