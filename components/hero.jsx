import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                🇰🇪 Welcome to Kenya - Karibu!
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Digital
                <span className="text-green-600"> Concierge</span> for Life in Kenya
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Seamless support for expatriates, returnees, and newcomers. We simplify relocation, reintegration, and
                settling-in with personalized assistance and trusted local connections.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
                <Link href="/contact">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/services">
                  <Play className="w-5 h-5 mr-2" />
                  Explore Services
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Successful Relocations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Trusted Partners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Happy family settling in Kenya"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-200 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-blue-200 rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
