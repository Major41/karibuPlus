import { Shield, Users, Clock, Award } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Trusted & Secure",
      description:
        "Vetted service providers and secure processes ensure your safety and peace of mind throughout your journey.",
    },
    {
      icon: Users,
      title: "Local Expertise",
      description:
        "Our team of local experts understands Kenyan culture, systems, and processes to guide you effectively.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock assistance for emergencies and urgent matters, because we know settling in doesn't follow business hours.",
    },
    {
      icon: Award,
      title: "Personalized Service",
      description:
        "Tailored solutions that adapt to your unique needs, background, and circumstances for a truly personal experience.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Karibu Plus?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just a service provider - we're your trusted partner in making Kenya feel like home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <feature.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
