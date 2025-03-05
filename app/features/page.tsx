export default function Features() {
  return (
<>
        <h1 className="text-4xl font-bold mb-8">Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureSection
            title="Expense Tracking"
            description="Easily log and categorize your expenses. Get a clear view of where your money goes with our intuitive tracking system."
          />
          <FeatureSection
            title="Smart Analytics"
            description="Understand your spending patterns with AI-powered insights. Identify trends and opportunities to optimize your finances."
          />
          <FeatureSection
            title="Custom Categories"
            description="Create and manage custom expense categories that match your unique financial needs and goals."
          />
          <FeatureSection
            title="Data Export"
            description="Export your financial data in various formats for further analysis or record-keeping."
          />
          <FeatureSection
            title="Secure Storage"
            description="Your financial data is encrypted and stored securely. We prioritize your privacy and data security."
          />
          <FeatureSection
            title="Mobile Friendly"
            description="Access your financial information on any device with our responsive web application."
          />
        </div>
        </>
  )
}

function FeatureSection({ title, description }: { title: string; description: string }) {
  return (
    <div className="border rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-neutral-400">{description}</p>
    </div>
  )
}

