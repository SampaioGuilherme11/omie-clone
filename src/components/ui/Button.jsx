import PropTypes from "prop-types";

const Button = ({ buttonText, props }) => {
  return (
    <button
      className={`rounded-40 relative cursor-pointer pt-2.5 pr-6 pb-2.5 pl-6 text-center text-sm font-bold transition-all duration-200 ease-linear ${props}`}
    >
      {buttonText}
    </button>
  );
};

// Definição dos tipos das props
Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  props: PropTypes.string, // Para a prop 'className'
};

Button.defaultProps = {
  props: "", // Valor padrão caso não seja passado 'className'
};

export default Button;
