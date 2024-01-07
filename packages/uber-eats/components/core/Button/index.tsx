import React from 'react'

interface ButtonProps {
    ariaLabel?: string
    variant?: 'primary' | 'green'
    children: React.ReactNode
    disabled?: boolean
    handleOnClick?: () => void
    rounded?: boolean
    type?: 'button' | 'reset' | 'submit'
}

const Button = ({
    children,
    type,
    disabled,
    handleOnClick,
    variant= 'primary',
}: ButtonProps) => {
  return (
    <button 
        type={type} 
        disabled={disabled} 
        onClick={handleOnClick}
        className="rounded-md text-white bg-green-500 h-11 w-full"
    >
        {children}
    </button>
  )
}

export default Button