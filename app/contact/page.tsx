'use client'

import { useState } from 'react'
import { showNotification  } from '@signalco/ui-notifications';
import { Button } from '@signalco/ui-primitives/button'
import { Input } from '@signalco/ui-primitives/input'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // const formData = new FormData(e.currentTarget)
    // const data = {
    //   name: formData.get('name'),
    //   email: formData.get('email'),
    //   message: formData.get('message'),
    // }

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // TODO: Send message
    
    showNotification("We'll get back to you as soon as possible.", 'info')

    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <p className="text-gray-400 mb-8">
            Have a question or feedback? We&apos;d love to hear from you. Fill out the form below 
            and we&apos;ll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                required
                className="bg-transparent border-gray-800"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="bg-transparent border-gray-800"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Input
                id="message"
                name="message"
                required
                className="min-h-[150px] bg-transparent border-gray-800"
              />
            </div>

            <Button type="submit" disabled={isSubmitting} fullWidth>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>

          <div className="mt-12 pt-12 border-t border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
            <p className="text-gray-400">
              You can also reach us directly at:{' '}
              <a href="mailto:contact@numera.now" className="text-white hover:underline">
                contact@numera.now
              </a>
            </p>
          </div>
        </div>
      </>
  )
}

