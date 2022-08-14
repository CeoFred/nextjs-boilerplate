import React from 'react'

export default function Button({ children,className }: {children: string,className?: string}): any {
  return (
    <button className={`bg-white border border-primary rounded-l-lg rounded-r-lg p-3 px-6 font-light text-primary mx-2 ${className}`}>{children}</button>
  )
}
