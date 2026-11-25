"use client"
import React from 'react'
import QueryProvider from './QueryProviders'

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <QueryProvider>
        {children}
    </QueryProvider>
  )
}
