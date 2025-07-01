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
  CreditCard,
  FileText,
  Home,
  MapPin,
  MessageCircle,
  Plus,
  Search,
  Settings,
  TrendingUp,
  User,
  LogOut,
  Clock,
  CheckCircle,
  DollarSign,
  Send,
  Download,
  Eye,
  Edit,
  Save,
  Camera,
  Phone,
  Mail,
  Shield,
  Briefcase,
  Users,
  GraduationCap,
  Car,
  Heart,
  Smartphone,
  ArrowRight,
} from "lucide-react";

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  // Mock data
  const clientData = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+254 700 123 456",
    location: "Nairobi, Kenya",
    joinDate: "March 2024",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Expatriate from UK, relocating to Kenya with family. Looking for comprehensive relocation support.",
    preferences: {
      language: "English",
      currency: "USD",
      timezone: "EAT (UTC+3)",
      notifications: {
        email: true,
        sms: true,
        push: true,
      },
    },
  };

  const stats = [
    {
      label: "Active Services",
      value: "3",
      icon: Clock,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      label: "Completed",
      value: "12",
      icon: CheckCircle,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      label: "Total Spent",
      value: "$2,450",
      icon: DollarSign,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      label: "Saved Time",
      value: "48hrs",
      icon: TrendingUp,
      color: "text-orange-600",
      bg: "bg-orange-100",
    },
  ];

  const platformServices = [
    {
      id: 1,
      icon: Home,
      title: "Housing & Accommodation",
      description:
        "Find your perfect home with curated property listings and neighborhood expertise.",
      vendorCount: 45,
      avgRating: 4.8,
      startingPrice: "$200",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
      iconColor: "text-blue-100",
    },
    {
      id: 2,
      icon: FileText,
      title: "Documentation & Legal",
      description:
        "Navigate Kenya's bureaucracy with expert guidance on permits and legal requirements.",
      vendorCount: 32,
      avgRating: 4.9,
      startingPrice: "$150",
      bgColor: "bg-gradient-to-br from-green-500 to-green-600",
      iconColor: "text-green-100",
    },
    {
      id: 3,
      icon: Briefcase,
      title: "Employment Support",
      description:
        "Connect with career opportunities and build your professional network.",
      vendorCount: 28,
      avgRating: 4.7,
      startingPrice: "$100",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      iconColor: "text-purple-100",
    },
    {
      id: 4,
      icon: GraduationCap,
      title: "Education Services",
      description:
        "Find the right schools and educational opportunities for your family.",
      vendorCount: 22,
      avgRating: 4.6,
      startingPrice: "$120",
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
      iconColor: "text-orange-100",
    },
    {
      id: 5,
      icon: Car,
      title: "Transportation",
      description:
        "Get around Kenya safely and efficiently with our transport solutions.",
      vendorCount: 38,
      avgRating: 4.5,
      startingPrice: "$50",
      bgColor: "bg-gradient-to-br from-teal-500 to-teal-600",
      iconColor: "text-teal-100",
    },
    {
      id: 6,
      icon: Heart,
      title: "Healthcare Navigation",
      description:
        "Access quality healthcare with our medical service connections.",
      vendorCount: 25,
      avgRating: 4.8,
      startingPrice: "$80",
      bgColor: "bg-gradient-to-br from-red-500 to-red-600",
      iconColor: "text-red-100",
    },
    {
      id: 7,
      icon: CreditCard,
      title: "Financial Services",
      description:
        "Set up your financial life in Kenya with banking and investment guidance.",
      vendorCount: 18,
      avgRating: 4.9,
      startingPrice: "$100",
      bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-100",
    },
    {
      id: 8,
      icon: Users,
      title: "Community Integration",
      description:
        "Build meaningful connections and integrate into Kenyan communities.",
      vendorCount: 35,
      avgRating: 4.7,
      startingPrice: "$75",
      bgColor: "bg-gradient-to-br from-pink-500 to-pink-600",
      iconColor: "text-pink-100",
    },
    {
      id: 9,
      icon: Smartphone,
      title: "Digital Services",
      description:
        "Stay connected with mobile, internet, and digital service setup.",
      vendorCount: 20,
      avgRating: 4.4,
      startingPrice: "$60",
      bgColor: "bg-gradient-to-br from-gray-500 to-gray-600",
      iconColor: "text-gray-100",
    },
  ];

  const activeServices = [
    {
      id: 1,
      title: "Housing Search - Westlands",
      provider: "Prime Properties Kenya",
      status: "In Progress",
      progress: 75,
      dueDate: "Dec 30, 2024",
      amount: "$500",
      category: "Housing",
    },
    {
      id: 2,
      title: "Work Permit Application",
      provider: "Legal Eagles Associates",
      status: "Under Review",
      progress: 60,
      dueDate: "Jan 15, 2025",
      amount: "$800",
      category: "Legal",
    },
    {
      id: 3,
      title: "School Enrollment - International School",
      provider: "EduConsult Kenya",
      status: "Pending Documents",
      progress: 40,
      dueDate: "Jan 20, 2025",
      amount: "$300",
      category: "Education",
    },
  ];

  const conversations = [
    {
      id: 1,
      provider: "Prime Properties Kenya",
      lastMessage:
        "Found 3 properties matching your criteria in Westlands area...",
      time: "2 hours ago",
      unread: 2,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      provider: "Legal Eagles Associates",
      lastMessage:
        "Your work permit application has been submitted to immigration...",
      time: "1 day ago",
      unread: 0,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      provider: "EduConsult Kenya",
      lastMessage: "We need additional documents for the school application...",
      time: "2 days ago",
      unread: 1,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      provider: "Karibu Plus Support",
      lastMessage: "Welcome to Karibu Plus! Here's how to get started...",
      time: "3 days ago",
      unread: 0,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  const messageHistory = {
    1: [
      {
        id: 1,
        sender: "Prime Properties Kenya",
        message:
          "Hello Sarah! I've found several properties that match your criteria in the Westlands area.",
        time: "10:30 AM",
        isProvider: true,
      },
      {
        id: 2,
        sender: "You",
        message: "That's great! Can you send me the details?",
        time: "10:35 AM",
        isProvider: false,
      },
      {
        id: 3,
        sender: "Prime Properties Kenya",
        message:
          "I'm sending you 3 options: 1) 3BR apartment in Westlands Square - $1,200/month, 2) 2BR in Sarit Centre area - $900/month, 3) 3BR townhouse in Parklands - $1,500/month. All are furnished and available immediately.",
        time: "10:40 AM",
        isProvider: true,
      },
      {
        id: 4,
        sender: "You",
        message:
          "The Westlands Square option looks interesting. Can we schedule a viewing?",
        time: "11:00 AM",
        isProvider: false,
      },
      {
        id: 5,
        sender: "Prime Properties Kenya",
        message:
          "Perfect! I can arrange a viewing for tomorrow at 2 PM. Does that work for you?",
        time: "11:05 AM",
        isProvider: true,
      },
    ],
  };

  const upcomingAppointments = [
    {
      id: 1,
      title: "Property Viewing",
      provider: "Prime Properties Kenya",
      date: "2024-12-28",
      time: "14:00",
      duration: "1 hour",
      location: "Westlands Square, Nairobi",
      type: "In-person",
      status: "Confirmed",
    },
    {
      id: 2,
      title: "Legal Consultation",
      provider: "Legal Eagles Associates",
      date: "2025-01-02",
      time: "10:00",
      duration: "45 minutes",
      location: "CBD, Nairobi",
      type: "In-person",
      status: "Confirmed",
    },
    {
      id: 3,
      title: "School Tour",
      provider: "EduConsult Kenya",
      date: "2025-01-05",
      time: "09:00",
      duration: "2 hours",
      location: "International School of Kenya",
      type: "In-person",
      status: "Pending",
    },
    {
      id: 4,
      title: "Document Review",
      provider: "Legal Eagles Associates",
      date: "2025-01-08",
      time: "15:30",
      duration: "30 minutes",
      location: "Video Call",
      type: "Virtual",
      status: "Confirmed",
    },
  ];

  const paymentHistory = [
    {
      id: 1,
      service: "Housing Search - Westlands",
      provider: "Prime Properties Kenya",
      amount: "$500.00",
      date: "2024-12-15",
      status: "Paid",
      method: "Credit Card",
      invoice: "INV-001",
    },
    {
      id: 2,
      service: "Work Permit Application",
      provider: "Legal Eagles Associates",
      amount: "$800.00",
      date: "2024-12-10",
      status: "Paid",
      method: "Bank Transfer",
      invoice: "INV-002",
    },
    {
      id: 3,
      service: "Airport Transfer",
      provider: "Swift Transport Kenya",
      amount: "$45.00",
      date: "2024-12-01",
      status: "Paid",
      method: "Mobile Money",
      invoice: "INV-003",
    },
    {
      id: 4,
      service: "Document Translation",
      provider: "TransLang Services",
      amount: "$120.00",
      date: "2024-11-28",
      status: "Paid",
      method: "Credit Card",
      invoice: "INV-004",
    },
    {
      id: 5,
      service: "School Enrollment Support",
      provider: "EduConsult Kenya",
      amount: "$300.00",
      date: "2024-12-20",
      status: "Pending",
      method: "Bank Transfer",
      invoice: "INV-005",
    },
  ];

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "services", label: "My Services", icon: FileText },
    { id: "messages", label: "Messages", icon: MessageCircle },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "payments", label: "Payments", icon: CreditCard },
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedMessage) {
      // Add message to history (in real app, this would be an API call)
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white/90 backdrop-blur-sm shadow-xl border-r border-gray-200 min-h-screen">
          <div className="p-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 mb-8">
              <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">
                K+
              </div>
              <span className="text-xl font-bold text-gray-900">
                Karibu Plus
              </span>
            </Link>

            {/* User Profile */}
            <div className="mb-8 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl">
              <div className="flex items-center space-x-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src={clientData.avatar || "/placeholder.svg"}
                    alt={clientData.name}
                  />
                  <AvatarFallback className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                    {clientData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900">
                    {clientData.name}
                  </p>
                  <p className="text-sm text-gray-600">Client</p>
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
                      ? "bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                  {item.id === "messages" && (
                    <Badge className="ml-auto bg-red-500 text-white">
                      {conversations.reduce(
                        (acc, conv) => acc + conv.unread,
                        0
                      )}
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
                {activeTab === "overview" && "Dashboard Overview"}
                {activeTab === "services" && "My Services"}
                {activeTab === "messages" && "Messages"}
                {activeTab === "calendar" && "Calendar"}
                {activeTab === "payments" && "Payments"}
                {activeTab === "profile" && "Profile"}
                {activeTab === "settings" && "Settings"}
              </h1>
              <p className="text-gray-600 mt-1">
                {activeTab === "overview" &&
                  "Welcome back! Here's what's happening with your services."}
                {activeTab === "services" &&
                  "Manage and track all your service requests."}
                {activeTab === "messages" &&
                  "Stay connected with your service providers."}
                {activeTab === "calendar" &&
                  "Keep track of your appointments and deadlines."}
                {activeTab === "payments" &&
                  "View your payment history and manage billing."}
                {activeTab === "profile" &&
                  "Manage your personal information and preferences."}
                {activeTab === "settings" &&
                  "Customize your account settings and preferences."}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                New Request
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

              {/* Platform Services */}
              <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Available Services</span>
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 border-green-200"
                    >
                      {platformServices.length} Services
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    Explore our comprehensive range of services to help you
                    settle in Kenya
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {platformServices.map((service, index) => (
                      <Link
                        key={service.id}
                        href={`/dashboard/client/services/${service.id}`}
                        className="block group"
                      >
                        <div
                          className={`${service.bgColor} text-white p-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group animate-fade-in`}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="mb-4">
                            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                              <service.icon
                                className={`w-6 h-6 ${service.iconColor}`}
                              />
                            </div>
                            <h3 className="text-xl font-bold mb-3 transition-transform duration-300 group-hover:translate-x-1">
                              {service.title}
                            </h3>
                            <p className="opacity-90 mb-4 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                              {service.description}
                            </p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm opacity-80 group-hover:opacity-100">
                              <span>{service.vendorCount} Vendors</span>
                              <span>⭐ {service.avgRating}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-bold">
                                From {service.startingPrice}
                              </span>
                              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Active Services */}
              <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Active Services</span>
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </CardTitle>
                  <CardDescription>
                    Track the progress of your ongoing service requests
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeServices.map((service) => (
                      <div
                        key={service.id}
                        className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {service.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {service.provider}
                            </p>
                          </div>
                          <div className="text-right">
                            <Badge
                              variant={
                                service.status === "In Progress"
                                  ? "default"
                                  : service.status === "Under Review"
                                  ? "secondary"
                                  : "outline"
                              }
                            >
                              {service.status}
                            </Badge>
                            <p className="text-sm text-gray-600 mt-1">
                              {service.amount}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{service.progress}%</span>
                          </div>
                          <Progress value={service.progress} className="h-2" />
                          <p className="text-xs text-gray-500">
                            Due: {service.dueDate}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Messages & Upcoming Appointments */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Messages */}
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Recent Messages</CardTitle>
                    <CardDescription>
                      Latest communications from your service providers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {conversations.slice(0, 3).map((conversation) => (
                        <div
                          key={conversation.id}
                          className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                          onClick={() => setActiveTab("messages")}
                        >
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs">
                              {conversation.provider
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                                .slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-gray-900">
                                {conversation.provider}
                              </p>
                              <p className="text-xs text-gray-500">
                                {conversation.time}
                              </p>
                            </div>
                            <p className="text-sm text-gray-600 truncate">
                              {conversation.lastMessage}
                            </p>
                            {conversation.unread > 0 && (
                              <Badge className="mt-1 bg-blue-500 text-white">
                                {conversation.unread} new
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Appointments */}
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Upcoming Appointments</CardTitle>
                    <CardDescription>
                      Your scheduled meetings and appointments
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingAppointments.slice(0, 3).map((appointment) => (
                        <div
                          key={appointment.id}
                          className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900">
                              {appointment.title}
                            </h3>
                            <Badge variant="outline">{appointment.date}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">
                            {appointment.provider}
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {appointment.time}
                            <MapPin className="w-4 h-4 ml-3 mr-1" />
                            {appointment.location}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === "services" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    <option>All Categories</option>
                    <option>Housing</option>
                    <option>Legal</option>
                    <option>Education</option>
                    <option>Transportation</option>
                  </select>
                </div>
                <Button className="bg-gradient-to-r from-green-600 to-blue-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Request New Service
                </Button>
              </div>

              <div className="grid gap-6">
                {activeServices.map((service) => (
                  <Card
                    key={service.id}
                    className="backdrop-blur-sm bg-white/90 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {service.title}
                          </h3>
                          <p className="text-gray-600">{service.provider}</p>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant={
                              service.status === "In Progress"
                                ? "default"
                                : service.status === "Under Review"
                                ? "secondary"
                                : "outline"
                            }
                            className="mb-2"
                          >
                            {service.status}
                          </Badge>
                          <p className="text-lg font-semibold text-gray-900">
                            {service.amount}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{service.progress}%</span>
                        </div>
                        <Progress value={service.progress} className="h-3" />
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Category: {service.category}</span>
                          <span>Due: {service.dueDate}</span>
                        </div>
                      </div>
                      <div className="flex space-x-3 mt-4">
                        <Button variant="outline" size="sm">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Message Provider
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === "messages" && (
            <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
              {/* Conversations List */}
              <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Conversations</CardTitle>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search conversations..."
                      className="pl-10"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-1">
                    {conversations.map((conversation) => (
                      <div
                        key={conversation.id}
                        onClick={() => setSelectedMessage(conversation.id)}
                        className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                          selectedMessage === conversation.id
                            ? "bg-blue-50 border-r-4 border-blue-500"
                            : ""
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                              {conversation.provider
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                                .slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="font-medium text-gray-900 truncate">
                                {conversation.provider}
                              </p>
                              <p className="text-xs text-gray-500">
                                {conversation.time}
                              </p>
                            </div>
                            <p className="text-sm text-gray-600 truncate">
                              {conversation.lastMessage}
                            </p>
                            {conversation.unread > 0 && (
                              <Badge className="mt-1 bg-blue-500 text-white">
                                {conversation.unread}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Message Thread */}
              <div className="lg:col-span-2">
                {selectedMessage ? (
                  <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg h-full flex flex-col">
                    <CardHeader className="border-b">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                            {conversations
                              .find((c) => c.id === selectedMessage)
                              ?.provider.split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">
                            {
                              conversations.find(
                                (c) => c.id === selectedMessage
                              )?.provider
                            }
                          </CardTitle>
                          <p className="text-sm text-gray-600">Online</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 p-4 overflow-y-auto">
                      <div className="space-y-4">
                        {messageHistory[selectedMessage]?.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${
                              message.isProvider
                                ? "justify-start"
                                : "justify-end"
                            }`}
                          >
                            <div
                              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                                message.isProvider
                                  ? "bg-gray-100 text-gray-900"
                                  : "bg-gradient-to-r from-green-600 to-blue-600 text-white"
                              }`}
                            >
                              <p className="text-sm">{message.message}</p>
                              <p
                                className={`text-xs mt-1 ${
                                  message.isProvider
                                    ? "text-gray-500"
                                    : "text-green-100"
                                }`}
                              >
                                {message.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <div className="p-4 border-t">
                      <div className="flex space-x-2">
                        <Input
                          placeholder="Type your message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={(e) =>
                            e.key === "Enter" && handleSendMessage()
                          }
                          className="flex-1"
                        />
                        <Button
                          onClick={handleSendMessage}
                          className="bg-gradient-to-r from-green-600 to-blue-600"
                        >
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ) : (
                  <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg h-full flex items-center justify-center">
                    <div className="text-center">
                      <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Select a Conversation
                      </h3>
                      <p className="text-gray-600">
                        Choose a conversation from the list to start messaging
                      </p>
                    </div>
                  </Card>
                )}
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
                <Button className="bg-gradient-to-r from-green-600 to-blue-600">
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
                                  ? "bg-gradient-to-r from-green-600 to-blue-600 text-white"
                                  : day === 2 || day === 5 || day === 8
                                  ? "bg-blue-100 text-blue-800"
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
                      {upcomingAppointments.map((appointment) => (
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
                            {appointment.provider}
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

          {/* Payments Tab */}
          {activeTab === "payments" && (
            <div className="space-y-6">
              {/* Payment Summary */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      $2,450
                    </div>
                    <p className="text-sm text-gray-600">Total Spent</p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      15
                    </div>
                    <p className="text-sm text-gray-600">Completed Payments</p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      1
                    </div>
                    <p className="text-sm text-gray-600">Pending Payments</p>
                  </CardContent>
                </Card>
              </div>

              {/* Payment History */}
              <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Payment History</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                      <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                        <option>All Payments</option>
                        <option>Paid</option>
                        <option>Pending</option>
                      </select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-medium text-gray-600">
                            Service
                          </th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600">
                            Provider
                          </th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600">
                            Amount
                          </th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600">
                            Date
                          </th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600">
                            Status
                          </th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {paymentHistory.map((payment) => (
                          <tr
                            key={payment.id}
                            className="border-b border-gray-100 hover:bg-gray-50"
                          >
                            <td className="py-4 px-4">
                              <div>
                                <p className="font-medium text-gray-900">
                                  {payment.service}
                                </p>
                                <p className="text-sm text-gray-600">
                                  {payment.method}
                                </p>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-gray-900">
                              {payment.provider}
                            </td>
                            <td className="py-4 px-4 font-semibold text-gray-900">
                              {payment.amount}
                            </td>
                            <td className="py-4 px-4 text-gray-600">
                              {payment.date}
                            </td>
                            <td className="py-4 px-4">
                              <Badge
                                variant={
                                  payment.status === "Paid"
                                    ? "default"
                                    : "outline"
                                }
                                className={
                                  payment.status === "Paid"
                                    ? "bg-green-500"
                                    : "border-yellow-500 text-yellow-600"
                                }
                              >
                                {payment.status}
                              </Badge>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Download className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
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
                          src={clientData.avatar || "/placeholder.svg"}
                          alt={clientData.name}
                        />
                        <AvatarFallback className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-2xl">
                          {clientData.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <Button
                        size="sm"
                        className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0 bg-gradient-to-r from-green-600 to-blue-600"
                      >
                        <Camera className="w-4 h-4" />
                      </Button>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {clientData.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Client since {clientData.joinDate}
                    </p>
                    <Badge className="bg-green-500">Verified Account</Badge>
                  </CardContent>
                </Card>

                {/* Personal Information */}
                <div className="lg:col-span-2">
                  <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>
                        Update your personal details and contact information
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                          </label>
                          <Input defaultValue="Sarah" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                          </label>
                          <Input defaultValue="Johnson" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            defaultValue={clientData.email}
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
                            defaultValue={clientData.phone}
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
                            defaultValue={clientData.location}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Bio
                        </label>
                        <Textarea defaultValue={clientData.bio} rows={3} />
                      </div>
                      <Button className="bg-gradient-to-r from-green-600 to-blue-600">
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
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                        <option>English</option>
                        <option>Swahili</option>
                        <option>French</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Currency
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                        <option>USD ($)</option>
                        <option>KES (KSh)</option>
                        <option>EUR (€)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timezone
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                        <option>EAT (UTC+3)</option>
                        <option>GMT (UTC+0)</option>
                        <option>EST (UTC-5)</option>
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
                            Receive updates via email
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
                            Receive updates via SMS
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
                            Receive browser notifications
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
                      Download My Data
                    </Button>
                  </CardContent>
                </Card>

                {/* Privacy Settings */}
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Privacy</CardTitle>
                    <CardDescription>
                      Control your privacy settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">
                          Profile Visibility
                        </p>
                        <p className="text-sm text-gray-600">
                          Make profile visible to service providers
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
                          Activity Status
                        </p>
                        <p className="text-sm text-gray-600">
                          Show when you're online
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
                          Data Analytics
                        </p>
                        <p className="text-sm text-gray-600">
                          Help improve our services
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
