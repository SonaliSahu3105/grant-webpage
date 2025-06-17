"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, ArrowLeft, MapPin, Users, ChevronRight, TrendingUp } from "lucide-react"
import Link from "next/link"

const stateData = [
  {
    state: "Maharashtra",
    contributor: "Amit Desai",
    totalGrants: 89,
    activeGrants: 67,
    avgAmount: "₹8.5 Lakhs",
    successRate: "76%",
    popularCategories: ["Industrial Development", "Women Entrepreneurship", "Agriculture", "Tourism"],
    recentGrants: [
      "Maharashtra State Innovation Society Grant",
      "Agri-Business Development Scheme",
      "Women Self-Help Group Funding",
    ],
  },
  {
    state: "Karnataka",
    contributor: "Lakshmi Rao",
    totalGrants: 72,
    activeGrants: 54,
    avgAmount: "₹12.3 Lakhs",
    successRate: "82%",
    popularCategories: ["IT & Startups", "Biotechnology", "Renewable Energy", "Skill Development"],
    recentGrants: ["Karnataka Startup Policy Grant", "Biotech Innovation Fund", "Solar Energy Subsidy Scheme"],
  },
  {
    state: "Uttar Pradesh",
    contributor: "Neha Agarwal",
    totalGrants: 76,
    activeGrants: 58,
    avgAmount: "₹6.8 Lakhs",
    successRate: "71%",
    popularCategories: ["MSME Development", "Handicrafts", "Food Processing", "Rural Development"],
    recentGrants: ["UP MSME Promotion Scheme", "Handloom & Handicraft Support", "Food Processing Unit Grant"],
  },
  {
    state: "Delhi",
    contributor: "Vikash Singh",
    totalGrants: 67,
    activeGrants: 45,
    avgAmount: "₹15.2 Lakhs",
    successRate: "79%",
    popularCategories: ["Electric Vehicles", "Pollution Control", "Education", "Healthcare"],
    recentGrants: ["Delhi EV Policy Incentive", "Air Quality Improvement Grant", "Education Infrastructure Fund"],
  },
  {
    state: "Tamil Nadu",
    contributor: "Deepa Krishnan",
    totalGrants: 63,
    activeGrants: 48,
    avgAmount: "₹9.7 Lakhs",
    successRate: "74%",
    popularCategories: ["Textile Industry", "Marine Fisheries", "IT Services", "Manufacturing"],
    recentGrants: ["Tamil Nadu Textile Upgrade Scheme", "Fisheries Development Grant", "IT Corridor Expansion Fund"],
  },
  {
    state: "Gujarat",
    contributor: "Meera Shah",
    totalGrants: 54,
    activeGrants: 41,
    avgAmount: "₹11.4 Lakhs",
    successRate: "78%",
    popularCategories: ["Chemical Industry", "Ports & Logistics", "Solar Energy", "Dairy Development"],
    recentGrants: ["Gujarat Chemical Hub Grant", "Port Infrastructure Development", "Solar Park Incentive Scheme"],
  },
  {
    state: "West Bengal",
    contributor: "Sourav Das",
    totalGrants: 51,
    activeGrants: 39,
    avgAmount: "₹7.2 Lakhs",
    successRate: "73%",
    popularCategories: ["Jute & Textiles", "Tea Industry", "Fisheries", "Small Industries"],
    recentGrants: ["Jute Diversification Scheme", "Tea Garden Development Fund", "Fisheries Modernization Grant"],
  },
  {
    state: "Telangana",
    contributor: "Ravi Reddy",
    totalGrants: 48,
    activeGrants: 36,
    avgAmount: "₹10.8 Lakhs",
    successRate: "80%",
    popularCategories: ["IT & Pharma", "Biotechnology", "Aerospace", "Agriculture"],
    recentGrants: ["T-Hub Startup Grant", "Pharma Innovation Fund", "Aerospace Component Scheme"],
  },
]

export default function StateGrantsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedState, setSelectedState] = useState<string | null>(null)

  const filteredStates = stateData.filter(
    (state) =>
      state.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      state.contributor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      state.popularCategories.some((cat) => cat.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link
              href="/grant-selection"
              className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">State & UT Grants</h1>
              <p className="text-gray-600">Explore region-specific funding opportunities across India</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by state, contributor, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">28</div>
              <div className="text-gray-600">States & UTs</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">800+</div>
              <div className="text-gray-600">Total Grants</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">₹9.2L</div>
              <div className="text-gray-600">Avg Amount</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">75%</div>
              <div className="text-gray-600">Success Rate</div>
            </CardContent>
          </Card>
        </div>

        {/* States Grid */}
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filteredStates.map((state) => (
            <Card
              key={state.state}
              className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-xl font-bold text-gray-900">{state.state}</CardTitle>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-1" />
                  Curated by {state.contributor}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{state.totalGrants}</div>
                    <div className="text-xs text-gray-600">Total Grants</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{state.activeGrants}</div>
                    <div className="text-xs text-gray-600">Active Now</div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Avg Amount:</span>
                    <span className="font-semibold text-gray-900">{state.avgAmount}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Success Rate:</span>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="h-3 w-3 text-green-600" />
                      <span className="font-semibold text-green-600">{state.successRate}</span>
                    </div>
                  </div>
                </div>

                {/* Popular Categories */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Popular Categories:</h4>
                  <div className="flex flex-wrap gap-1">
                    {state.popularCategories.slice(0, 3).map((category, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        {category}
                      </Badge>
                    ))}
                    {state.popularCategories.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{state.popularCategories.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Recent Grants Preview */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Recent Grants:</h4>
                  <div className="space-y-1">
                    {state.recentGrants.slice(0, 2).map((grant, index) => (
                      <div key={index} className="text-xs text-gray-600 truncate">
                        • {grant}
                      </div>
                    ))}
                    <div className="text-xs text-blue-600 font-medium">
                      +{state.recentGrants.length - 2} more grants
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                  Explore {state.state} Grants
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredStates.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No states found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search terms to find relevant states.</p>
            <Button variant="outline" onClick={() => setSearchTerm("")}>
              Clear Search
            </Button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto border-0 shadow-md bg-gradient-to-r from-gray-50 to-gray-100">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Don't see your state?</h3>
              <p className="text-gray-600 mb-4">
                We're constantly adding new states and grants. Contact us to contribute or request specific state
                coverage.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline" className="border-gray-300 hover:bg-white">
                  Request State Coverage
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                  Become a Contributor
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
