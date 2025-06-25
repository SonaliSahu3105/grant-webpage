"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, ArrowLeft, MapPin, Phone, Mail, Building2, ExternalLink } from "lucide-react"
import Link from "next/link"

const educationGrants = [
  {
    id: 1,
    serialNo: "EDU-001",
    title: "Rashtriya Uchchatar Shiksha Abhiyan (RUSA) - Infrastructure Development",
    fundingRange: "₹2 Crores - ₹50 Crores",
    ministry: "Ministry of Education",
    district: "New Delhi",
    state: "Delhi",
    contactNumber: "+91-11-2338-5467",
    email: "rusa.delhi@gov.in",
    description:
      "Development of higher education infrastructure including construction of classrooms, laboratories, libraries, hostels and digital infrastructure in universities and colleges.",
    applyLink: "/apply/edu-001",
  },
  {
    id: 2,
    serialNo: "EDU-002",
    title: "Science and Engineering Research Board (SERB) - Core Research Grant",
    fundingRange: "₹15 Lakhs - ₹1 Crore",
    ministry: "Department of Science & Technology",
    district: "Kolkata",
    state: "West Bengal",
    contactNumber: "+91-33-2287-4561",
    email: "serb.kolkata@gov.in",
    description:
      "Support for fundamental research in science and engineering by individual investigators or small groups in universities, colleges and R&D institutions.",
    applyLink: "/apply/edu-002",
  },
  {
    id: 3,
    serialNo: "EDU-003",
    title: "Samagra Shiksha Abhiyan - School Infrastructure & Quality Enhancement",
    fundingRange: "₹50 Lakhs - ₹5 Crores",
    ministry: "Ministry of Education",
    district: "Lucknow",
    state: "Uttar Pradesh",
    contactNumber: "+91-522-2234-7890",
    email: "ssa.lucknow@gov.in",
    description:
      "Comprehensive programme for school education covering pre-school to class XII, focusing on infrastructure development, teacher training and quality enhancement.",
    applyLink: "/apply/edu-003",
  },
  {
    id: 4,
    serialNo: "EDU-004",
    title: "National Mission on Education through ICT (NMEICT)",
    fundingRange: "₹25 Lakhs - ₹3 Crores",
    ministry: "Ministry of Education",
    district: "Mumbai",
    state: "Maharashtra",
    contactNumber: "+91-22-2672-3456",
    email: "nmeict.mumbai@gov.in",
    description:
      "Leveraging ICT for teaching and learning process in higher education institutions, development of e-content and providing connectivity to institutions.",
    applyLink: "/apply/edu-004",
  },
  {
    id: 5,
    serialNo: "EDU-005",
    title: "Impacting Research Innovation and Technology (IMPRINT) - IIT/IISc Collaboration",
    fundingRange: "₹1 Crore - ₹10 Crores",
    ministry: "Ministry of Education & Ministry of Human Resource Development",
    district: "Chennai",
    state: "Tamil Nadu",
    contactNumber: "+91-44-2257-8901",
    email: "imprint.chennai@gov.in",
    description:
      "Technology development and innovation in areas that are of relevance to India, involving IITs, IISc and other technical institutions with industry participation.",
    applyLink: "/apply/edu-005",
  },
]

const states = ["All States", "Delhi", "West Bengal", "Uttar Pradesh", "Maharashtra", "Tamil Nadu"]
const districts = ["All Districts", "New Delhi", "Kolkata", "Lucknow", "Mumbai", "Chennai"]

export default function EducationResearchGrantsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedState, setSelectedState] = useState("All States")
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts")

  const filteredGrants = educationGrants.filter((grant) => {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Education & Research Grants</h1>
              <p className="text-gray-600">
                Educational institutions, research projects, and skill development funding
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
            Showing {filteredGrants.length} of {educationGrants.length} grants
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
                  <Badge variant="outline" className="text-xs font-mono bg-purple-50 text-purple-700 border-purple-200">
                    {grant.serialNo}
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-700">Education & Research</Badge>
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
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
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
