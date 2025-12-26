import PropTypes from "prop-types";

import "./style.scss";

export const BUTTON_TYPES = {
  DEFAULT: 1,
  SUBMIT: 2,
};

const Button = ({ title, onClick, type, disabled, children }) => {
  const isSubmit = type === BUTTON_TYPES.SUBMIT || type === "submit";
  const label = title || (typeof children === "string" ? children : "");

  return (
    <button
      disabled={disabled}
      className="Button"
      type={isSubmit ? "submit" : "button"}
      data-testid="button-test-id"
      onClick={onClick}
      title={title}
    >
      {label || children}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.bool,
  children: PropTypes.node,
};
Button.defaultProps = {
  disabled: false,
  onClick: undefined,
  type: BUTTON_TYPES.DEFAULT,
  title: "",
  children: null,
};

export default Button;
