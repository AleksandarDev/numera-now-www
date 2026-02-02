import { Typography } from '@signalco/ui-primitives/Typography'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <div className="flex items-center space-x-2">
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M13.2798 2.77617L30.8798 31.5762V7.68003H34.7198V45.2239L17.1198 16.4239V40.32H13.2798V2.77617Z" className="fill-foreground"/>
            </svg>
            <span className="font-semibold">Numera</span>
          </div>
          <p className="mt-4 text-neutral-400">Empowering your financial journey.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-neutral-400">
            <li><Link href="/features" className="hover:text-neutral-300">Features</Link></li>
            <li><Link href="/about" className="hover:text-neutral-300">About</Link></li>
            <li><Link href="/privacy" className="hover:text-neutral-300">Privacy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-neutral-400">
            <li><Link href="/faq" className="hover:text-neutral-300">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-neutral-300">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-neutral-400">
            <li><Link href="/privacy" className="hover:text-neutral-300">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-neutral-300">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 text-center">
        <Typography level="body3">&copy; {new Date().getFullYear()} Numera. All rights reserved.</Typography>
      </div>
    </footer>
  )
}

