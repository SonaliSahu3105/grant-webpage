"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  FileText,
  IndianRupee,
  Upload,
  CheckCircle,
  AlertCircle,
  Calendar,
  Target,
  Save,
} from "lucide-react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"

const steps = [
  { id: 1, title: "Organization Details", icon: Building2, description: "Basic information about your organization" },
  { id: 2, title: "Project Information", icon: Target, description: "Details about your proposed project" },
  { id: 3, title: "Financial Details", icon: IndianRupee, description: "Budget and funding requirements" },
  { id: 4, title: "Supporting Documents", icon: FileText, description: "Upload required documents" },
  { id: 5, title: "Review & Submit", icon: CheckCircle, description: "Review and submit your application" },
]

const grantDetails = {
  title: "Startup India Seed Fund Scheme",
  ministry: "Ministry of Commerce & Industry",
  amount: "₹20 Lakhs - ₹5 Crores",
  deadline: "2024-08-15",
  category: "Startup & Innovation",
}

export default function GrantApplicationPage() {
  const params = useParams()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    // Organization Details
    organizationName: "",
    organizationType: "",
    registrationNumber: "",
    panNumber: "",
    gstNumber: "",
    establishedYear: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    website: "",

    // Contact Details
    contactPersonName: "",
    designation: "",
    email: "",
    phone: "",
    alternatePhone: "",

    // Project Information
    projectTitle: "",
    projectDescription: "",
    projectObjectives: "",
    targetBeneficiaries: "",
    projectDuration: "",
    implementationTimeline: "",
    expectedOutcomes: "",

    // Financial Details
    totalProjectCost: "",
    grantAmountRequested: "",
    ownContribution: "",
    otherFunding: "",
    budgetBreakdown: "",

    // Supporting Documents
    documents: {
      registrationCertificate: null,
      panCard: null,
      auditedFinancials: null,
      projectProposal: null,
      budgetDocument: null,
      otherDocuments: null,
    },

    // Declarations
    declarationAccepted: false,
    termsAccepted: false,
  })

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsSubmitting(false)
    router.push("/application-success")
  }

  const progress = (currentStep / steps.length) * 100

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <OrganizationDetailsStep formData={formData} updateFormData={updateFormData} />
      case 2:
        return <ProjectInformationStep formData={formData} updateFormData={updateFormData} />
      case 3:
        return <FinancialDetailsStep formData={formData} updateFormData={updateFormData} />
      case 4:
        return <SupportingDocumentsStep formData={formData} updateFormData={updateFormData} />
      case 5:
        return <ReviewSubmitStep formData={formData} grantDetails={grantDetails} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/central-grants"
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Grants
          </Link>
          <Button variant="outline" className="flex items-center space-x-2">
            <Save className="h-4 w-4" />
            <span>Save Draft</span>
          </Button>
        </div>

        {/* Grant Info Banner */}
        <Card className="mb-8 border-0 shadow-md bg-gradient-to-r from-blue-50 to-green-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{grantDetails.title}</h1>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Building2 className="h-4 w-4 mr-1" />
                    {grantDetails.ministry}
                  </div>
                  <div className="flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    {grantDetails.amount}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Deadline: {new Date(grantDetails.deadline).toLocaleDateString("en-IN")}
                  </div>
                </div>
              </div>
              <Badge className="bg-blue-100 text-blue-700">{grantDetails.category}</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Application Progress</h2>
            <span className="text-sm text-gray-600">
              {currentStep} of {steps.length} steps
            </span>
          </div>
          <Progress value={progress} className="h-2 mb-4" />

          {/* Step Indicators */}
          <div className="flex justify-between">
            {steps.map((step) => {
              const IconComponent = step.icon
              const isActive = step.id === currentStep
              const isCompleted = step.id < currentStep

              return (
                <div key={step.id} className="flex flex-col items-center space-y-2">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                      isCompleted
                        ? "bg-green-600 border-green-600 text-white"
                        : isActive
                          ? "bg-blue-600 border-blue-600 text-white"
                          : "border-gray-300 text-gray-400"
                    }`}
                  >
                    {isCompleted ? <CheckCircle className="h-5 w-5" /> : <IconComponent className="h-5 w-5" />}
                  </div>
                  <div className="text-center">
                    <div className={`text-sm font-medium ${isActive ? "text-blue-600" : "text-gray-600"}`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-500 max-w-24 hidden md:block">{step.description}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Form Content */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              {React.createElement(steps[currentStep - 1].icon, { className: "h-5 w-5 text-blue-600" })}
              <span>{steps[currentStep - 1].title}</span>
            </CardTitle>
            <CardDescription>{steps[currentStep - 1].description}</CardDescription>
          </CardHeader>
          <CardContent className="p-6">{renderStepContent()}</CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>

          {currentStep === steps.length ? (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 flex items-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <CheckCircle className="h-4 w-4" />
                  <span>Submit Application</span>
                </>
              )}
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 flex items-center space-x-2"
            >
              <span>Next</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

// Step Components
function OrganizationDetailsStep({ formData, updateFormData }: any) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="organizationName">Organization Name *</Label>
          <Input
            id="organizationName"
            value={formData.organizationName}
            onChange={(e) => updateFormData("organizationName", e.target.value)}
            placeholder="Enter organization name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="organizationType">Organization Type *</Label>
          <Select
            value={formData.organizationType}
            onValueChange={(value) => updateFormData("organizationType", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select organization type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="private-limited">Private Limited Company</SelectItem>
              <SelectItem value="public-limited">Public Limited Company</SelectItem>
              <SelectItem value="partnership">Partnership Firm</SelectItem>
              <SelectItem value="llp">Limited Liability Partnership</SelectItem>
              <SelectItem value="proprietorship">Sole Proprietorship</SelectItem>
              <SelectItem value="ngo">NGO/Non-Profit</SelectItem>
              <SelectItem value="trust">Trust</SelectItem>
              <SelectItem value="society">Society</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="registrationNumber">Registration Number *</Label>
          <Input
            id="registrationNumber"
            value={formData.registrationNumber}
            onChange={(e) => updateFormData("registrationNumber", e.target.value)}
            placeholder="CIN/Registration number"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="panNumber">PAN Number *</Label>
          <Input
            id="panNumber"
            value={formData.panNumber}
            onChange={(e) => updateFormData("panNumber", e.target.value)}
            placeholder="ABCDE1234F"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="gstNumber">GST Number</Label>
          <Input
            id="gstNumber"
            value={formData.gstNumber}
            onChange={(e) => updateFormData("gstNumber", e.target.value)}
            placeholder="22ABCDE1234F1Z5"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="establishedYear">Year Established *</Label>
          <Input
            id="establishedYear"
            type="number"
            value={formData.establishedYear}
            onChange={(e) => updateFormData("establishedYear", e.target.value)}
            placeholder="2020"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Registered Address *</Label>
        <Textarea
          id="address"
          value={formData.address}
          onChange={(e) => updateFormData("address", e.target.value)}
          placeholder="Enter complete registered address"
          rows={3}
          required
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="city">City *</Label>
          <Input
            id="city"
            value={formData.city}
            onChange={(e) => updateFormData("city", e.target.value)}
            placeholder="City"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="state">State *</Label>
          <Select value={formData.state} onValueChange={(value) => updateFormData("state", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
              <SelectItem value="karnataka">Karnataka</SelectItem>
              <SelectItem value="maharashtra">Maharashtra</SelectItem>
              <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="gujarat">Gujarat</SelectItem>
              {/* Add more states */}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="pincode">PIN Code *</Label>
          <Input
            id="pincode"
            value={formData.pincode}
            onChange={(e) => updateFormData("pincode", e.target.value)}
            placeholder="110001"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          value={formData.website}
          onChange={(e) => updateFormData("website", e.target.value)}
          placeholder="https://www.example.com"
        />
      </div>

      {/* Contact Person Details */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Person Details</h3>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="contactPersonName">Contact Person Name *</Label>
            <Input
              id="contactPersonName"
              value={formData.contactPersonName}
              onChange={(e) => updateFormData("contactPersonName", e.target.value)}
              placeholder="Full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="designation">Designation *</Label>
            <Input
              id="designation"
              value={formData.designation}
              onChange={(e) => updateFormData("designation", e.target.value)}
              placeholder="CEO, Director, etc."
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
              placeholder="contact@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => updateFormData("phone", e.target.value)}
              placeholder="+91 98765 43210"
              required
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectInformationStep({ formData, updateFormData }: any) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="projectTitle">Project Title *</Label>
        <Input
          id="projectTitle"
          value={formData.projectTitle}
          onChange={(e) => updateFormData("projectTitle", e.target.value)}
          placeholder="Enter a clear, descriptive project title"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectDescription">Project Description *</Label>
        <Textarea
          id="projectDescription"
          value={formData.projectDescription}
          onChange={(e) => updateFormData("projectDescription", e.target.value)}
          placeholder="Provide a detailed description of your project, including background, problem statement, and proposed solution"
          rows={6}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectObjectives">Project Objectives *</Label>
        <Textarea
          id="projectObjectives"
          value={formData.projectObjectives}
          onChange={(e) => updateFormData("projectObjectives", e.target.value)}
          placeholder="List the specific, measurable objectives of your project"
          rows={4}
          required
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="targetBeneficiaries">Target Beneficiaries *</Label>
          <Input
            id="targetBeneficiaries"
            value={formData.targetBeneficiaries}
            onChange={(e) => updateFormData("targetBeneficiaries", e.target.value)}
            placeholder="e.g., 1000 farmers, 500 students"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectDuration">Project Duration *</Label>
          <Select value={formData.projectDuration} onValueChange={(value) => updateFormData("projectDuration", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="6-months">6 Months</SelectItem>
              <SelectItem value="1-year">1 Year</SelectItem>
              <SelectItem value="18-months">18 Months</SelectItem>
              <SelectItem value="2-years">2 Years</SelectItem>
              <SelectItem value="3-years">3 Years</SelectItem>
              <SelectItem value="more-than-3">More than 3 Years</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="implementationTimeline">Implementation Timeline *</Label>
        <Textarea
          id="implementationTimeline"
          value={formData.implementationTimeline}
          onChange={(e) => updateFormData("implementationTimeline", e.target.value)}
          placeholder="Provide a detailed timeline with key milestones and deliverables"
          rows={5}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="expectedOutcomes">Expected Outcomes & Impact *</Label>
        <Textarea
          id="expectedOutcomes"
          value={formData.expectedOutcomes}
          onChange={(e) => updateFormData("expectedOutcomes", e.target.value)}
          placeholder="Describe the expected outcomes, impact, and how success will be measured"
          rows={5}
          required
        />
      </div>
    </div>
  )
}

function FinancialDetailsStep({ formData, updateFormData }: any) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="totalProjectCost">Total Project Cost *</Label>
          <div className="relative">
            <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="totalProjectCost"
              type="number"
              value={formData.totalProjectCost}
              onChange={(e) => updateFormData("totalProjectCost", e.target.value)}
              placeholder="2500000"
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="grantAmountRequested">Grant Amount Requested *</Label>
          <div className="relative">
            <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="grantAmountRequested"
              type="number"
              value={formData.grantAmountRequested}
              onChange={(e) => updateFormData("grantAmountRequested", e.target.value)}
              placeholder="2000000"
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="ownContribution">Own Contribution *</Label>
          <div className="relative">
            <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="ownContribution"
              type="number"
              value={formData.ownContribution}
              onChange={(e) => updateFormData("ownContribution", e.target.value)}
              placeholder="500000"
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="otherFunding">Other Funding Sources</Label>
          <div className="relative">
            <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="otherFunding"
              type="number"
              value={formData.otherFunding}
              onChange={(e) => updateFormData("otherFunding", e.target.value)}
              placeholder="0"
              className="pl-10"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="budgetBreakdown">Detailed Budget Breakdown *</Label>
        <Textarea
          id="budgetBreakdown"
          value={formData.budgetBreakdown}
          onChange={(e) => updateFormData("budgetBreakdown", e.target.value)}
          placeholder="Provide itemized budget breakdown including personnel, equipment, materials, overhead, etc."
          rows={8}
          required
        />
      </div>

      {/* Budget Summary Card */}
      <Card className="bg-gray-50 border-0">
        <CardHeader>
          <CardTitle className="text-lg">Budget Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Project Cost:</span>
              <span className="font-semibold">
                ₹{formData.totalProjectCost ? Number.parseInt(formData.totalProjectCost).toLocaleString("en-IN") : "0"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Grant Requested:</span>
              <span className="font-semibold text-blue-600">
                ₹
                {formData.grantAmountRequested
                  ? Number.parseInt(formData.grantAmountRequested).toLocaleString("en-IN")
                  : "0"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Own Contribution:</span>
              <span className="font-semibold">
                ₹{formData.ownContribution ? Number.parseInt(formData.ownContribution).toLocaleString("en-IN") : "0"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Other Funding:</span>
              <span className="font-semibold">
                ₹{formData.otherFunding ? Number.parseInt(formData.otherFunding).toLocaleString("en-IN") : "0"}
              </span>
            </div>
            <div className="border-t pt-2 flex justify-between">
              <span className="font-semibold">Total Funding:</span>
              <span className="font-bold">
                ₹
                {(
                  (Number.parseInt(formData.grantAmountRequested) || 0) +
                  (Number.parseInt(formData.ownContribution) || 0) +
                  (Number.parseInt(formData.otherFunding) || 0)
                ).toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function SupportingDocumentsStep({ formData, updateFormData }: any) {
  const documentTypes = [
    { key: "registrationCertificate", label: "Registration Certificate", required: true },
    { key: "panCard", label: "PAN Card", required: true },
    { key: "auditedFinancials", label: "Audited Financial Statements", required: true },
    { key: "projectProposal", label: "Detailed Project Proposal", required: true },
    { key: "budgetDocument", label: "Budget Document", required: true },
    { key: "otherDocuments", label: "Other Supporting Documents", required: false },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-900">Document Requirements</h4>
            <p className="text-blue-700 text-sm mt-1">
              Please ensure all documents are clear, legible, and in PDF format. Maximum file size: 10MB per document.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {documentTypes.map((doc) => (
          <Card key={doc.key} className="border border-gray-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-gray-400" />
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {doc.label}
                      {doc.required && <span className="text-red-500 ml-1">*</span>}
                    </h4>
                    <p className="text-sm text-gray-500">PDF format, max 10MB</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {formData.documents[doc.key] ? (
                    <div className="flex items-center space-x-2 text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">Uploaded</span>
                    </div>
                  ) : (
                    <Button variant="outline" size="sm" className="flex items-center space-x-2">
                      <Upload className="h-4 w-4" />
                      <span>Upload</span>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-2">Document Checklist</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="doc-check-1" />
            <Label htmlFor="doc-check-1" className="text-sm">
              All documents are in PDF format
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="doc-check-2" />
            <Label htmlFor="doc-check-2" className="text-sm">
              Documents are clear and legible
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="doc-check-3" />
            <Label htmlFor="doc-check-3" className="text-sm">
              All required documents are uploaded
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="doc-check-4" />
            <Label htmlFor="doc-check-4" className="text-sm">
              Document information matches application details
            </Label>
          </div>
        </div>
      </div>
    </div>
  )
}

function ReviewSubmitStep({ formData, grantDetails }: any) {
  return (
    <div className="space-y-6">
      {/* Application Summary */}
      <Card className="border-0 bg-gradient-to-r from-blue-50 to-green-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span>Application Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-gray-900">Grant Details</h4>
              <p className="text-sm text-gray-600">{grantDetails.title}</p>
              <p className="text-sm text-gray-600">{grantDetails.ministry}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Amount Requested</h4>
              <p className="text-lg font-bold text-blue-600">
                ₹
                {formData.grantAmountRequested
                  ? Number.parseInt(formData.grantAmountRequested).toLocaleString("en-IN")
                  : "0"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Organization Details Review */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Organization Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label className="text-sm font-medium text-gray-600">Organization Name</Label>
              <p className="text-gray-900">{formData.organizationName || "Not provided"}</p>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-600">Organization Type</Label>
              <p className="text-gray-900">{formData.organizationType || "Not provided"}</p>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-600">Contact Person</Label>
              <p className="text-gray-900">{formData.contactPersonName || "Not provided"}</p>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-600">Email</Label>
              <p className="text-gray-900">{formData.email || "Not provided"}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project Details Review */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Project Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium text-gray-600">Project Title</Label>
              <p className="text-gray-900">{formData.projectTitle || "Not provided"}</p>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-600">Project Duration</Label>
              <p className="text-gray-900">{formData.projectDuration || "Not provided"}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Declarations */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Declarations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="declaration"
              checked={formData.declarationAccepted}
              onCheckedChange={(checked) => updateFormData("declarationAccepted", checked)}
            />
            <Label htmlFor="declaration" className="text-sm leading-relaxed">
              I hereby declare that the information provided in this application is true and correct to the best of my
              knowledge. I understand that any false information may lead to rejection of the application or
              cancellation of the grant.
            </Label>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms"
              checked={formData.termsAccepted}
              onCheckedChange={(checked) => updateFormData("termsAccepted", checked)}
            />
            <Label htmlFor="terms" className="text-sm leading-relaxed">
              I agree to the terms and conditions of the grant scheme and understand my obligations as a grant
              recipient.
            </Label>
          </div>
        </CardContent>
      </Card>

      {/* Submission Note */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-yellow-900">Before You Submit</h4>
            <ul className="text-yellow-700 text-sm mt-1 space-y-1">
              <li>• Review all information for accuracy</li>
              <li>• Ensure all required documents are uploaded</li>
              <li>• Check that declarations are accepted</li>
              <li>• Save a copy of your application for records</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
