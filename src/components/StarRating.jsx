import { useState } from "react";
import PropTypes from "prop-types";

StarRating.propTypes = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  color: PropTypes.string,
  extraStyle: PropTypes.object,
  onSetRating: PropTypes.func,
};

function StarRating({
  maxRating = 5,
  defaultRating = 0,
  size = 3,
  strokeWidth = 3,
  color = "#eab308",
  extraStyle = {},
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const handleClick = function (userRating) {
    setRating(userRating);
    onSetRating(userRating);
  };

  return (
    <div
      style={{
        ...extraStyle,
        width: `${7.5 * size}rem`,
        display: "flex",
        alignItems: "center",
        gap: `${size / 5}rem`,
        height: `${(2 * size) / 3}rem`,
      }}
    >
      <div className="flex items-center">
        {Array.from({ length: maxRating }, (_, index) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={
              (tempRating === 0 ? rating : tempRating) > index ? color : "none"
            }
            stroke={color}
            strokeWidth={`${strokeWidth / 100}rem`}
            role="button"
            key={index}
            onClick={(index) => handleClick(index + 1)}
            onMouseEnter={() => setTempRating(index + 1)}
            onMouseLeave={() => setTempRating(0)}
            style={{
              width: `${(2 * size) / 3}rem`,
              height: `${(2 * size) / 3}rem`,
            }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span
        style={{
          fontSize: `${size / 2}rem`,
          color,
          fontWeight: "600",
        }}
      >
        {tempRating !== 0 ? tempRating : rating === 0 ? "" : rating}
      </span>
    </div>
  );
}

export default StarRating;
