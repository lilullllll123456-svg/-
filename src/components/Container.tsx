import React from 'react'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

function Container({ children, className = '' }: ContainerProps) {
  return <div className={`mx-auto w-full max-w-[1700px] px-8 xl:px-12 ${className}`}>{children}</div>
}

export default Container
