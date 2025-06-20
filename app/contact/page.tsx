"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send, MessageCircle, HelpCircle, CheckCircle } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email within 24 hours",
    contact: "support@grantsindia.com",
    availability: "24/7",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our support team",
    contact: "+91 98765 43210",
    availability: "Mon-Fri, 9 AM - 6 PM IST",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Instant help through live chat",
    contact: "Available on website",
    availability: "Mon-Fri, 9 AM - 6 PM IST",
  },
  {
    icon: HelpCircle,
    title: "Help Center",
    description: "Browse our comprehensive FAQ",
    contact: "help.grantsindia.com",
    availability: "24/7",
  },
]

const officeLocations = [
  {
    city: "New Delhi",
    address: "123 Connaught Place, New Delhi - 110001",
    phone: "+91 11 4567 8901",
    email: "delhi@grantsindia.com",
    type: "Headquarters",
  },
  {
    city: "Mumbai",
    address: "456 Bandra Kurla Complex, Mumbai - 400051",
    phone: "+91 22 9876 5432",
    email: "mumbai@grantsindia.com",
    type: "Regional Office",
  },
  {
    city: "Bangalore",
    address: "789 Koramangala, Bangalore - 560034",
    phone: "+91 80 1234 5678",
    email: "bangalore@grantsindia.com",
    type: "Regional Office",
  },
]

const faqs = [
  {
    question: "How do I find grants relevant to my project?",
    answer:
      "Use our advanced search filters to narrow down grants by category, location, funding amount, and eligibility criteria. Our AI-powered matching system will also recommend relevant grants based on your profile.",
  },
  {
    question: "Is there a fee to use GrantsIndia?",
    answer:
      "We offer a free tier with basic access to grants. Premium plans start at ₹2,999/month and include advanced features like unlimited access, priority support, and application tracking.",
  },
  {
    question: "How often is the grant database updated?",
    answer:
      "Our team updates the database daily. We monitor government websites, official notifications, and work with contributors across all states to ensure information is current and accurate.",
  },
  {
    question: "Can you help with grant application preparation?",
    answer:
      "Yes! Premium subscribers get access to application templates, expert guidance, and review services to improve their chances of success.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    category: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-green-600">
              <span className="text-sm font-bold text-white">G</span>
            </div>
            <span className="text-xl font-bold text-gray-900">GrantsIndia</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/explore" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Explore Grants
            </Link>
            <Link href="/contact" className="text-blue-600 font-medium">
              Contact
            </Link>
          </nav>

          <Button
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
            asChild
          >
            <Link href="/login">Get Started</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mx-auto max-w-4xl">
            <Badge className="mb-6 bg-green-100 text-green-700 hover:bg-green-200">Get in Touch</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              We're Here to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Help You
              </span>
            </h1>
            <p className="mb-8 text-xl text-gray-600 leading-relaxed">
              Have questions about grants, need technical support, or want to partner with us? Our team is ready to
              assist you on your funding journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Can We Help?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the best way to reach us based on your needs and urgency
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-100 to-green-100">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                    <div className="space-y-1">
                      <p className="font-medium text-gray-900">{method.contact}</p>
                      <p className="text-xs text-gray-500">{method.availability}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          organization: "",
                          subject: "",
                          category: "",
                          message: "",
                        })
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => updateFormData("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => updateFormData("phone", e.target.value)}
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization</Label>
                        <Input
                          id="organization"
                          value={formData.organization}
                          onChange={(e) => updateFormData("organization", e.target.value)}
                          placeholder="Your organization name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => updateFormData("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="grants">Grant Information</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="billing">Billing & Subscription</SelectItem>
                          <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => updateFormData("subject", e.target.value)}
                        placeholder="Brief subject of your inquiry"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => updateFormData("message", e.target.value)}
                        placeholder="Please provide details about your inquiry..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Office Locations */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Offices</h3>
                <p className="text-gray-600 mb-6">
                  Visit us at any of our locations or reach out to the nearest regional office
                </p>
              </div>

              {officeLocations.map((office, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">{office.city}</h4>
                      <Badge variant="outline">{office.type}</Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                        <span className="text-gray-600">{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{office.email}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions. Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button variant="outline" asChild>
              <Link href="/help">Visit Help Center</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-green-600">
                  <span className="text-sm font-bold text-white">G</span>
                </div>
                <span className="text-xl font-bold">GrantsIndia</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your comprehensive guide to government grants and funding opportunities across India.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/explore" className="hover:text-white transition-colors">
                    Explore Grants
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/central-grants" className="hover:text-white transition-colors">
                    Central Grants
                  </Link>
                </li>
                <li>
                  <Link href="/state-grants" className="hover:text-white transition-colors">
                    State Grants
                  </Link>
                </li>
                <li>
                  <Link href="/business" className="hover:text-white transition-colors">
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="/education" className="hover:text-white transition-colors">
                    Education
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@grantsindia.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 GrantsIndia. All rights reserved. | Built with ❤️ for Indian entrepreneurs and organizations.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
