import PropTypes from "prop-types";

const Button = ({ buttonText, className, onClick }) => {
  return (
    <button
      className={`relative cursor-pointer rounded-[40px] pt-[8px] pr-6 pb-[8px] pl-6 text-center text-sm font-bold transition-all duration-200 ease-linear ${className}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: "",
  onClick: () => {},
};

export default Button;
