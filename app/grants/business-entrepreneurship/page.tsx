"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, ArrowLeft, MapPin, Phone, Mail, Building2, ExternalLink } from "lucide-react"
import Link from "next/link"

const businessGrants = [
  {
    id: 1,
    serialNo: "BUS-001",
    title: "Startup India Seed Fund Scheme",
    fundingRange: "₹20 Lakhs - ₹5 Crores",
    ministry: "Ministry of Commerce & Industry",
    district: "Bangalore Urban",
    state: "Karnataka",
    contactNumber: "+91-80-2234-5678",
    email: "startup.bangalore@gov.in",
    description:
      "Financial support to startups for proof of concept, prototype development, product trials, market entry and commercialization activities.",
    applyLink: "/apply/bus-001",
  },
  {
    id: 2,
    serialNo: "BUS-002",
    title: "MSME Technology Upgradation Scheme (CLCS-TUS)",
    fundingRange: "₹1 Crore - ₹10 Crores",
    ministry: "Ministry of Micro, Small & Medium Enterprises",
    district: "Pune",
    state: "Maharashtra",
    contactNumber: "+91-20-2567-8901",
    email: "msme.pune@gov.in",
    description:
      "Credit linked capital subsidy for technology upgradation of micro, small and medium enterprises to enhance productivity and competitiveness.",
    applyLink: "/apply/bus-002",
  },
  {
    id: 3,
    serialNo: "BUS-003",
    title: "Stand-Up India Scheme for SC/ST/Women Entrepreneurs",
    fundingRange: "₹10 Lakhs - ₹1 Crore",
    ministry: "Ministry of Finance",
    district: "Ahmedabad",
    state: "Gujarat",
    contactNumber: "+91-79-2634-5678",
    email: "standup.ahmedabad@gov.in",
    description:
      "Bank loans for setting up greenfield enterprises by Scheduled Caste, Scheduled Tribe and Women entrepreneurs in manufacturing, services or trading sector.",
    applyLink: "/apply/bus-003",
  },
  {
    id: 4,
    serialNo: "BUS-004",
    title: "Prime Minister's Employment Generation Programme (PMEGP)",
    fundingRange: "₹25 Lakhs - ₹2 Crores",
    ministry: "Ministry of Micro, Small & Medium Enterprises",
    district: "Hyderabad",
    state: "Telangana",
    contactNumber: "+91-40-2345-6789",
    email: "pmegp.hyderabad@gov.in",
    description:
      "Credit linked subsidy programme for generating self-employment opportunities through establishment of micro enterprises in non-farm sector.",
    applyLink: "/apply/bus-004",
  },
  {
    id: 5,
    serialNo: "BUS-005",
    title: "Mudra Yojana - Shishu/Kishore/Tarun Loans",
    fundingRange: "₹50,000 - ₹10 Lakhs",
    ministry: "Ministry of Finance",
    district: "Chennai",
    state: "Tamil Nadu",
    contactNumber: "+91-44-2876-5432",
    email: "mudra.chennai@gov.in",
    description:
      "Collateral-free loans to micro and small business enterprises and to individuals to help them establish or expand their business activities.",
    applyLink: "/apply/bus-005",
  },
]

const states = ["All States", "Karnataka", "Maharashtra", "Gujarat", "Telangana", "Tamil Nadu"]
const districts = ["All Districts", "Bangalore Urban", "Pune", "Ahmedabad", "Hyderabad", "Chennai"]

export default function BusinessEntrepreneurshipGrantsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedState, setSelectedState] = useState("All States")
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts")

  const filteredGrants = businessGrants.filter((grant) => {
    const matchesSearch =
      grant.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grant.ministry.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grant.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grant.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grant.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesState = selectedState === "All States" || grant.state === selectedState
    const matchesDistrict = selectedDistrict === "All Districts" || grant.district === selectedDistrict

    return matchesSearch && matchesState && matchesDistrict
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Business & Entrepreneurship Grants</h1>
              <p className="text-gray-600">Startup funding, MSME support, and business development opportunities</p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search grants by title, ministry, district, state..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger className="w-full lg:w-48 h-12">
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
              <SelectTrigger className="w-full lg:w-48 h-12">
                <SelectValue placeholder="Select District" />
              </SelectTrigger>
              <SelectContent>
                {districts.map((district) => (
                  <SelectItem key={district} value={district}>
                    {district}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredGrants.length} of {businessGrants.length} grants
            {selectedState !== "All States" && ` in ${selectedState}`}
            {selectedDistrict !== "All Districts" && ` - ${selectedDistrict}`}
          </p>
        </div>

        {/* Grants Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {filteredGrants.map((grant) => (
            <Card
              key={grant.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className="text-xs font-mono bg-blue-50 text-blue-700 border-blue-200">
                    {grant.serialNo}
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-700">Business & Entrepreneurship</Badge>
                </div>

                <CardTitle className="text-lg font-bold text-gray-900 leading-tight mb-2">{grant.title}</CardTitle>

                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Building2 className="h-4 w-4 mr-2" />
                  {grant.ministry}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 leading-relaxed">{grant.description}</CardDescription>

                {/* Grant Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Funding Range
                      </label>
                      <p className="text-sm font-semibold text-gray-900">{grant.fundingRange}</p>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Location</label>
                      <div className="flex items-center text-sm text-gray-900">
                        <MapPin className="h-3 w-3 mr-1" />
                        {grant.district}, {grant.state}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Contact</label>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm text-gray-900">
                          <Phone className="h-3 w-3 mr-1" />
                          {grant.contactNumber}
                        </div>
                        <div className="flex items-center text-sm text-gray-900">
                          <Mail className="h-3 w-3 mr-1" />
                          {grant.email}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    asChild
                  >
                    <Link href={grant.applyLink}>Apply Now</Link>
                  </Button>
                  <Button variant="outline" size="sm" className="px-4">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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
                setSelectedState("All States")
                setSelectedDistrict("All Districts")
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredGrants.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Load More Grants
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
