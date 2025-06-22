import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Home,
  FileText,
  Users,
  Briefcase,
  GraduationCap,
  Car,
  Heart,
  Phone,
  MapPin,
  CreditCard,
  Smartphone,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Housing & Accommodation",
      description: "Find the perfect home with our curated listings and neighborhood guides.",
      features: [
        "Property search assistance",
        "Neighborhood recommendations",
        "Lease negotiation support",
        "Home setup services",
      ],
    },
    {
      icon: FileText,
      title: "Documentation & Legal",
      description: "Navigate Kenya's bureaucracy with expert guidance on permits and documentation.",
      features: [
        "Work permit assistance",
        "Visa applications",
        "Legal document preparation",
        "Government liaison services",
      ],
    },
    {
      icon: Briefcase,
      title: "Employment Support",
      description: "Connect with opportunities and build your professional network in Kenya.",
      features: ["Job placement assistance", "Professional networking", "Skills assessment", "Career counseling"],
    },
    {
      icon: GraduationCap,
      title: "Education Services",
      description: "Find the right schools and educational opportunities for you and your family.",
      features: [
        "School selection guidance",
        "Enrollment assistance",
        "Educational consultancy",
        "Skills development programs",
      ],
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Get around Kenya safely and efficiently with our transport solutions.",
      features: ["Airport transfers", "Car rental assistance", "Driver services", "Public transport guidance"],
    },
    {
      icon: Heart,
      title: "Healthcare Navigation",
      description: "Access quality healthcare with our medical service connections.",
      features: ["Hospital recommendations", "Insurance guidance", "Medical appointments", "Emergency support"],
    },
    {
      icon: CreditCard,
      title: "Financial Services",
      description: "Set up your financial life in Kenya with banking and investment guidance.",
      features: ["Bank account setup", "Investment advice", "Insurance services", "Financial planning"],
    },
    {
      icon: Users,
      title: "Community Integration",
      description: "Build meaningful connections and integrate into Kenyan communities.",
      features: ["Social events", "Cultural orientation", "Community groups", "Mentorship programs"],
    },
    {
      icon: Smartphone,
      title: "Digital Services",
      description: "Stay connected with mobile, internet, and digital service setup.",
      features: ["Mobile phone setup", "Internet installation", "Digital payments", "Online services"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Comprehensive support for every aspect of your life in Kenya
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let us help you navigate your journey in Kenya with personalized support and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline">
                <MapPin className="w-5 h-5 mr-2" />
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
