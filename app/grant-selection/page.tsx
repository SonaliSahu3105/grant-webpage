"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, MapPin, ArrowRight, Users, TrendingUp, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const grantTypes = [
  {
    id: "central",
    title: "Central Government Grants",
    description: "Access nationwide funding opportunities from various Central Government ministries and departments",
    icon: Building2,
    stats: {
      totalGrants: "1,200+",
      avgAmount: "₹25 Lakhs",
      successRate: "68%",
      processingTime: "45-90 days",
    },
    highlights: [
      "Higher funding amounts",
      "Nationwide eligibility",
      "Standardized processes",
      "Multiple sectors covered",
      "Research & innovation focus",
    ],
    popularCategories: [
      "Startup India Scheme",
      "MSME Development",
      "Digital India Initiative",
      "Skill Development Programs",
      "Research & Development",
    ],
    color: "blue",
  },
  {
    id: "state",
    title: "State & UT Grants",
    description: "Discover region-specific funding opportunities tailored to local development needs and priorities",
    icon: MapPin,
    stats: {
      totalGrants: "800+",
      avgAmount: "₹12 Lakhs",
      successRate: "74%",
      processingTime: "30-60 days",
    },
    highlights: [
      "Faster processing times",
      "Local priority sectors",
      "Regional language support",
      "Community-focused programs",
      "State-specific benefits",
    ],
    popularCategories: [
      "Agriculture & Farming",
      "Women Entrepreneurship",
      "Rural Development",
      "Tourism Promotion",
      "Industrial Development",
    ],
    color: "green",
  },
]

export default function GrantSelectionPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSelection = async (typeId: string) => {
    setSelectedType(typeId)
    setIsLoading(true)

    // Simulate navigation delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (typeId === "central") {
      router.push("/central-grants")
    } else {
      router.push("/state-grants")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Back Navigation */}
        <Link
          href="/subscription"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Subscription
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">Choose Your Path</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Which Grants Interest You Most?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select your preferred grant type to get personalized recommendations and streamlined access to relevant
            funding opportunities
          </p>
        </div>

        {/* Grant Type Cards */}
        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          {grantTypes.map((type) => {
            const IconComponent = type.icon
            const isSelected = selectedType === type.id
            const colorClasses = {
              blue: {
                gradient: "from-blue-600 to-blue-700",
                bg: "bg-blue-50",
                text: "text-blue-600",
                border: "border-blue-200",
                badge: "bg-blue-100 text-blue-700",
              },
              green: {
                gradient: "from-green-600 to-green-700",
                bg: "bg-green-50",
                text: "text-green-600",
                border: "border-green-200",
                badge: "bg-green-100 text-green-700",
              },
            }[type.color]

            return (
              <Card
                key={type.id}
                className={`relative transition-all duration-300 hover:shadow-xl cursor-pointer border-0 shadow-lg ${
                  isSelected ? "ring-2 ring-offset-2 ring-blue-500 scale-105" : "hover:scale-102"
                }`}
                onClick={() => !isLoading && handleSelection(type.id)}
              >
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r ${colorClasses.gradient}`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <ArrowRight
                      className={`h-6 w-6 transition-transform ${
                        isSelected ? "translate-x-1 text-blue-600" : "text-gray-400"
                      }`}
                    />
                  </div>

                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{type.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {type.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`p-3 rounded-lg ${colorClasses.bg}`}>
                      <div className="flex items-center space-x-2 mb-1">
                        <Users className={`h-4 w-4 ${colorClasses.text}`} />
                        <span className="text-sm font-medium text-gray-700">Total Grants</span>
                      </div>
                      <div className="text-xl font-bold text-gray-900">{type.stats.totalGrants}</div>
                    </div>

                    <div className={`p-3 rounded-lg ${colorClasses.bg}`}>
                      <div className="flex items-center space-x-2 mb-1">
                        <TrendingUp className={`h-4 w-4 ${colorClasses.text}`} />
                        <span className="text-sm font-medium text-gray-700">Avg Amount</span>
                      </div>
                      <div className="text-xl font-bold text-gray-900">{type.stats.avgAmount}</div>
                    </div>

                    <div className={`p-3 rounded-lg ${colorClasses.bg}`}>
                      <div className="flex items-center space-x-2 mb-1">
                        <TrendingUp className={`h-4 w-4 ${colorClasses.text}`} />
                        <span className="text-sm font-medium text-gray-700">Success Rate</span>
                      </div>
                      <div className="text-xl font-bold text-gray-900">{type.stats.successRate}</div>
                    </div>

                    <div className={`p-3 rounded-lg ${colorClasses.bg}`}>
                      <div className="flex items-center space-x-2 mb-1">
                        <Clock className={`h-4 w-4 ${colorClasses.text}`} />
                        <span className="text-sm font-medium text-gray-700">Processing</span>
                      </div>
                      <div className="text-xl font-bold text-gray-900">{type.stats.processingTime}</div>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                    <div className="space-y-2">
                      {type.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${colorClasses.gradient}`} />
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Popular Categories */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Popular Categories:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.popularCategories.slice(0, 3).map((category, index) => (
                        <Badge key={index} className={colorClasses.badge}>
                          {category}
                        </Badge>
                      ))}
                      <Badge variant="outline" className="text-gray-600">
                        +{type.popularCategories.length - 3} more
                      </Badge>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button
                    className={`w-full h-12 bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 transition-opacity`}
                    disabled={isLoading}
                  >
                    {isLoading && selectedType === type.id ? (
                      "Loading..."
                    ) : (
                      <>
                        Explore {type.title.split(" ")[0]} Grants
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-0 shadow-md bg-gradient-to-r from-gray-50 to-gray-100">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Not sure which to choose?</h3>
              <p className="text-gray-600 mb-4">
                You can always explore both types later. Start with the one that matches your immediate needs.
              </p>
              <Button variant="outline" className="border-gray-300 hover:bg-white">
                View All Grant Categories
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
