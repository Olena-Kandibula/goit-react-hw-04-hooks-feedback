import s from "../feedbackOptions/FeedbackOptions.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log(options)
  return (
    <div className={s.container}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          name={option}
          className={s.button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
