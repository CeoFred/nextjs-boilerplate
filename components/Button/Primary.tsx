import React from 'react'

export default function Button({ children,className }: {children: any,className?: string}): any {
  return (
    <button className={`bg-primary text-white mx-2 bg-primary rounded-l-lg rounded-r-lg p-3 px-6 font-light flex align-center justify-center ${className}`}>{children}</button>
  )
}
