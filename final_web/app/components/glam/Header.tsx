import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <Link href="/">
        <h1 className="text-2xl font-bold tracking-wide text-glamBlack">GlamGiant Inc.</h1>
      </Link>
      <nav className="flex gap-4 items-center">
        <Link href="/products" className="hover:underline">Productos</Link>
        <Link href="/login">
          <Button variant="outline">Ingresar</Button>
        </Link>
      </nav>
   </header>
  )
}