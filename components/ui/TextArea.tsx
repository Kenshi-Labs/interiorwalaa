'use client';
import React, { useState } from 'react';

interface TextAreaProps {
  placeholder?: string;
  value?: string;
  onChange: (value: React.ChangeEvent<HTMLTextAreaElement>) => void
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
  id?: string;
  maxLength?: number;
  minLength?: number;
  rows?: number;
  cols?: number;
  autoFocus?: boolean;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}

const TextArea: React.FC<TextAreaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  placeholder = '',
  value,
  onChange,
  disabled = false,
  required = false,
  className = '',
  name,
  id,
  maxLength,
  minLength,
  rows = 4,
  cols,
  autoFocus = false,
  resize = 'vertical',
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(value || '');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const resizeClass = {
    none: 'resize-none',
    both: 'resize',
    horizontal: 'resize-x',
    vertical: 'resize-y'
  };

  return (
    <div className="w-full">
      <textarea
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
        rows={rows}
        cols={cols}
        autoFocus={autoFocus}
        className={`
          w-full
          bg-edittext-1
          border-0
          rounded-[10px]
          pt-[10px] sm:pt-[15px] md:pt-[17px] lg:pt-[20px]
          pr-[6px] sm:pr-[9px] md:pr-[10px] lg:pr-[12px]
          pb-[6px] sm:pb-[9px] md:pb-[10px] lg:pb-[12px]
          pl-[6px] sm:pl-[9px] md:pl-[10px] lg:pl-[12px]
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
          min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px]
          ${resizeClass[resize]}
          ${isFocused ? 'ring-2 ring-header-1 ring-opacity-50' : ''}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-text'}
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      />
    </div>
  );
};

export default TextArea;