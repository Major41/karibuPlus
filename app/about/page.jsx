import Header from "@/components/header"
import Footer from "@/components/footer"
import { Users, Target, Heart, Globe } from "lucide-react"
import {
  ShieldCheck,
  HeartHandshake,
  Network,
  
  MessageSquareText,
 
  Lightbulb,
} from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      title: "Local Expertise",
      description:
        "Deep understanding of Kenyan culture, systems, and processes to guide you effectively.",
      icon: ShieldCheck,
      bg: "bg-green-100",
      hoverBg: "hover:bg-green-200",
    },
    {
      title: "Personalized Support",
      description:
        "Tailored assistance that adapts to your unique needs and circumstances.",
      icon: HeartHandshake,
      bg: "bg-yellow-100",
      hoverBg: "hover:bg-yellow-200",
    },
    {
      title: "Trusted Network",
      description:
        "Vetted service providers and professionals you can rely on for quality support.",
      icon: Network,
      bg: "bg-blue-100",
      hoverBg: "hover:bg-blue-200",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Karibu Plus
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Karibu Plus is your trusted companion for starting life in
              Kenya—effortlessly and meaningfully.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Our Mission
            </h2>

            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
              {/* Left: Core Mission Statement */}
              <div className="md:w-1/2">
                <p className="text-xl leading-relaxed text-gray-700 mb-6">
                  To simplify relocation and settling in for newcomers to
                  Kenya—while creating meaningful impact by ethically connecting
                  global needs with local talent, empowering communities, and
                  delivering trusted, personalized support.
                </p>
              </div>

              {/* Right: Expansion/Impact Statement */}
              <div className="md:w-1/2">
                <p className="text-xl leading-relaxed text-gray-700 mb-6">
                  We guide expatriates, returnees, and newcomers through every
                  step of relocation and settling in, so you feel supported from
                  day one. But we’re more than a concierge. We connect global
                  needs with local talent—creating dignified jobs, empowering
                  communities, and delivering every service with trust, care,
                  and purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Our Values
          </h2>

          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            At Karibu Plus, our values aren’t just words—they shape every
            experience, every connection, and every outcome.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Trust */}
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Trust
              </h3>
              <p className="text-gray-600 text-sm">
                We earn trust by showing up with consistency, care, and
                integrity. Every interaction is a chance to build lasting
                relationships grounded in reliability.
              </p>
            </div>

            {/* Transparency */}
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquareText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Transparency
              </h3>
              <p className="text-gray-600 text-sm">
                We believe in clarity over confusion. From pricing to
                partnerships, we communicate openly and operate with honesty—so
                you always know where you stand.
              </p>
            </div>

            {/* Community */}
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Community
              </h3>
              <p className="text-gray-600 text-sm">
                We connect more than services—we connect people. By uplifting
                skilled local professionals and creating inclusive networks, we
                strengthen the fabric of every community we touch.
              </p>
            </div>

            {/* Purpose */}
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Purpose
              </h3>
              <p className="text-gray-600 text-sm">
                Everything we do is driven by impact. We exist to make real
                lives better—through thoughtful support, dignified work, and
                human-centered change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
              Why Choose Karibu Plus?
            </h2>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-8 shadow-md transition-colors duration-300 group ${feature.bg} ${feature.hoverBg}`}
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 mx-auto shadow-sm">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
