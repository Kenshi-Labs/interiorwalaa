'use client';
import React, { useState } from 'react';

interface EditTextProps {
  placeholder?: string;
  value?: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
  id?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  autoComplete?: string;
  autoFocus?: boolean;
}

const EditText: React.FC<EditTextProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
  placeholder = '',
  value,
  onChange,
  type = 'text',
  disabled = false,
  required = false,
  className = '',
  name,
  id,
  maxLength,
  minLength,
  pattern,
  autoComplete,
  autoFocus = false,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(value || '');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    if (onChange) {
      onChange(e); // Pass the full event object instead of just the value
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="w-full">
      <input
        type={type}
        value={value !== undefined ? value : internalValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        name={name}
        id={id}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className={`
          w-full
          bg-edittext-1
          border-0
          rounded-[10px]
          pt-[10px] sm:pt-[15px] md:pt-[17px] lg:pt-[20px]
          pr-[7px] sm:pr-[10px] md:pr-[12px] lg:pr-[14px]
          pb-[10px] sm:pb-[15px] md:pb-[17px] lg:pb-[20px]
          pl-[7px] sm:pl-[10px] md:pl-[12px] lg:pl-[14px]
          text-[10px] sm:text-[11px] md:text-[11px] lg:text-[12px]
          font-manrope
          font-normal
          leading-[13px] sm:leading-[15px] md:leading-[16px] lg:leading-[17px]
          text-left
          text-global-11
          placeholder:text-global-11
          placeholder:opacity-70
          transition-all
          duration-200
          ease-in-out
          focus:outline-none
          focus:ring-2
          focus:ring-header-1
          focus:ring-opacity-50
          focus:bg-opacity-80
          hover:bg-opacity-80
          ${isFocused ? 'ring-2 ring-header-1 ring-opacity-50' : ''}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-text'}
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      />
    </div>
  );
};

export default EditText;