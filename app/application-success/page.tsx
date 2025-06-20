"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Download, Mail, Clock, ArrowRight, Home } from "lucide-react"
import Link from "next/link"

export default function ApplicationSuccessPage() {
  const applicationId = "GA-2024-SI-001234"
  const submissionDate = new Date().toLocaleDateString("en-IN")
  const expectedResponse = "15-30 business days"

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your grant application has been submitted and is now under review. We'll keep you updated on the progress.
          </p>
        </div>

        {/* Application Details Card */}
        <Card className="border-0 shadow-lg mb-8">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
            <CardTitle className="flex items-center justify-between">
              <span>Application Details</span>
              <Badge className="bg-green-100 text-green-700">Submitted</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Application ID</h4>
                <p className="text-lg font-mono text-blue-600">{applicationId}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Submission Date</h4>
                <p className="text-gray-700">{submissionDate}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Grant Scheme</h4>
                <p className="text-gray-700">Startup India Seed Fund Scheme</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Expected Response</h4>
                <p className="text-gray-700">{expectedResponse}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle>What Happens Next?</CardTitle>
            <CardDescription>Here's what you can expect in the coming weeks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Initial Review</h4>
                  <p className="text-gray-600 text-sm">
                    Your application will undergo an initial completeness check within 3-5 business days.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Technical Evaluation</h4>
                  <p className="text-gray-600 text-sm">
                    Subject matter experts will evaluate your project proposal and technical feasibility.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Final Decision</h4>
                  <p className="text-gray-600 text-sm">
                    You'll receive the final decision via email and SMS within 15-30 business days.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Information */}
        <Card className="border-0 shadow-lg mb-8 bg-yellow-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-yellow-600" />
              <span>Important Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-yellow-600">•</span>
                <span>Keep your application ID safe for future reference</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-600">•</span>
                <span>Check your email regularly for updates and additional document requests</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-600">•</span>
                <span>You can track your application status using the application ID</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-600">•</span>
                <span>Contact support if you don't hear back within the expected timeframe</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Download Application Copy</span>
          </Button>

          <Button variant="outline" className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>Email Application Details</span>
          </Button>

          <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 flex items-center space-x-2">
            <span>Track Application Status</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Bottom Navigation */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to apply for more grants?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/central-grants" className="flex items-center space-x-2">
                <span>Browse Central Grants</span>
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="/state-grants" className="flex items-center space-x-2">
                <span>Browse State Grants</span>
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="/" className="flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
