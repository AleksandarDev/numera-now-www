import { Button } from '@signalco/ui-primitives/Button'
import { BarChart3, PieChart, TrendingUp, LineChart } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Your numbers - now</h1>
          <p className="text-xl mb-8 text-neutral-400">Track and analyze your finance and numbers - no effort</p>
          <Button size="lg" variant="outlined" href="https://app.numera.now">
            Get Started - It&apos;s Free
          </Button>
        </div>
      </section>

      {/* Divider */}
      <div className="h-2 w-full [background-image:radial-gradient(ellipse_farthest-side_at_center_100%,_rgba(85,85,85,1)_0%,_rgba(0,0,0,1)_100%)]"></div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <FeatureItem
              icon={<BarChart3 className="w-10 h-10" />}
              title="Easy Tracking"
              description="Log your expenses and income with our intuitive interface"
            />
            <FeatureItem
              icon={<LineChart className="w-10 h-10" />}
              title="Smart Analysis"
              description="Get AI-powered insights about your spending patterns"
            />
            <FeatureItem
              icon={<PieChart className="w-10 h-10" />}
              title="Visual Reports"
              description="See your financial health with comprehensive charts"
            />
            <FeatureItem
              icon={<TrendingUp className="w-10 h-10" />}
              title="Growth Tracking"
              description="Monitor your financial progress over time"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-2 [background-image:radial-gradient(ellipse_farthest-side_at_center_0%,_rgba(85,85,85,1)_0%,_rgba(0,0,0,0)_100%)]"></div>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Control?</h2>
          <p className="text-xl mb-8 text-neutral-400">Join thousands of users who trust Numera with their financial tracking.</p>
          <Button size="lg" variant="outlined" href="https://app.numera.now">
            Start Using Numera
          </Button>
        </div>
      </section>
    </>
  )
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-4 text-neutral-100">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

