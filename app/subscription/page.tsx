"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Check, Star, Crown, Building2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const plans = [
  {
    id: "free",
    name: "Free Explorer",
    description: "Perfect for getting started with grant discovery",
    monthlyPrice: 0,
    yearlyPrice: 0,
    icon: Star,
    popular: false,
    features: [
      "Access to 100 grants per month",
      "Basic search and filters",
      "Email notifications",
      "Community support",
      "Mobile app access",
    ],
    limitations: ["Limited to 5 grant applications tracking", "Basic export options", "Standard support response time"],
  },
  {
    id: "premium",
    name: "Premium Researcher",
    description: "Ideal for serious grant seekers and small organizations",
    monthlyPrice: 2999,
    yearlyPrice: 29990,
    icon: Crown,
    popular: true,
    features: [
      "Unlimited grant access",
      "Advanced search & AI matching",
      "Priority email & phone support",
      "Grant deadline reminders",
      "Application tracking dashboard",
      "Export to Excel/PDF",
      "Custom grant alerts",
      "Success rate analytics",
    ],
    limitations: [],
  },
  {
    id: "enterprise",
    name: "Enterprise Solution",
    description: "Comprehensive solution for large organizations and consultants",
    monthlyPrice: 9999,
    yearlyPrice: 99990,
    icon: Building2,
    popular: false,
    features: [
      "Everything in Premium",
      "Dedicated account manager",
      "Custom integrations",
      "Team collaboration tools",
      "White-label options",
      "API access",
      "Advanced reporting",
      "Training sessions",
      "Priority feature requests",
    ],
    limitations: [],
  },
]

export default function SubscriptionPage() {
  const [isYearly, setIsYearly] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSelectPlan = async (planId: string) => {
    setSelectedPlan(planId)
    setIsLoading(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    router.push("/grant-selection")
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Back Navigation */}
        <Link
          href="/login"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Login
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">Choose Your Plan</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Unlock Your Grant Potential</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan to access thousands of government grants and accelerate your funding journey
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-medium ${!isYearly ? "text-gray-900" : "text-gray-500"}`}>Monthly</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} className="data-[state=checked]:bg-green-600" />
            <span className={`text-sm font-medium ${isYearly ? "text-gray-900" : "text-gray-500"}`}>Yearly</span>
            <Badge className="bg-green-100 text-green-700 ml-2">Save 17%</Badge>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 mb-12">
          {plans.map((plan) => {
            const IconComponent = plan.icon
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
            const isSelected = selectedPlan === plan.id

            return (
              <Card
                key={plan.id}
                className={`relative transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? "border-2 border-blue-500 shadow-lg scale-105" : "border-0 shadow-md hover:shadow-lg"
                } ${isSelected ? "ring-2 ring-blue-500" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-600 to-green-600"
                          : "bg-gradient-to-r from-gray-100 to-gray-200"
                      }`}
                    >
                      <IconComponent className={`h-8 w-8 ${plan.popular ? "text-white" : "text-gray-600"}`} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">{plan.description}</CardDescription>

                  <div className="mt-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">
                        {price === 0 ? "Free" : formatPrice(price)}
                      </span>
                      {price > 0 && <span className="text-gray-600 ml-2">/{isYearly ? "year" : "month"}</span>}
                    </div>
                    {isYearly && price > 0 && (
                      <p className="text-sm text-green-600 mt-1">
                        Save {formatPrice(plan.monthlyPrice * 12 - plan.yearlyPrice)} annually
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <Button
                    onClick={() => handleSelectPlan(plan.id)}
                    disabled={isLoading && selectedPlan === plan.id}
                    className={`w-full mb-6 h-11 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    {isLoading && selectedPlan === plan.id
                      ? "Processing..."
                      : plan.id === "free"
                        ? "Start Free"
                        : "Choose Plan"}
                  </Button>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm">What's included:</h4>
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto text-left">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I change my plan later?</h4>
              <p className="text-gray-600 text-sm">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing
                cycle.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Is there a free trial?</h4>
              <p className="text-gray-600 text-sm">
                Our Free Explorer plan gives you access to basic features. Premium plans come with a 14-day money-back
                guarantee.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600 text-sm">
                We accept all major credit cards, UPI, net banking, and digital wallets for Indian customers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer discounts for nonprofits?</h4>
              <p className="text-gray-600 text-sm">
                Yes! Registered nonprofits and educational institutions are eligible for special pricing. Contact us for
                details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
