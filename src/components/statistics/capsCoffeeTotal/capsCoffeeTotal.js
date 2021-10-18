import PropTypes from "prop-types";

import { GiCoffeeCup } from "react-icons/gi";

function CapsCoffeeTotal({ total }) {
  function generateRandomColor() {
    let color =
      "#" +
      (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();
    return color;
  }

  const capsCoffee = Array.from({ length: total - 1 }).map((u, i) => i);

  return (
    <>
      {capsCoffee.map((cap) => (
        <span key={cap}>
          <GiCoffeeCup color={generateRandomColor()} size="30px" />
        </span>
      ))}
    </>
  );
}

CapsCoffeeTotal.propTypes = {
  total: PropTypes.number.isRequired,
};

export default CapsCoffeeTotal;
