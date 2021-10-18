import s from "../feedbackOptions/FeedbackOptions.module.css";
import PropTypes from "prop-types";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  // console.log(options)
  return (
    <div className={s.container}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          name={option}
          className={s.button}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
