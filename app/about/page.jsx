import Header from "@/components/header"
import Footer from "@/components/footer"
import { Users, Target, Heart, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Karibu Plus</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Your trusted digital partner for a seamless transition to Kenya
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Mission</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-8">
                Karibu Plus is a comprehensive digital concierge platform designed to provide seamless support for
                expatriates, Kenyan returnees, and newcomers navigating life in Kenya. Our primary goal is to simplify
                the often-complex relocation, reintegration, and settling-in processes.
              </p>
              <p className="text-xl leading-relaxed">
                Beyond convenience, Karibu Plus is committed to ethically connecting global demand with skilled local
                talent, formalizing domestic work, empowering communities, and delivering high-impact support with
                trust, transparency, and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Trust</h3>
              <p className="text-gray-600">
                Building lasting relationships through reliability and integrity in every interaction.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Transparency</h3>
              <p className="text-gray-600">
                Clear communication and honest practices in all our services and partnerships.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Community</h3>
              <p className="text-gray-600">
                Empowering local communities while connecting global talent and opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Purpose</h3>
              <p className="text-gray-600">Driven by meaningful impact and positive change in people's lives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Why Choose Karibu Plus?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Local Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of Kenyan culture, systems, and processes to guide you effectively.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Personalized Support</h3>
                <p className="text-gray-600">Tailored assistance that adapts to your unique needs and circumstances.</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Trusted Network</h3>
                <p className="text-gray-600">
                  Vetted service providers and professionals you can rely on for quality support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
