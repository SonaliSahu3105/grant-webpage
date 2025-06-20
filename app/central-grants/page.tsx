"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, ArrowLeft, Calendar, IndianRupee, Building2, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"

const centralGrants = [
  {
    id: 1,
    title: "Startup India Seed Fund Scheme",
    ministry: "Ministry of Commerce & Industry",
    amount: "₹20 Lakhs - ₹5 Crores",
    deadline: "2024-08-15",
    category: "Startup & Innovation",
    description:
      "Financial support to startups for proof of concept, prototype development, product trials, market entry and commercialization.",
    eligibility: "DPIIT recognized startups incorporated not more than 2 years ago",
    status: "Open",
    applicants: 1250,
  },
  {
    id: 2,
    title: "MSME Technology Upgradation Scheme",
    ministry: "Ministry of MSME",
    amount: "₹1 Crore - ₹10 Crores",
    deadline: "2024-09-30",
    category: "Manufacturing",
    description: "Credit linked capital subsidy for technology upgradation of micro, small and medium enterprises.",
    eligibility: "Existing MSMEs with valid Udyam Registration",
    status: "Open",
    applicants: 890,
  },
  {
    id: 3,
    title: "Digital India Land Records Modernization",
    ministry: "Ministry of Rural Development",
    amount: "₹50 Lakhs - ₹2 Crores",
    deadline: "2024-07-20",
    category: "Digital Infrastructure",
    description:
      "Computerization of land records, survey and settlement operations and establishment of modern record rooms.",
    eligibility: "State Governments and Union Territory Administrations",
    status: "Closing Soon",
    applicants: 156,
  },
  {
    id: 4,
    title: "National Education Mission - Infrastructure",
    ministry: "Ministry of Education",
    amount: "₹2 Crores - ₹50 Crores",
    deadline: "2024-10-15",
    category: "Education",
    description:
      "Development of school infrastructure including construction of classrooms, laboratories, libraries and digital infrastructure.",
    eligibility: "Government and aided schools, higher education institutions",
    status: "Open",
    applicants: 2340,
  },
  {
    id: 5,
    title: "Ayushman Bharat Health Infrastructure",
    ministry: "Ministry of Health & Family Welfare",
    amount: "₹5 Crores - ₹100 Crores",
    deadline: "2024-11-30",
    category: "Healthcare",
    description:
      "Strengthening healthcare infrastructure at district and block levels including critical care facilities.",
    eligibility: "State Health Departments, Medical Colleges, Healthcare Institutions",
    status: "Open",
    applicants: 567,
  },
  {
    id: 6,
    title: "PM-KISAN Farmer Producer Organizations",
    ministry: "Ministry of Agriculture",
    amount: "₹15 Lakhs - ₹2 Crores",
    deadline: "2024-08-31",
    category: "Agriculture",
    description:
      "Financial support for formation and promotion of Farmer Producer Organizations (FPOs) for collective farming.",
    eligibility: "Groups of farmers, agricultural cooperatives, self-help groups",
    status: "Open",
    applicants: 1890,
  },
]

export default function CentralGrantsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = [
    "All",
    "Startup & Innovation",
    "Manufacturing",
    "Digital Infrastructure",
    "Education",
    "Healthcare",
    "Agriculture",
  ]

  const filteredGrants = centralGrants.filter((grant) => {
    const matchesSearch =
      grant.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grant.ministry.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grant.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || grant.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-700"
      case "Closing Soon":
        return "bg-orange-100 text-orange-700"
      case "Closed":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getDaysUntilDeadline = (deadline: string) => {
    const today = new Date()
    const deadlineDate = new Date(deadline)
    const diffTime = deadlineDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

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
              <h1 className="text-3xl font-bold text-gray-900">Central Government Grants</h1>
              <p className="text-gray-600">Discover nationwide funding opportunities from various ministries</p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search grants by title, ministry, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Button variant="outline" className="h-12 px-6">
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-gray-50"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredGrants.length} of {centralGrants.length} grants
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Grants Grid */}
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filteredGrants.map((grant) => {
            const daysLeft = getDaysUntilDeadline(grant.deadline)

            return (
              <Card
                key={grant.id}
                className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getStatusColor(grant.status)}>{grant.status}</Badge>
                    <Badge variant="outline" className="text-xs">
                      {grant.category}
                    </Badge>
                  </div>

                  <CardTitle className="text-lg font-bold text-gray-900 leading-tight mb-2">{grant.title}</CardTitle>

                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Building2 className="h-4 w-4 mr-1" />
                    {grant.ministry}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">{grant.description}</CardDescription>

                  {/* Grant Details */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <IndianRupee className="h-4 w-4 mr-1" />
                        <span>Funding Amount</span>
                      </div>
                      <span className="font-semibold text-gray-900">{grant.amount}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Deadline</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">
                          {new Date(grant.deadline).toLocaleDateString("en-IN")}
                        </div>
                        <div className={`text-xs ${daysLeft <= 7 ? "text-red-600" : "text-gray-500"}`}>
                          {daysLeft > 0 ? `${daysLeft} days left` : "Deadline passed"}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Applicants</span>
                      </div>
                      <span className="font-semibold text-gray-900">{grant.applicants.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Eligibility */}
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Eligibility:</h4>
                    <p className="text-sm text-gray-600">{grant.eligibility}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                      asChild
                    >
                      <Link href={`/apply/${grant.id}`}>Apply Now</Link>
                    </Button>
                    <Button variant="outline" size="sm" className="px-3">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Load More */}
        {filteredGrants.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Load More Grants
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredGrants.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No grants found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search terms or filters to find relevant grants.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
