"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, ArrowLeft, MapPin, Phone, Mail, Building2, ExternalLink } from "lucide-react"
import Link from "next/link"

const agricultureGrants = [
  {
    id: 1,
    serialNo: "AGR-001",
    title: "PM-KISAN Farmer Producer Organizations Support Scheme",
    fundingRange: "₹15 Lakhs - ₹2 Crores",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    district: "Nashik",
    state: "Maharashtra",
    contactNumber: "+91-2253-245678",
    email: "pmkisan.nashik@gov.in",
    description:
      "Financial support for formation and promotion of Farmer Producer Organizations (FPOs) for collective farming, value addition, and market linkage activities.",
    applyLink: "/apply/agr-001",
  },
  {
    id: 2,
    serialNo: "AGR-002",
    title: "National Mission for Sustainable Agriculture - Climate Resilient Agriculture",
    fundingRange: "₹50 Lakhs - ₹5 Crores",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    district: "Ludhiana",
    state: "Punjab",
    contactNumber: "+91-161-2401234",
    email: "nmsa.ludhiana@gov.in",
    description:
      "Support for climate-resilient agricultural practices, water conservation, soil health management, and adoption of climate-smart technologies.",
    applyLink: "/apply/agr-002",
  },
  {
    id: 3,
    serialNo: "AGR-003",
    title: "Rural Infrastructure Development Fund (RIDF)",
    fundingRange: "₹1 Crore - ₹25 Crores",
    ministry: "Ministry of Rural Development",
    district: "Warangal",
    state: "Telangana",
    contactNumber: "+91-870-2459876",
    email: "ridf.warangal@gov.in",
    description:
      "Infrastructure development in rural areas including irrigation, rural roads, bridges, and market infrastructure to boost agricultural productivity.",
    applyLink: "/apply/agr-003",
  },
  {
    id: 4,
    serialNo: "AGR-004",
    title: "Pradhan Mantri Krishi Sinchai Yojana - Micro Irrigation",
    fundingRange: "₹25 Lakhs - ₹3 Crores",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    district: "Jaipur",
    state: "Rajasthan",
    contactNumber: "+91-141-2385467",
    email: "pmksy.jaipur@gov.in",
    description:
      "Promoting water use efficiency through micro-irrigation systems including drip and sprinkler irrigation for sustainable water management.",
    applyLink: "/apply/agr-004",
  },
  {
    id: 5,
    serialNo: "AGR-005",
    title: "National Livestock Mission - Entrepreneurship Development",
    fundingRange: "₹10 Lakhs - ₹1 Crore",
    ministry: "Ministry of Fisheries, Animal Husbandry & Dairying",
    district: "Anand",
    state: "Gujarat",
    contactNumber: "+91-2692-245789",
    email: "nlm.anand@gov.in",
    description:
      "Support for livestock-based entrepreneurship development, breed improvement, feed and fodder development, and dairy processing units.",
    applyLink: "/apply/agr-005",
  },
  {
    id: 6,
    serialNo: "AGR-006",
    title: "Rashtriya Gokul Mission - Indigenous Cattle Development",
    fundingRange: "₹20 Lakhs - ₹2 Crores",
    ministry: "Ministry of Fisheries, Animal Husbandry & Dairying",
    district: "Mathura",
    state: "Uttar Pradesh",
    contactNumber: "+91-565-2401567",
    email: "rgm.mathura@gov.in",
    description:
      "Conservation and development of indigenous cattle breeds, establishment of Gokul Grams, and promotion of natural farming practices.",
    applyLink: "/apply/agr-006",
  },
]

const states = ["All States", "Maharashtra", "Punjab", "Telangana", "Rajasthan", "Gujarat", "Uttar Pradesh"]
const districts = ["All Districts", "Nashik", "Ludhiana", "Warangal", "Jaipur", "Anand", "Mathura"]

export default function AgricultureRuralGrantsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedState, setSelectedState] = useState("All States")
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts")

  const filteredGrants = agricultureGrants.filter((grant) => {
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Agriculture & Rural Development Grants</h1>
              <p className="text-gray-600">
                Discover funding opportunities for farming, rural infrastructure, and agricultural innovation
              </p>
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
            Showing {filteredGrants.length} of {agricultureGrants.length} grants
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
                  <Badge variant="outline" className="text-xs font-mono bg-green-50 text-green-700 border-green-200">
                    {grant.serialNo}
                  </Badge>
                  <Badge className="bg-green-100 text-green-700">Agriculture & Rural</Badge>
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
                    className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
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
