export default function Terms() {
  return (
    <>
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="space-y-8 max-w-3xl">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-400">
              By accessing and using Numera, you accept and agree to be bound by the terms and 
              provisions of this agreement. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="text-gray-400">
              Numera provides a free financial tracking service. We reserve the right to modify, 
              suspend, or discontinue the service at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <div className="space-y-4 text-gray-400">
              <p>You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintaining the confidentiality of your account</li>
                <li>All activities that occur under your account</li>
                <li>Ensuring your data is accurate and up-to-date</li>
                <li>Complying with all applicable laws and regulations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Usage and Privacy</h2>
            <p className="text-gray-400">
              Your use of Numera is also governed by our Privacy Policy. By using Numera, 
              you consent to the collection and use of information as detailed in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-gray-400">
              The Numera service, including all content, features, and functionality, is owned 
              by Numera and is protected by international copyright, trademark, and other 
              intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-400">
              Numera is provided &quot;as is&quot; without any warranties. We shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages resulting from 
              your use of or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p className="text-gray-400">
              We reserve the right to modify these terms at any time. We will notify users of 
              any material changes to these terms. Continued use of Numera after such modifications 
              constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p className="text-gray-400">
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:terms@numera.now" className="text-white hover:underline">
                terms@numera.now
              </a>
            </p>
          </section>
        </div>
      </>
  )
}

