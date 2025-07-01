"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Bell,
  Calendar,
  Home,
  MessageCircle,
  Plus,
  Search,
  Settings,
  Star,
  User,
  LogOut,
  CheckCircle,
  DollarSign,
  Briefcase,
  Eye,
  Edit,
  Send,
  Clock,
  MapPin,
  Phone,
  Mail,
  Camera,
  Save,
  TrendingUp,
  Users,
  Award,
  Download,
  Shield,
} from "lucide-react";

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  // Mock data
  const vendorData = {
    name: "David Kimani",
    businessName: "Prime Properties Kenya",
    email: "david@primeproperties.co.ke",
    phone: "+254 700 987 654",
    location: "Nairobi, Kenya",
    category: "Housing & Accommodation",
    rating: 4.8,
    joinDate: "January 2024",
    avatar: "/placeholder.svg?height=100&width=100",
    verified: true,
    bio: "Professional real estate consultant with 8+ years experience helping expatriates find their perfect homes in Kenya.",
    services: [
      "Property Search",
      "Lease Negotiation",
      "Property Management",
      "Relocation Support",
    ],
    languages: ["English", "Swahili", "French"],
  };

  const stats = [
    {
      label: "Active Projects",
      value: "8",
      icon: Briefcase,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      label: "Total Earnings",
      value: "$12,450",
      icon: DollarSign,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      label: "Client Rating",
      value: "4.8",
      icon: Star,
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
    {
      label: "Completed Jobs",
      value: "47",
      icon: CheckCircle,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
  ];

  const activeProjects = [
    {
      id: 1,
      title: "Housing Search - Westlands Area",
      client: "Sarah Johnson",
      status: "In Progress",
      progress: 75,
      deadline: "Dec 30, 2024",
      amount: "$500",
      priority: "High",
      startDate: "Dec 15, 2024",
    },
    {
      id: 2,
      title: "Property Viewing Assistance",
      client: "Michael Chen",
      status: "Scheduled",
      progress: 25,
      deadline: "Jan 5, 2025",
      amount: "$200",
      priority: "Medium",
      startDate: "Dec 20, 2024",
    },
    {
      id: 3,
      title: "Lease Negotiation Support",
      client: "Emma Wilson",
      status: "Pending Client",
      progress: 60,
      deadline: "Jan 10, 2025",
      amount: "$300",
      priority: "Low",
      startDate: "Dec 18, 2024",
    },
  ];

  const inquiries = [
    {
      id: 1,
      client: "John Smith",
      service: "Housing Search - Karen Area",
      budget: "$800",
      time: "2 hours ago",
      status: "New",
      description:
        "Looking for a 3-bedroom house in Karen area, preferably with a garden. Budget is flexible for the right property.",
      clientInfo: {
        location: "Currently in London, UK",
        moveDate: "February 2025",
        family: "Married with 2 children",
      },
    },
    {
      id: 2,
      client: "Lisa Anderson",
      service: "Property Management",
      budget: "$1,200",
      time: "5 hours ago",
      status: "Responded",
      description:
        "Need property management services for a 2-bedroom apartment in Westlands.",
      clientInfo: {
        location: "Nairobi, Kenya",
        moveDate: "Immediate",
        family: "Single professional",
      },
    },
    {
      id: 3,
      client: "Robert Taylor",
      service: "Relocation Package",
      budget: "$2,000",
      time: "1 day ago",
      status: "Quoted",
      description:
        "Complete relocation support needed for family of 4 moving from Canada.",
      clientInfo: {
        location: "Toronto, Canada",
        moveDate: "March 2025",
        family: "Married with 2 teenagers",
      },
    },
  ];

  const earningsData = [
    { month: "Dec 2024", amount: "$2,100", projects: 6, growth: "+15%" },
    { month: "Nov 2024", amount: "$1,850", projects: 5, growth: "+8%" },
    { month: "Oct 2024", amount: "$2,400", projects: 8, growth: "+22%" },
    { month: "Sep 2024", amount: "$1,950", projects: 6, growth: "+12%" },
    { month: "Aug 2024", amount: "$1,750", projects: 5, growth: "+5%" },
    { month: "Jul 2024", amount: "$2,200", projects: 7, growth: "+18%" },
  ];

  const reviews = [
    {
      id: 1,
      client: "Sarah Johnson",
      rating: 5,
      comment:
        "Excellent service! David helped us find the perfect home in Westlands. Very professional and responsive throughout the entire process.",
      date: "Dec 20, 2024",
      project: "Housing Search",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      client: "Michael Chen",
      rating: 5,
      comment:
        "Outstanding support throughout the entire process. David went above and beyond to ensure we found exactly what we were looking for. Highly recommend Prime Properties Kenya!",
      date: "Dec 15, 2024",
      project: "Property Viewing",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      client: "Emma Wilson",
      rating: 4,
      comment:
        "Good service and fair pricing. David was helpful in negotiating a better lease agreement and saved us quite a bit of money.",
      date: "Dec 10, 2024",
      project: "Lease Negotiation",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      client: "James Miller",
      rating: 5,
      comment:
        "Professional, knowledgeable, and reliable. Made our relocation to Kenya smooth and stress-free.",
      date: "Dec 5, 2024",
      project: "Relocation Support",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  const appointments = [
    {
      id: 1,
      title: "Property Viewing",
      client: "Sarah Johnson",
      date: "2024-12-28",
      time: "14:00",
      duration: "1 hour",
      location: "Westlands Square, Nairobi",
      type: "In-person",
      status: "Confirmed",
    },
    {
      id: 2,
      title: "Client Consultation",
      client: "John Smith",
      date: "2024-12-29",
      time: "10:00",
      duration: "45 minutes",
      location: "Video Call",
      type: "Virtual",
      status: "Confirmed",
    },
    {
      id: 3,
      title: "Property Inspection",
      client: "Michael Chen",
      date: "2025-01-02",
      time: "09:00",
      duration: "2 hours",
      location: "Karen, Nairobi",
      type: "In-person",
      status: "Pending",
    },
    {
      id: 4,
      title: "Contract Signing",
      client: "Emma Wilson",
      date: "2025-01-08",
      time: "15:30",
      duration: "30 minutes",
      location: "Prime Properties Office",
      type: "In-person",
      status: "Confirmed",
    },
  ];

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "inquiries", label: "Inquiries", icon: MessageCircle },
    { id: "earnings", label: "Earnings", icon: DollarSign },
    { id: "reviews", label: "Reviews", icon: Star },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const handleSendResponse = () => {
    if (responseMessage.trim() && selectedInquiry) {
      // Update inquiry status (in real app, this would be an API call)
      setResponseMessage("");
      setSelectedInquiry(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white/90 backdrop-blur-sm shadow-xl border-r border-gray-200 min-h-screen">
          <div className="p-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 mb-8">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">
                K+
              </div>
              <span className="text-xl font-bold text-gray-900">
                Karibu Plus
              </span>
            </Link>

            {/* Vendor Profile */}
            <div className="mb-8 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
              <div className="flex items-center space-x-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src={vendorData.avatar || "/placeholder.svg"}
                    alt={vendorData.name}
                  />
                  <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    {vendorData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900">
                    {vendorData.name}
                  </p>
                  <p className="text-sm text-gray-600">Service Provider</p>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {vendorData.rating}
                    </span>
                    {vendorData.verified && (
                      <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === item.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                  {item.id === "inquiries" && (
                    <Badge className="ml-auto bg-red-500 text-white">
                      {inquiries.filter((inq) => inq.status === "New").length}
                    </Badge>
                  )}
                </button>
              ))}
            </nav>

            {/* Logout */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300">
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {activeTab === "overview" && "Vendor Dashboard"}
                {activeTab === "projects" && "My Projects"}
                {activeTab === "inquiries" && "Client Inquiries"}
                {activeTab === "earnings" && "Earnings & Payments"}
                {activeTab === "reviews" && "Reviews & Ratings"}
                {activeTab === "calendar" && "Calendar & Schedule"}
                {activeTab === "profile" && "Business Profile"}
                {activeTab === "settings" && "Account Settings"}
              </h1>
              <p className="text-gray-600 mt-1">
                {activeTab === "overview" &&
                  "Welcome back! Here's your business overview."}
                {activeTab === "projects" &&
                  "Manage your active and completed projects."}
                {activeTab === "inquiries" &&
                  "Respond to new client inquiries and leads."}
                {activeTab === "earnings" &&
                  "Track your earnings and payment history."}
                {activeTab === "reviews" && "View client feedback and ratings."}
                {activeTab === "calendar" &&
                  "Manage your appointments and schedule."}
                {activeTab === "profile" &&
                  "Update your business information and services."}
                {activeTab === "settings" &&
                  "Configure your account preferences."}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Plus className="w-4 h-4 mr-2" />
                New Service
              </Button>
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="backdrop-blur-sm bg-white/90 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">
                            {stat.label}
                          </p>
                          <p className="text-3xl font-bold text-gray-900 mt-2">
                            {stat.value}
                          </p>
                        </div>
                        <div className={`${stat.bg} p-3 rounded-full`}>
                          <stat.icon className={`w-6 h-6 ${stat.color}`} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Active Projects */}
              <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Active Projects</span>
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </CardTitle>
                  <CardDescription>
                    Track your ongoing client projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeProjects.map((project) => (
                      <div
                        key={project.id}
                        className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {project.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              Client: {project.client}
                            </p>
                          </div>
                          <div className="text-right">
                            <Badge
                              variant={
                                project.status === "In Progress"
                                  ? "default"
                                  : project.status === "Scheduled"
                                  ? "secondary"
                                  : "outline"
                              }
                            >
                              {project.status}
                            </Badge>
                            <p className="text-sm text-gray-600 mt-1">
                              {project.amount}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Priority: {project.priority}</span>
                            <span>Deadline: {project.deadline}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Inquiries & Earnings Overview */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Inquiries */}
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Recent Inquiries</CardTitle>
                    <CardDescription>
                      New client requests and leads
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {inquiries.slice(0, 3).map((inquiry) => (
                        <div
                          key={inquiry.id}
                          className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                          onClick={() => setActiveTab("inquiries")}
                        >
                          <div>
                            <p className="font-medium text-gray-900">
                              {inquiry.client}
                            </p>
                            <p className="text-sm text-gray-600">
                              {inquiry.service}
                            </p>
                            <p className="text-xs text-gray-500">
                              {inquiry.time}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-900">
                              {inquiry.budget}
                            </p>
                            <Badge
                              variant={
                                inquiry.status === "New"
                                  ? "default"
                                  : inquiry.status === "Responded"
                                  ? "secondary"
                                  : "outline"
                              }
                              className="mt-1"
                            >
                              {inquiry.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Earnings Overview */}
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Recent Earnings</CardTitle>
                    <CardDescription>
                      Your monthly earnings breakdown
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {earningsData.slice(0, 4).map((earning, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
                        >
                          <div>
                            <p className="font-medium text-gray-900">
                              {earning.month}
                            </p>
                            <p className="text-sm text-gray-600">
                              {earning.projects} projects completed
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-semibold text-green-600">
                              {earning.amount}
                            </p>
                            <p className="text-sm text-green-600">
                              {earning.growth}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search projects..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option>All Status</option>
                    <option>In Progress</option>
                    <option>Scheduled</option>
                    <option>Completed</option>
                    <option>Pending</option>
                  </select>
                </div>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
                  <Plus className="w-4 h-4 mr-2" />
                  New Project
                </Button>
              </div>

              <div className="grid gap-6">
                {activeProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="backdrop-blur-sm bg-white/90 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {project.title}
                          </h3>
                          <p className="text-gray-600">
                            Client: {project.client}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant={
                              project.status === "In Progress"
                                ? "default"
                                : project.status === "Scheduled"
                                ? "secondary"
                                : "outline"
                            }
                            className="mb-2"
                          >
                            {project.status}
                          </Badge>
                          <p className="text-lg font-semibold text-gray-900">
                            {project.amount}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-3" />
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Started: {project.startDate}</span>
                          <span>Deadline: {project.deadline}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Priority: {project.priority}</span>
                        </div>
                      </div>
                      <div className="flex space-x-3 mt-4">
                        <Button variant="outline" size="sm">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Message Client
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4 mr-2" />
                          Update Progress
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Inquiries Tab */}
          {activeTab === "inquiries" && (
            <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
              {/* Inquiries List */}
              <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Client Inquiries</CardTitle>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search inquiries..."
                      className="pl-10"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-1">
                    {inquiries.map((inquiry) => (
                      <div
                        key={inquiry.id}
                        onClick={() => setSelectedInquiry(inquiry.id)}
                        className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                          selectedInquiry === inquiry.id
                            ? "bg-purple-50 border-r-4 border-purple-500"
                            : ""
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="font-medium text-gray-900">
                              {inquiry.client}
                            </p>
                            <p className="text-sm text-gray-600">
                              {inquiry.service}
                            </p>
                          </div>
                          <Badge
                            variant={
                              inquiry.status === "New"
                                ? "default"
                                : inquiry.status === "Responded"
                                ? "secondary"
                                : "outline"
                            }
                            className={
                              inquiry.status === "New"
                                ? "bg-red-500"
                                : inquiry.status === "Responded"
                                ? "bg-blue-500"
                                : "border-green-500 text-green-600"
                            }
                          >
                            {inquiry.status}
                          </Badge>
                        </div>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>{inquiry.budget}</span>
                          <span>{inquiry.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Inquiry Details */}
              <div className="lg:col-span-2">
                {selectedInquiry ? (
                  <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg h-full flex flex-col">
                    <CardHeader className="border-b">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">
                            {
                              inquiries.find(
                                (inq) => inq.id === selectedInquiry
                              )?.client
                            }
                          </CardTitle>
                          <p className="text-sm text-gray-600">
                            {
                              inquiries.find(
                                (inq) => inq.id === selectedInquiry
                              )?.service
                            }
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-purple-600">
                            {
                              inquiries.find(
                                (inq) => inq.id === selectedInquiry
                              )?.budget
                            }
                          </p>
                          <p className="text-sm text-gray-500">
                            {
                              inquiries.find(
                                (inq) => inq.id === selectedInquiry
                              )?.time
                            }
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            Project Description
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {
                              inquiries.find(
                                (inq) => inq.id === selectedInquiry
                              )?.description
                            }
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-3">
                            Client Information
                          </h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                              <span>
                                {
                                  inquiries.find(
                                    (inq) => inq.id === selectedInquiry
                                  )?.clientInfo.location
                                }
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                              <span>
                                Move Date:{" "}
                                {
                                  inquiries.find(
                                    (inq) => inq.id === selectedInquiry
                                  )?.clientInfo.moveDate
                                }
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 text-gray-400 mr-2" />
                              <span>
                                {
                                  inquiries.find(
                                    (inq) => inq.id === selectedInquiry
                                  )?.clientInfo.family
                                }
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <div className="p-6 border-t">
                      <div className="space-y-4">
                        <Textarea
                          placeholder="Write your response to this inquiry..."
                          value={responseMessage}
                          onChange={(e) => setResponseMessage(e.target.value)}
                          rows={4}
                        />
                        <div className="flex space-x-3">
                          <Button
                            onClick={handleSendResponse}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 flex-1"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Send Response
                          </Button>
                          <Button variant="outline">
                            <Phone className="w-4 h-4 mr-2" />
                            Call Client
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ) : (
                  <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg h-full flex items-center justify-center">
                    <div className="text-center">
                      <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Select an Inquiry
                      </h3>
                      <p className="text-gray-600">
                        Choose an inquiry from the list to view details and
                        respond
                      </p>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          )}

          {/* Earnings Tab */}
          {activeTab === "earnings" && (
            <div className="space-y-6">
              {/* Earnings Summary */}
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      $12,450
                    </div>
                    <p className="text-sm text-gray-600">Total Earnings</p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      $2,100
                    </div>
                    <p className="text-sm text-gray-600">This Month</p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      $800
                    </div>
                    <p className="text-sm text-gray-600">Pending</p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      +15%
                    </div>
                    <p className="text-sm text-gray-600">Growth Rate</p>
                  </CardContent>
                </Card>
              </div>

              {/* Monthly Earnings */}
              <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Monthly Earnings</CardTitle>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export Report
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {earningsData.map((earning, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300"
                      >
                        <div>
                          <p className="font-semibold text-gray-900">
                            {earning.month}
                          </p>
                          <p className="text-sm text-gray-600">
                            {earning.projects} projects completed
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-green-600">
                            {earning.amount}
                          </p>
                          <p className="text-sm text-green-600">
                            {earning.growth}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === "reviews" && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">
                      {vendorData.rating}
                    </div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(vendorData.rating)
                              ? "text-yellow-500 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">Overall Rating</p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {reviews.length}
                    </div>
                    <p className="text-sm text-gray-600">Total Reviews</p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      98%
                    </div>
                    <p className="text-sm text-gray-600">Positive Reviews</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                {reviews.map((review) => (
                  <Card
                    key={review.id}
                    className="backdrop-blur-sm bg-white/90 border-0 shadow-lg"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                              {review.client
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {review.client}
                            </p>
                            <p className="text-sm text-gray-600">
                              {review.project}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center mb-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "text-yellow-500 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {review.comment}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Calendar Tab */}
          {activeTab === "calendar" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="outline">Today</Button>
                  <Button variant="outline">Week</Button>
                  <Button variant="outline">Month</Button>
                </div>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Schedule Appointment
                </Button>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Calendar View */}
                <div className="lg:col-span-2">
                  <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>December 2024</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-7 gap-2 mb-4">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                          (day) => (
                            <div
                              key={day}
                              className="text-center font-medium text-gray-600 py-2"
                            >
                              {day}
                            </div>
                          )
                        )}
                      </div>
                      <div className="grid grid-cols-7 gap-2">
                        {Array.from({ length: 31 }, (_, i) => i + 1).map(
                          (day) => (
                            <div
                              key={day}
                              className={`aspect-square flex items-center justify-center text-sm border rounded-lg cursor-pointer hover:bg-gray-50 ${
                                day === 28
                                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                                  : day === 29 || day === 2 || day === 8
                                  ? "bg-purple-100 text-purple-800"
                                  : ""
                              }`}
                            >
                              {day}
                            </div>
                          )
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Upcoming Appointments */}
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Upcoming Appointments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {appointments.map((appointment) => (
                        <div
                          key={appointment.id}
                          className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900">
                              {appointment.title}
                            </h3>
                            <Badge
                              variant={
                                appointment.status === "Confirmed"
                                  ? "default"
                                  : "outline"
                              }
                              className={
                                appointment.status === "Confirmed"
                                  ? "bg-green-500"
                                  : "border-yellow-500 text-yellow-600"
                              }
                            >
                              {appointment.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            Client: {appointment.client}
                          </p>
                          <div className="space-y-1 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              {appointment.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2" />
                              {appointment.time} ({appointment.duration})
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              {appointment.location}
                            </div>
                          </div>
                          <div className="flex space-x-2 mt-3">
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4 mr-1" />
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              <MessageCircle className="w-4 h-4 mr-1" />
                              Message
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Profile Picture & Basic Info */}
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="relative inline-block mb-4">
                      <Avatar className="h-24 w-24">
                        <AvatarImage
                          src={vendorData.avatar || "/placeholder.svg"}
                          alt={vendorData.name}
                        />
                        <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-2xl">
                          {vendorData.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <Button
                        size="sm"
                        className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0 bg-gradient-to-r from-purple-600 to-pink-600"
                      >
                        <Camera className="w-4 h-4" />
                      </Button>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {vendorData.name}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {vendorData.businessName}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      Provider since {vendorData.joinDate}
                    </p>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-semibold">{vendorData.rating}</span>
                      {vendorData.verified && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <Badge className="bg-green-500">Verified Provider</Badge>
                  </CardContent>
                </Card>

                {/* Business Information */}
                <div className="lg:col-span-2">
                  <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>Business Information</CardTitle>
                      <CardDescription>
                        Update your business details and service information
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Business Name
                          </label>
                          <Input defaultValue={vendorData.businessName} />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                            <option>{vendorData.category}</option>
                            <option>Documentation & Legal</option>
                            <option>Employment Support</option>
                            <option>Education Services</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            defaultValue={vendorData.email}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            defaultValue={vendorData.phone}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            defaultValue={vendorData.location}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Business Description
                        </label>
                        <Textarea defaultValue={vendorData.bio} rows={3} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Services Offered
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {vendorData.services.map((service, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="border-purple-500 text-purple-600"
                            >
                              {service}
                            </Badge>
                          ))}
                          <Button variant="outline" size="sm">
                            <Plus className="w-4 h-4 mr-1" />
                            Add Service
                          </Button>
                        </div>
                      </div>
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Account Settings */}
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>
                      Manage your account preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Language
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                        <option>English</option>
                        <option>Swahili</option>
                        <option>French</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Currency
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                        <option>USD ($)</option>
                        <option>KES (KSh)</option>
                        <option>EUR (€)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timezone
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                        <option>EAT (UTC+3)</option>
                        <option>GMT (UTC+0)</option>
                        <option>EST (UTC-5)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Availability Status
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                        <option>Available</option>
                        <option>Busy</option>
                        <option>Away</option>
                      </select>
                    </div>
                  </CardContent>
                </Card>

                {/* Notification Settings */}
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>
                      Choose how you want to be notified
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gray-600" />
                        <div>
                          <p className="font-medium text-gray-900">
                            Email Notifications
                          </p>
                          <p className="text-sm text-gray-600">
                            New inquiries and messages
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-gray-600" />
                        <div>
                          <p className="font-medium text-gray-900">
                            SMS Notifications
                          </p>
                          <p className="text-sm text-gray-600">
                            Urgent client requests
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Bell className="w-5 h-5 text-gray-600" />
                        <div>
                          <p className="font-medium text-gray-900">
                            Push Notifications
                          </p>
                          <p className="text-sm text-gray-600">
                            Real-time updates
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <DollarSign className="w-5 h-5 text-gray-600" />
                        <div>
                          <p className="font-medium text-gray-900">
                            Payment Notifications
                          </p>
                          <p className="text-sm text-gray-600">
                            Payment confirmations
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Security Settings */}
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Security</CardTitle>
                    <CardDescription>
                      Manage your account security
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                    >
                      <Shield className="w-4 h-4 mr-2" />
                      Change Password
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                    >
                      <Shield className="w-4 h-4 mr-2" />
                      Two-Factor Authentication
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Business Data
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Login Activity
                    </Button>
                  </CardContent>
                </Card>

                {/* Business Settings */}
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Business Settings</CardTitle>
                    <CardDescription>
                      Configure your business preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">
                          Auto-respond to Inquiries
                        </p>
                        <p className="text-sm text-gray-600">
                          Send automatic responses to new inquiries
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">
                          Public Profile
                        </p>
                        <p className="text-sm text-gray-600">
                          Make your profile visible in search
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">
                          Online Status
                        </p>
                        <p className="text-sm text-gray-600">
                          Show when you're available
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">
                          Performance Analytics
                        </p>
                        <p className="text-sm text-gray-600">
                          Track business performance metrics
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
