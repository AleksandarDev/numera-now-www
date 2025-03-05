import Link from 'next/link'
import { Button } from '@signalco/ui-primitives/button'

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/" aria-label="Numera Home">
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.2798 2.77617L30.8798 31.5762V7.68003H34.7198V45.2239L17.1198 16.4239V40.32H13.2798V2.77617Z" fill="white"/>
          </svg>
        </Link>
        <Button variant="solid" href="https://app.numera.now">
          Open App
        </Button>
      </div>
    </header>
  )
}

