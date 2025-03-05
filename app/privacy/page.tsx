export default function Privacy() {
  return (
    <>
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-8 max-w-3xl">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
            <p className="text-gray-400">
              We collect only the minimum amount of data necessary to provide you with our financial tracking service. 
              This includes your account information and the financial data you choose to input into the application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Usage</h2>
            <p className="text-gray-400">
              Your data is used solely for providing and improving the Numera service. We do not sell or share your 
              personal information with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-400">
              We implement strong security measures to protect your data, including encryption at rest and in transit. 
              Our systems are regularly updated to maintain the highest security standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-gray-400">
              You have the right to access, modify, or delete your data at any time. You can also request a copy of 
              all data we hold about you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-400">
              If you have any questions about our privacy policy or how we handle your data, please contact us at 
              privacy@numera.now
            </p>
          </section>
        </div>
        </>
  )
}

