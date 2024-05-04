import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  variant: PropTypes.oneOf(['black', 'cart', 'blue', 'outline-blue']),
  processing: PropTypes.bool,
  children: PropTypes.node,
};

export default function Button({ type = 'submit', className = '', variant = 'primary', processing, children, style }) {
  return (
    <button type={type} style={style} className={`button button-${variant} ${processing} ${className} px-4 rounded-1`} disabled={processing}>
      {children}
    </button>
  );
}
