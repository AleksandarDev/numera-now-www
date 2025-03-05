export default function About() {
  return (
    <>
        <h1 className="text-4xl font-bold mb-8">About Numera</h1>
        <div className="space-y-8 max-w-3xl">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-400">
              Numera was created with a simple mission: to make financial tracking accessible to everyone. 
              We believe that understanding your finances shouldn&apos;t be complicated or expensive.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Why Free?</h2>
            <p className="text-gray-400">
              We believe that financial tools should be accessible to everyone. That&apos;s why Numera is and 
              will always be free to use. No hidden fees, no premium features - just a powerful financial 
              tracking tool available to all.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="space-y-4 text-gray-400">
              <li>
                <strong className="text-white">Simplicity</strong> - We focus on providing a clean, 
                intuitive interface that makes financial tracking straightforward.
              </li>
              <li>
                <strong className="text-white">Privacy</strong> - Your financial data is yours. 
                We employ strong security measures to protect your information.
              </li>
              <li>
                <strong className="text-white">Accessibility</strong> - Financial tools should be 
                available to everyone, regardless of their financial status.
              </li>
            </ul>
          </section>
        </div>
      </>
  )
}

