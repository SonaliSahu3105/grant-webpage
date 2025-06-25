"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Shield,
  Users,
  TrendingUp,
  ArrowRight,
  Star,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Building2,
  MapIcon,
  FileText,
  Award,
} from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Find relevant grants quickly with our intelligent search and filtering system",
  },
  {
    icon: Shield,
    title: "Verified Information",
    description: "All grant information is verified and updated regularly from official sources",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Get guidance from our team of grant application specialists",
  },
  {
    icon: TrendingUp,
    title: "Success Tracking",
    description: "Monitor your application progress and success rates",
  },
]

const stats = [
  { number: "2,000+", label: "Active Grants", icon: FileText },
  { number: "28", label: "States Covered", icon: MapIcon },
  { number: "85%", label: "Success Rate", icon: Award },
  { number: "50K+", label: "Applications", icon: Users },
]

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Startup Founder",
    content:
      "GrantsIndia helped me secure ₹25 lakhs for my agri-tech startup. The platform made the entire process seamless.",
    rating: 5,
  },
  {
    name: "Dr. Rajesh Kumar",
    role: "Research Director",
    content:
      "Found the perfect research grant for our healthcare project. The detailed information saved us weeks of research.",
    rating: 5,
  },
  {
    name: "Meera Patel",
    role: "NGO Director",
    content: "The state-wise categorization helped us identify local grants we never knew existed. Highly recommended!",
    rating: 5,
  },
]

const grantCategories = [
  {
    title: "Central Government Grants",
    description: "Access nationwide funding from various ministries and departments",
    icon: Building2,
    count: "1,200+",
    href: "/central-grants",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "State & UT Grants",
    description: "Discover region-specific funding opportunities",
    icon: MapIcon,
    count: "800+",
    href: "/state-grants",
    color: "from-emerald-500 to-green-600",
  },
]

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-green-600 to-emerald-600">
              <span className="text-sm font-bold text-white">G</span>
            </div>
            <span className="text-xl font-bold text-gray-900">GrantsIndia</span>
          </div>

          {/* Desktop Navigation */}
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
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              className="hidden md:flex bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              asChild
            >
              <Link href="/login">Get Started</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
          }`}
        >
          <nav className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/explore"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Explore Grants
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                  asChild
                >
                  <Link href="/login">Get Started</Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="container mx-auto text-center">
          <div className="mx-auto max-w-4xl">
            <Badge className="mb-6 bg-green-100 text-green-700 hover:bg-green-200">
              India's #1 Grant Discovery Platform
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Discover Government{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Grants
              </span>{" "}
              Made Simple
            </h1>
            <p className="mb-8 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Access India's most comprehensive database of government grants. From startups to research institutions,
              find the perfect funding opportunity for your project with our intelligent matching system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg px-8 py-4"
                asChild
              >
                <Link href="/login">Start Finding Grants</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-gray-300 hover:bg-gray-50 text-lg px-8 py-4"
                asChild
              >
                <Link href="/explore">Browse All Grants</Link>
              </Button>
            </div>

            {/* Quick Access Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {grantCategories.map((category) => {
                const IconComponent = category.icon
                return (
                  <Card
                    key={category.title}
                    className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg bg-white"
                    asChild
                  >
                    <Link href={category.href}>
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform`}
                          >
                            <IconComponent className="h-7 w-7 text-white" />
                          </div>
                          <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                          {category.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-base">{category.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Badge className="bg-gray-100 text-gray-700 font-semibold">
                          {category.count} grants available
                        </Badge>
                      </CardContent>
                    </Link>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join the growing community of successful grant recipients across India
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="text-center border-0 shadow-md bg-white">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-green-100 to-emerald-100">
                        <IconComponent className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose GrantsIndia?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make grant discovery and application simple, efficient, and successful
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-green-100 to-emerald-100">
                        <IconComponent className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from entrepreneurs and organizations who found success through our platform
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md bg-white">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Grant?</h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of successful applicants who have secured funding through our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4" asChild>
                <Link href="/login">Get Started Free</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-4"
                asChild
              >
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-green-600 to-emerald-600">
                  <span className="text-sm font-bold text-white">G</span>
                </div>
                <span className="text-xl font-bold">GrantsIndia</span>
              </div>
              <p className="text-gray-400 mb-4">
                India's most comprehensive platform for discovering and applying to government grants.
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
              <h3 className="font-semibold mb-4">Grant Categories</h3>
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
                  <Link href="/grants/agriculture-rural" className="hover:text-white transition-colors">
                    Agriculture
                  </Link>
                </li>
                <li>
                  <Link href="/grants/business-entrepreneurship" className="hover:text-white transition-colors">
                    Business
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
