"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Building2, MapPin, Clock, IndianRupee, ArrowRight, Target, Users } from "lucide-react"
import Link from "next/link"

const grantCategories = [
  {
    type: "central",
    title: "Central Government Grants",
    description: "Nationwide funding opportunities from various ministries",
    totalGrants: 1200,
    avgAmount: "₹25 Lakhs",
    icon: Building2,
    color: "blue",
    categories: [
      "Startup & Innovation",
      "MSME Development",
      "Agriculture & Rural",
      "Education & Research",
      "Healthcare",
      "Digital Infrastructure",
    ],
  },
  {
    type: "state",
    title: "State & UT Grants",
    description: "Region-specific funding tailored to local development needs",
    totalGrants: 800,
    avgAmount: "₹12 Lakhs",
    icon: MapPin,
    color: "green",
    categories: [
      "Industrial Development",
      "Women Entrepreneurship",
      "Tourism Promotion",
      "Skill Development",
      "Environmental Projects",
      "Cultural Heritage",
    ],
  },
]

const featuredGrants = [
  {
    id: 1,
    title: "Startup India Seed Fund Scheme",
    ministry: "Ministry of Commerce & Industry",
    type: "Central",
    amount: "₹20L - ₹5Cr",
    deadline: "Aug 15, 2024",
    applicants: 1250,
    category: "Startup & Innovation",
    status: "Open",
  },
  {
    id: 2,
    title: "Maharashtra Innovation Society Grant",
    ministry: "Government of Maharashtra",
    type: "State",
    amount: "₹5L - ₹50L",
    deadline: "Sep 30, 2024",
    applicants: 340,
    category: "Innovation",
    status: "Open",
  },
  {
    id: 3,
    title: "PM-KISAN FPO Development",
    ministry: "Ministry of Agriculture",
    type: "Central",
    amount: "₹15L - ₹2Cr",
    deadline: "Aug 31, 2024",
    applicants: 890,
    category: "Agriculture",
    status: "Open",
  },
  {
    id: 4,
    title: "Karnataka Biotechnology Fund",
    ministry: "Government of Karnataka",
    type: "State",
    amount: "₹10L - ₹1Cr",
    deadline: "Oct 15, 2024",
    applicants: 156,
    category: "Biotechnology",
    status: "Open",
  },
]

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

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
            <Link href="/explore" className="text-blue-600 font-medium">
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
            <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200">Explore All Grants</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Discover Your Perfect{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Funding Match
              </span>
            </h1>
            <p className="mb-8 text-xl text-gray-600 leading-relaxed">
              Search through 2,000+ government grants from Central ministries and State governments. Find funding
              opportunities that match your project, location, and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-center">Find Your Grant</CardTitle>
              <CardDescription className="text-center">
                Use our advanced search to discover grants that match your needs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search by keywords, ministry, or grant name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-14 text-lg"
                />
              </div>

              {/* Filters */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Grant Type</label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select grant type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="central">Central Government</SelectItem>
                      <SelectItem value="state">State & UT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="startup">Startup & Innovation</SelectItem>
                      <SelectItem value="agriculture">Agriculture</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full h-14 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
              >
                <Search className="h-5 w-5 mr-2" />
                Search Grants
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Grant Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Type</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose between Central Government grants for nationwide opportunities or State grants for region-specific
              funding
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {grantCategories.map((category) => {
              const IconComponent = category.icon
              const colorClasses = {
                blue: {
                  gradient: "from-blue-600 to-blue-700",
                  bg: "bg-blue-50",
                  text: "text-blue-600",
                  border: "border-blue-200",
                },
                green: {
                  gradient: "from-green-600 to-green-700",
                  bg: "bg-green-50",
                  text: "text-green-600",
                  border: "border-green-200",
                },
              }[category.color]

              return (
                <Card
                  key={category.type}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r ${colorClasses.gradient}`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>

                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{category.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-base">{category.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className={`p-4 rounded-lg ${colorClasses.bg}`}>
                        <div className="flex items-center space-x-2 mb-1">
                          <Target className={`h-4 w-4 ${colorClasses.text}`} />
                          <span className="text-sm font-medium text-gray-700">Total Grants</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{category.totalGrants.toLocaleString()}</div>
                      </div>

                      <div className={`p-4 rounded-lg ${colorClasses.bg}`}>
                        <div className="flex items-center space-x-2 mb-1">
                          <IndianRupee className={`h-4 w-4 ${colorClasses.text}`} />
                          <span className="text-sm font-medium text-gray-700">Avg Amount</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{category.avgAmount}</div>
                      </div>
                    </div>

                    {/* Categories */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Popular Categories:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {category.categories.map((cat, index) => (
                          <Badge key={index} variant="secondary" className="justify-start text-xs">
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90`} asChild>
                      <Link href={category.type === "central" ? "/central-grants" : "/state-grants"}>
                        Explore {category.title.split(" ")[0]} Grants
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Grants */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Grants</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Popular grants with high success rates and active applications
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredGrants.map((grant) => (
              <Card key={grant.id} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      className={grant.type === "Central" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}
                    >
                      {grant.type}
                    </Badge>
                    <Badge className="bg-green-100 text-green-700">{grant.status}</Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 leading-tight">{grant.title}</CardTitle>
                  <p className="text-sm text-gray-600">{grant.ministry}</p>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amount:</span>
                      <span className="font-semibold">{grant.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Deadline:</span>
                      <span className="font-semibold">{grant.deadline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Applicants:</span>
                      <span className="font-semibold">{grant.applicants.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/login">
                View All Grants
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2,000+</div>
              <div className="text-gray-600">Total Grants</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">28</div>
              <div className="text-gray-600">States Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">75%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">10K+</div>
              <div className="text-gray-600">Happy Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Grant Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands who have successfully found and applied for government grants through our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/login">Start Exploring</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <Link href="/about">Learn More</Link>
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
                  <Users className="h-4 w-4" />
                  <span>info@grantsindia.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
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
