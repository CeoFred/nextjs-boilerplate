import React from 'react'

export default function Input({ type, placeholder, className }: { type: string, placeholder: string, className?: string}): any {
  return (
    <input type={type} className={`placeholder-gray h-12  ${className}`} placeholder={placeholder} />
  )
}
