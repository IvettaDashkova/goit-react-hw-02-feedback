import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={styles.list}>
    <li className={styles.item}>good: {good}</li>
    <li className={styles.item}>neutral: {neutral}</li>
    <li className={styles.item}>bad: {bad}</li>
    <li className={styles.item}>total: {total}</li>
    <li className={styles.item}>positive feedback: {positivePercentage}%</li>
  </ul>
);
Statistics.defaultProps = {
  total: 0,
  positivePercentage: 0
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number
};
export default Statistics;
