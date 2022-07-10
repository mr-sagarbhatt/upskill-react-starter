import React from 'react'

const Button = ({ children, className, type = 'button', ...buttonProps }) => {
  return (
    <button
      {...buttonProps}
      className={`border p-4 text-white py-3 px-5 bg-black inline-block hover:text-[color:#7dd3fc] transition-colors duration-300 ${className}`}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
