"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, ArrowLeft, MapPin, Phone, Mail, Building2, ExternalLink } from "lucide-react"
import Link from "next/link"

const healthcareGrants = [
  {
    id: 1,
    serialNo: "HLT-001",
    title: "Ayushman Bharat Health Infrastructure Mission - District Hospital Upgradation",
    fundingRange: "₹5 Crores - ₹50 Crores",
    ministry: "Ministry of Health & Family Welfare",
    district: "Indore",
    state: "Madhya Pradesh",
    contactNumber: "+91-731-2234-5678",
    email: "abhim.indore@gov.in",
    description:
      "Strengthening healthcare infrastructure at district level including establishment of critical care units, diagnostic facilities, and medical equipment procurement.",
    applyLink: "/apply/hlt-001",
  },
  {
    id: 2,
    serialNo: "HLT-002",
    title: "National Health Mission - Community Health Centre Development",
    fundingRange: "₹2 Crores - ₹15 Crores",
    ministry: "Ministry of Health & Family Welfare",
    district: "Thiruvananthapuram",
    state: "Kerala",
    contactNumber: "+91-471-2345-6789",
    email: "nhm.trivandrum@gov.in",
    description:
      "Development and strengthening of Community Health Centres with focus on maternal health, child care, and emergency medical services in rural areas.",
    applyLink: "/apply/hlt-002",
  },
  {
    id: 3,
    serialNo: "HLT-003",
    title: "PM-JAY Pradhan Mantri Jan Arogya Yojana - Hospital Empanelment",
    fundingRange: "₹1 Crore - ₹10 Crores",
    ministry: "National Health Authority",
    district: "Patna",
    state: "Bihar",
    contactNumber: "+91-612-2567-8901",
    email: "pmjay.patna@gov.in",
    description:
      "Support for private hospitals to get empaneled under PM-JAY scheme, including infrastructure upgradation and quality certification requirements.",
    applyLink: "/apply/hlt-003",
  },
  {
    id: 4,
    serialNo: "HLT-004",
    title: "National Programme for Prevention & Control of Cancer - Oncology Centre",
    fundingRange: "₹10 Crores - ₹100 Crores",
    ministry: "Ministry of Health & Family Welfare",
    district: "Guwahati",
    state: "Assam",
    contactNumber: "+91-361-2678-9012",
    email: "npcc.guwahati@gov.in",
    description:
      "Establishment of comprehensive cancer care facilities including early detection, treatment infrastructure, and palliative care services.",
    applyLink: "/apply/hlt-004",
  },
]

const states = ["All States", "Madhya Pradesh", "Kerala", "Bihar", "Assam"]
const districts = ["All Districts", "Indore", "Thiruvananthapuram", "Patna", "Guwahati"]

export default function HealthcareWellnessGrantsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedState, setSelectedState] = useState("All States")
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts")

  const filteredGrants = healthcareGrants.filter((grant) => {
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Healthcare & Wellness Grants</h1>
              <p className="text-gray-600">Medical research, healthcare infrastructure, and public health funding</p>
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

            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full lg:w-48 h-12 px-3 border border-gray-300 rounded-md bg-white"
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>

            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full lg:w-48 h-12 px-3 border border-gray-300 rounded-md bg-white"
            >
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredGrants.length} of {healthcareGrants.length} grants
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
                  <Badge variant="outline" className="text-xs font-mono bg-red-50 text-red-700 border-red-200">
                    {grant.serialNo}
                  </Badge>
                  <Badge className="bg-red-100 text-red-700">Healthcare & Wellness</Badge>
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
                    className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
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
