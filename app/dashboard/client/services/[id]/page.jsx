"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  Search,
  Filter,
  Star,
  MapPin,
  Clock,
  DollarSign,
  MessageCircle,
  CheckCircle,
  Award,
  Users,
  Heart,
  Share2,
  Bell,
  Calendar,
  CreditCard,
  FileText,
  Home,
  Plus,
  Settings,
  User,
  LogOut,
} from "lucide-react";

export default function ServiceVendorsPage() {
  const params = useParams();
  const serviceId = Number.parseInt(params.id);
  const [sortBy, setSortBy] = useState("rating");
  const [filterBy, setFilterBy] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Client data (same as dashboard)
  const clientData = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+254 700 123 456",
    location: "Nairobi, Kenya",
    joinDate: "March 2024",
    avatar: "/placeholder.svg?height=100&width=100",
  };

  // Conversations for message badge
  const conversations = [
    {
      id: 1,
      provider: "Prime Properties Kenya",
      unread: 2,
    },
    {
      id: 2,
      provider: "Legal Eagles Associates",
      unread: 0,
    },
    {
      id: 3,
      provider: "EduConsult Kenya",
      unread: 1,
    },
  ];

  // Service data
  const services = {
    1: {
      title: "Housing & Accommodation",
      description:
        "Find your perfect home with curated property listings and neighborhood expertise.",
      icon: "🏠",
    },
    2: {
      title: "Documentation & Legal",
      description:
        "Navigate Kenya's bureaucracy with expert guidance on permits and legal requirements.",
      icon: "📄",
    },
    3: {
      title: "Employment Support",
      description:
        "Connect with career opportunities and build your professional network.",
      icon: "💼",
    },
    4: {
      title: "Education Services",
      description:
        "Find the right schools and educational opportunities for your family.",
      icon: "🎓",
    },
    5: {
      title: "Transportation",
      description:
        "Get around Kenya safely and efficiently with our transport solutions.",
      icon: "🚗",
    },
    6: {
      title: "Healthcare Navigation",
      description:
        "Access quality healthcare with our medical service connections.",
      icon: "❤️",
    },
    7: {
      title: "Financial Services",
      description:
        "Set up your financial life in Kenya with banking and investment guidance.",
      icon: "💳",
    },
    8: {
      title: "Community Integration",
      description:
        "Build meaningful connections and integrate into Kenyan communities.",
      icon: "👥",
    },
    9: {
      title: "Digital Services",
      description:
        "Stay connected with mobile, internet, and digital service setup.",
      icon: "📱",
    },
  };

  // Vendors data sorted by rating (highest first)
  const allVendors = [
    {
      id: 1,
      name: "Prime Properties Kenya",
      rating: 4.9,
      reviewCount: 127,
      location: "Westlands, Nairobi",
      experience: "8 years",
      responseTime: "< 2 hours",
      startingPrice: 200,
      completedProjects: 245,
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
      featured: true,
      specialties: ["Luxury Apartments", "Family Homes", "Corporate Housing"],
      description:
        "Premier real estate agency specializing in expatriate housing solutions across Nairobi's prime locations.",
      availability: "Available",
      languages: ["English", "Swahili"],
      certifications: [
        "Licensed Real Estate Agent",
        "Property Management Certified",
      ],
      portfolio: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
    },
    {
      id: 2,
      name: "Westlands Housing Solutions",
      rating: 4.8,
      reviewCount: 89,
      location: "Westlands, Nairobi",
      experience: "6 years",
      responseTime: "< 3 hours",
      startingPrice: 180,
      completedProjects: 156,
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
      featured: false,
      specialties: [
        "Furnished Apartments",
        "Short-term Rentals",
        "Relocation Services",
      ],
      description:
        "Specialized housing solutions for professionals and families relocating to Kenya.",
      availability: "Available",
      languages: ["English", "French"],
      certifications: ["Real Estate License", "Relocation Specialist"],
      portfolio: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
    },
    {
      id: 3,
      name: "Nairobi Home Finders",
      rating: 4.7,
      reviewCount: 203,
      location: "Karen, Nairobi",
      experience: "10 years",
      responseTime: "< 4 hours",
      startingPrice: 150,
      completedProjects: 312,
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
      featured: true,
      specialties: ["Budget Housing", "Student Accommodation", "Family Homes"],
      description:
        "Affordable housing solutions with a focus on quality and customer satisfaction.",
      availability: "Busy",
      languages: ["English", "Swahili", "German"],
      certifications: ["Licensed Agent", "Customer Service Excellence"],
      portfolio: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
    },
    {
      id: 4,
      name: "Elite Property Consultants",
      rating: 4.6,
      reviewCount: 67,
      location: "Kilimani, Nairobi",
      experience: "5 years",
      responseTime: "< 1 hour",
      startingPrice: 300,
      completedProjects: 98,
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
      featured: false,
      specialties: [
        "Luxury Properties",
        "Executive Housing",
        "Investment Properties",
      ],
      description:
        "High-end property consultancy for discerning clients seeking premium accommodations.",
      availability: "Available",
      languages: ["English", "Italian"],
      certifications: ["Luxury Property Specialist", "Investment Advisor"],
      portfolio: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
    },
    {
      id: 5,
      name: "Affordable Homes Kenya",
      rating: 4.5,
      reviewCount: 145,
      location: "Kasarani, Nairobi",
      experience: "7 years",
      responseTime: "< 6 hours",
      startingPrice: 100,
      completedProjects: 189,
      avatar: "/placeholder.svg?height=80&width=80",
      verified: false,
      featured: false,
      specialties: [
        "Budget Rentals",
        "Shared Accommodation",
        "First-time Renters",
      ],
      description:
        "Making quality housing accessible to everyone with budget-friendly options.",
      availability: "Available",
      languages: ["English", "Swahili"],
      certifications: ["Real Estate License"],
      portfolio: ["/placeholder.svg?height=200&width=300"],
    },
    {
      id: 6,
      name: "Expat Housing Network",
      rating: 4.4,
      reviewCount: 78,
      location: "Lavington, Nairobi",
      experience: "4 years",
      responseTime: "< 5 hours",
      startingPrice: 250,
      completedProjects: 134,
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
      featured: false,
      specialties: [
        "Expatriate Services",
        "International Standards",
        "Cultural Integration",
      ],
      description:
        "Specialized services for international professionals and their families.",
      availability: "Available",
      languages: ["English", "French", "Spanish"],
      certifications: [
        "Expat Relocation Specialist",
        "Cultural Integration Certified",
      ],
      portfolio: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
    },
  ];

  const currentService = services[serviceId];

  // Sidebar items
  const sidebarItems = [
    {
      id: "overview",
      label: "Overview",
      icon: Home,
      href: "/dashboard/client",
    },
    {
      id: "services",
      label: "My Services",
      icon: FileText,
      href: "/dashboard/client",
    },
    {
      id: "messages",
      label: "Messages",
      icon: MessageCircle,
      href: "/dashboard/client",
    },
    {
      id: "calendar",
      label: "Calendar",
      icon: Calendar,
      href: "/dashboard/client",
    },
    {
      id: "payments",
      label: "Payments",
      icon: CreditCard,
      href: "/dashboard/client",
    },
    { id: "profile", label: "Profile", icon: User, href: "/dashboard/client" },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      href: "/dashboard/client",
    },
  ];

  // Filter and sort vendors
  const filteredVendors = allVendors.filter((vendor) => {
    const matchesSearch =
      vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.specialties.some((specialty) =>
        specialty.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesFilter =
      filterBy === "all" ||
      (filterBy === "verified" && vendor.verified) ||
      (filterBy === "featured" && vendor.featured) ||
      (filterBy === "available" && vendor.availability === "Available");

    return matchesSearch && matchesFilter;
  });

  // Sort vendors
  filteredVendors.sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "price":
        return a.startingPrice - b.startingPrice;
      case "experience":
        return Number.parseInt(b.experience) - Number.parseInt(a.experience);
      case "reviews":
        return b.reviewCount - a.reviewCount;
      default:
        return b.rating - a.rating;
    }
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  if (!currentService) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>
          <Link href="/dashboard/client">
            <Button className="bg-gradient-to-r from-green-600 to-blue-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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
                <Link key={item.id} href={item.href}>
                  <div className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
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
                  </div>
                </Link>
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
              <div className="flex items-center space-x-4 mb-2">
                <Link href="/dashboard/client">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                </Link>
                <div className="text-3xl">{currentService.icon}</div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {currentService.title}
                  </h1>
                </div>
              </div>
              <p className="text-gray-600 mt-1">{currentService.description}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {filteredVendors.length} Vendors Available
                </span>
                <span className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-400" />
                  Average Rating:{" "}
                  {(
                    filteredVendors.reduce((acc, v) => acc + v.rating, 0) /
                    filteredVendors.length
                  ).toFixed(1)}
                </span>
                <span className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-1" />
                  Starting from $
                  {Math.min(...filteredVendors.map((v) => v.startingPrice))}
                </span>
              </div>
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

          {/* Filters and Search */}
          <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search vendors or specialties..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  <select
                    value={filterBy}
                    onChange={(e) => setFilterBy(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  >
                    <option value="all">All Vendors</option>
                    <option value="verified">Verified Only</option>
                    <option value="featured">Featured</option>
                    <option value="available">Available Now</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="rating">Highest Rated</option>
                    <option value="price">Lowest Price</option>
                    <option value="experience">Most Experienced</option>
                    <option value="reviews">Most Reviews</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vendors Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredVendors.map((vendor, index) => (
              <Card
                key={vendor.id}
                className={`backdrop-blur-sm bg-white/90 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${
                  vendor.featured ? "ring-2 ring-green-500" : ""
                }`}
              >
                <CardContent className="p-6">
                  {/* Vendor Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Avatar className="h-16 w-16">
                          <AvatarImage
                            src={vendor.avatar || "/placeholder.svg"}
                            alt={vendor.name}
                          />
                          <AvatarFallback className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-lg">
                            {vendor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        {vendor.verified && (
                          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-xl font-bold text-gray-900">
                            {vendor.name}
                          </h3>
                          {vendor.featured && (
                            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                              <Award className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-1 mb-2">
                          {renderStars(vendor.rating)}
                          <span className="text-sm font-medium text-gray-900 ml-1">
                            {vendor.rating}
                          </span>
                          <span className="text-sm text-gray-600">
                            ({vendor.reviewCount} reviews)
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 space-x-4">
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {vendor.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {vendor.experience}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">
                        ${vendor.startingPrice}
                      </div>
                      <div className="text-sm text-gray-600">
                        starting price
                      </div>
                      <Badge
                        variant={
                          vendor.availability === "Available"
                            ? "default"
                            : "secondary"
                        }
                        className={
                          vendor.availability === "Available"
                            ? "bg-green-500 mt-2"
                            : "mt-2"
                        }
                      >
                        {vendor.availability}
                      </Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4">{vendor.description}</p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {vendor.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">
                        {vendor.completedProjects}
                      </div>
                      <div className="text-xs text-gray-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">
                        {vendor.responseTime}
                      </div>
                      <div className="text-xs text-gray-600">Response</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">
                        {vendor.languages.length}
                      </div>
                      <div className="text-xs text-gray-600">Languages</div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      Languages:
                    </h4>
                    <div className="flex space-x-2">
                      {vendor.languages.map((language, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs bg-blue-50 text-blue-700"
                        >
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Portfolio Preview */}
                  {vendor.portfolio.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">
                        Portfolio:
                      </h4>
                      <div className="flex space-x-2 overflow-x-auto">
                        {vendor.portfolio.slice(0, 3).map((image, idx) => (
                          <div key={idx} className="flex-shrink-0">
                            <img
                              src={image || "/placeholder.svg"}
                              alt={`Portfolio ${idx + 1}`}
                              className="w-20 h-16 object-cover rounded-lg border"
                            />
                          </div>
                        ))}
                        {vendor.portfolio.length > 3 && (
                          <div className="flex-shrink-0 w-20 h-16 bg-gray-100 rounded-lg border flex items-center justify-center">
                            <span className="text-xs text-gray-600">
                              +{vendor.portfolio.length - 3}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact Vendor
                    </Button>
                    <Button variant="outline" size="sm">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredVendors.length === 0 && (
            <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
              <CardContent className="p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No Vendors Found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search criteria or filters to find more
                  vendors.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setFilterBy("all");
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Load More */}
          {filteredVendors.length > 0 && (
            <div className="text-center mt-8">
              <Button variant="outline" className="bg-white/90">
                Load More Vendors
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
