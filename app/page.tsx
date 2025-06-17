"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  GraduationCap,
  Heart,
  Leaf,
  Lightbulb,
  Users,
  Factory,
  Home,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"

const centralGrantCategories = [
  {
    id: "agriculture",
    title: "Agriculture & Rural Development",
    description: "Grants for farming, rural infrastructure, and agricultural innovation",
    icon: Leaf,
    count: "150+ grants",
  },
  {
    id: "business",
    title: "Business & Entrepreneurship",
    description: "Startup funding, MSME support, and business development grants",
    icon: Building2,
    count: "200+ grants",
  },
  {
    id: "education",
    title: "Education & Research",
    description: "Educational institutions, research projects, and skill development",
    icon: GraduationCap,
    count: "300+ grants",
  },
  {
    id: "health",
    title: "Healthcare & Wellness",
    description: "Medical research, healthcare infrastructure, and public health",
    icon: Heart,
    count: "180+ grants",
  },
  {
    id: "science",
    title: "Science & Technology",
    description: "R&D projects, innovation labs, and technology development",
    icon: Lightbulb,
    count: "120+ grants",
  },
  {
    id: "social",
    title: "Social Welfare",
    description: "Community development, NGO support, and social impact projects",
    icon: Users,
    count: "250+ grants",
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Industry",
    description: "Industrial development, infrastructure projects, and manufacturing",
    icon: Factory,
    count: "90+ grants",
  },
  {
    id: "housing",
    title: "Housing & Urban Development",
    description: "Affordable housing, urban planning, and smart city initiatives",
    icon: Home,
    count: "110+ grants",
  },
]

const stateGrants = [
  { state: "Andhra Pradesh", contributor: "Priya Sharma", grants: 45 },
  { state: "Assam", contributor: "Divya Goswami", grants: 32 },
  { state: "Bihar", contributor: "Rahul Kumar", grants: 28 },
  { state: "Chhattisgarh", contributor: "Anita Patel", grants: 22 },
  { state: "Delhi", contributor: "Vikash Singh", grants: 67 },
  { state: "Gujarat", contributor: "Meera Shah", grants: 54 },
  { state: "Haryana", contributor: "Suresh Yadav", grants: 38 },
  { state: "Karnataka", contributor: "Lakshmi Rao", grants: 72 },
  { state: "Kerala", contributor: "Arjun Nair", grants: 41 },
  { state: "Madhya Pradesh", contributor: "Pooja Gupta", grants: 35 },
  { state: "Maharashtra", contributor: "Amit Desai", grants: 89 },
  { state: "Odisha", contributor: "Sneha Mishra", grants: 29 },
  { state: "Punjab", contributor: "Harpreet Kaur", grants: 33 },
  { state: "Rajasthan", contributor: "Kiran Joshi", grants: 42 },
  { state: "Tamil Nadu", contributor: "Deepa Krishnan", grants: 63 },
  { state: "Telangana", contributor: "Ravi Reddy", grants: 48 },
  { state: "Uttar Pradesh", contributor: "Neha Agarwal", grants: 76 },
  { state: "West Bengal", contributor: "Sourav Das", grants: 51 },
]

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-green-600">
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
              className="hidden md:flex bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
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
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mx-auto max-w-4xl">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">Discover Government Grants</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Find the Perfect Grant for Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Project</span>
            </h1>
            <p className="mb-8 text-xl text-gray-600 leading-relaxed">
              Access comprehensive database of Central and State government grants across India. Streamline your funding
              search with our curated directory of opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                asChild
              >
                <Link href="/login">Get Started Free</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-gray-300 hover:bg-gray-50" asChild>
                <Link href="/login">Explore Grants</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Central Grants Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Central Government Grants</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore grants by category from various Central Government ministries and departments
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {centralGrantCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={category.id}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 shadow-md"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-100 to-green-100 group-hover:from-blue-200 group-hover:to-green-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-3 text-gray-600">{category.description}</CardDescription>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                      {category.count}
                    </Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* State Grants Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">State & UT Grants</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover state-specific funding opportunities curated by our research contributors
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {stateGrants.map((state) => (
              <Card
                key={state.state}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 shadow-sm bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {state.state}
                    </h3>
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      Contributor: <span className="font-medium text-gray-800">{state.contributor}</span>
                    </p>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                      {state.grants} grants available
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1,200+</div>
              <div className="text-gray-600">Total Grants Listed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">28</div>
              <div className="text-gray-600">States & UTs Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Government Departments</div>
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
