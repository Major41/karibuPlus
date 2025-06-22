import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, FileText, Users, Briefcase, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Housing & Accommodation",
      description: "Find your perfect home with our curated property listings and neighborhood expertise.",
      features: ["Property search", "Neighborhood guides", "Lease negotiation", "Home setup"],
    },
    {
      icon: FileText,
      title: "Documentation & Legal",
      description: "Navigate Kenya's bureaucracy with expert guidance on permits and legal requirements.",
      features: ["Work permits", "Visa applications", "Legal documents", "Government liaison"],
    },
    {
      icon: Briefcase,
      title: "Employment Support",
      description: "Connect with career opportunities and build your professional network in Kenya.",
      features: ["Job placement", "Professional networking", "Skills assessment", "Career counseling"],
    },
    {
      icon: Users,
      title: "Community Integration",
      description: "Build meaningful connections and integrate seamlessly into Kenyan communities.",
      features: ["Social events", "Cultural orientation", "Community groups", "Mentorship"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Services for Your Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From finding your first home to building lasting community connections, we support every aspect of your life
            in Kenya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
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

        <div className="text-center">
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
