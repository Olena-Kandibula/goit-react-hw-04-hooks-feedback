import PropTypes from "prop-types";
import s from "../statistics/Statistics.module.css";

import CapsCoffeeTotal from "./capsCoffeeTotal/capsCoffeeTotal";

import { GiCoffeeCup } from "react-icons/gi";
import { FiCheckCircle } from "react-icons/fi";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <span className={s.description}>Good:</span>
        <span>{good}</span>
        <span>
          <FiCheckCircle color="green" size="24px" />
        </span>
      </li>

      <li className={s.item}>
        <span className={s.description}>Neutral:</span>
        <span>{neutral}</span>
        <span>
          <FiCheckCircle color="grey" size="24px" />
        </span>
      </li>

      <li className={s.item}>
        <span className={s.description}>Bad:</span>
        <span>{bad}</span>
        <span>
          <FiCheckCircle color="red" size="24px" />
        </span>
      </li>

      <li className={s.item}>
        <span className={s.description}>Total:</span>
        <span>{total}</span>
        <GiCoffeeCup color="green" size="24px" />
      </li>

      <li className={s.itemCapsTotal}>
        <CapsCoffeeTotal total={total}></CapsCoffeeTotal>
      </li>

      <li className={s.item}>
        <span>Positive feedback:</span>
        <span>{positivePercentage} %</span>
      </li>
    </ul>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
