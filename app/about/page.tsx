"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Award, TrendingUp, CheckCircle, Heart, Globe, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"

const stats = [
  { label: "Total Grants Listed", value: "1,200+", icon: Target },
  { label: "States & UTs Covered", value: "28", icon: Globe },
  { label: "Success Rate", value: "75%", icon: TrendingUp },
  { label: "Happy Users", value: "10,000+", icon: Users },
]

const features = [
  {
    icon: Target,
    title: "Comprehensive Database",
    description: "Access to the most complete database of Central and State government grants across India.",
  },
  {
    icon: Users,
    title: "Expert Curation",
    description: "Our team of researchers and contributors ensure all grant information is accurate and up-to-date.",
  },
  {
    icon: Lightbulb,
    title: "Smart Matching",
    description: "AI-powered recommendations to help you find grants that best match your project requirements.",
  },
  {
    icon: Award,
    title: "Success Support",
    description: "Guidance and resources to help you craft winning grant applications and increase success rates.",
  },
]

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    description: "Former government policy advisor with 15+ years in public sector funding",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Priya Sharma",
    role: "Head of Research",
    description: "PhD in Public Policy, leads our grant research and curation efforts",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Amit Patel",
    role: "Technology Lead",
    description: "Full-stack developer passionate about making government services accessible",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Divya Singh",
    role: "Community Manager",
    description: "Connects with users and contributors to build our grant community",
    image: "/placeholder.svg?height=120&width=120",
  },
]

export default function AboutPage() {
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
            <Link href="/about" className="text-blue-600 font-medium">
              About
            </Link>
            <Link href="/explore" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Explore Grants
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
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
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">About GrantsIndia</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Democratizing Access to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Government Funding
              </span>
            </h1>
            <p className="mb-8 text-xl text-gray-600 leading-relaxed">
              We believe every entrepreneur, organization, and innovator should have equal access to government grants
              and funding opportunities. Our mission is to make this information accessible, searchable, and actionable.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="border-0 shadow-md text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-100 to-green-100">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Government grants and funding schemes are often buried in complex websites, scattered across multiple
                departments, and difficult to discover. We're changing that by creating India's most comprehensive,
                user-friendly platform for government funding opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Comprehensive Coverage</h4>
                    <p className="text-gray-600">
                      We track grants from all Central ministries and State governments across India.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-time Updates</h4>
                    <p className="text-gray-600">Our team ensures all grant information is current and accurate.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">User-Friendly Experience</h4>
                    <p className="text-gray-600">
                      Simple search, clear information, and streamlined application processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Mission illustration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose GrantsIndia?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've built the most comprehensive and user-friendly platform for discovering government grants in India
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-100 to-green-100">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team combines expertise in government policy, technology, and community building
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Grant?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of entrepreneurs and organizations who have found funding through our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/login">Get Started Free</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <Link href="/explore">
                  Explore Grants
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
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
                  <Heart className="h-4 w-4" />
                  <span>info@grantsindia.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
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
