import React from 'react'

const CustomInput = ({style,type,placeholder, value, onChange}) => {
  return (
    <>
      <input 
      style={style}
      type={type === undefined ? 'text' : `${type}`}
      className="custom__input" 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      />
    </>
  )
}

export default CustomInput