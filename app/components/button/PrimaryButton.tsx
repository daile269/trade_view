import React from 'react'
type Props = {
    children?: React.ReactNode,
    isLoading?: boolean
    type: "submit" | "reset" | "button" | undefined;
    className?: string
}
const PrimaryButton = ({ children, isLoading = false, type, className = "" }: Props) => {
    return isLoading ?
        <button type={type} className={`w-full bg-red-600 text-white font-bold uppercase py-3 rounded-md hover:bg-red-700 transition-all duration-300 shadow-lg flex justify-center ${className}`}>
            <div className='loader'></div>
        </button>
        :
        <button type={type} className='w-full bg-red-600 text-white font-bold uppercase py-3 rounded-md hover:bg-red-700 transition-all duration-300 shadow-lg'>{children}</button>
}

export default PrimaryButton