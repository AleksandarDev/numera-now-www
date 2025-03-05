import { Typography } from "@signalco/ui-primitives/Typography";
import {
  Accordion,
} from "@signalco/ui/Accordion";

export default function FAQ() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="max-w-3xl">
        <Accordion defaultOpen>
          <Typography level="h6">Is Numera really free?</Typography>
          <p>
            Yes, Numera is completely free to use. We believe that financial tracking tools should be accessible to everyone,
            so we don&apos;t charge any fees or have any premium features.
          </p>
        </Accordion>

        <Accordion defaultOpen>
          <Typography level="h6">How secure is my financial data?</Typography>
          <p className="text-gray-400">
            We take security very seriously. All your data is encrypted both in transit and at rest.
            We use industry-standard security practices and regularly update our systems to ensure your data remains protected.
          </p>
        </Accordion>

        <Accordion defaultOpen>
          <Typography level="h6">Can I export my data?</Typography>
          <p className="text-gray-400">
            Yes, you can export your financial data at any time. Numera supports exporting your data in various formats
            for your personal records or analysis.
          </p>
        </Accordion>

        <Accordion defaultOpen>
          <Typography level="h6">How do I get started?</Typography>
          <p className="text-gray-400">
            Getting started is easy! Simply visit app.numera.now and create your account. Once logged in,
            you can immediately begin tracking your expenses and managing your finances.
          </p>
        </Accordion>

        <Accordion defaultOpen>
          <Typography level="h6">Can I use Numera on my mobile device?</Typography>
          <p className="text-gray-400">
            Yes, Numera is fully responsive and works on all devices. You can access your financial information
            from any device with a web browser.
          </p>
        </Accordion>

        <Accordion defaultOpen>
          <Typography level="h6">What happens to my data if I delete my account?</Typography>
          <p className="text-gray-400">
            When you delete your account, all your personal and financial data is permanently removed from our systems.
            We recommend exporting your data before deleting your account if you&apos;d like to keep a copy.
          </p>
        </Accordion>
      </div>
    </>
  )
}

